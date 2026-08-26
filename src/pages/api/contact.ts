import type { NextApiRequest, NextApiResponse } from "next"
// @ts-ignore nodemailer types resolution in some bundlers
import nodemailer from "nodemailer"

type Ok = { ok: true }
type Err = { error: string }
type Data = Ok | Err

// Helper para obtener vars de entorno con fallback y validación opcional
function env(name: string, required = true): string | undefined {
  const v = process.env[name]
  if (required && !v) throw new Error(`Falta variable de entorno: ${name}`)
  return v
}

// Config SMTP vía env (documentar en README/.env.local)
const SMTP_HOST = env("SMTP_HOST")
const SMTP_PORT = parseInt(env("SMTP_PORT") || "465", 10)
const SMTP_SECURE = (env("SMTP_SECURE", false) || "true") === "true"
const SMTP_USER = env("SMTP_USER")
const SMTP_PASS = env("SMTP_PASS")
const FROM_EMAIL = env("CONTACT_FROM_EMAIL") || "info@grupochavon.com"
const TO_EMAILS = (env("CONTACT_TO_EMAILS", false) || FROM_EMAIL).split(",")

// Crear transporter sólo una vez (hot-reload friendly)
let transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
})

// Sanitizar texto simple para HTML (mínimo)
const escapeHtml = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"])
    return res.status(405).json({ error: "Método no permitido" })
  }

  // El componente envía: name, phone, email, message
  // Backwards compatibility: interes/nombre/telefono/mensaje
  const body = req.body || {}
  const nombre = body.name || body.nombre
  const telefono = body.phone || body.telefono || ""
  const email = body.email
  const mensaje = body.message || body.mensaje
  const interes = body.interes || body.interest || ""

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Nombre, email y mensaje son requeridos" })
  }

  // Validaciones básicas
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" })
  }
  if (mensaje.length < 5) {
    return res.status(400).json({ error: "Mensaje demasiado corto" })
  }

  const subject = `Contacto Web Grupo Chavón - ${interes || 'Consulta'}`
  const safeMensaje = escapeHtml(mensaje).replace(/\n/g, '<br/>')
  const safeNombre = escapeHtml(nombre)
  const safeTelefono = escapeHtml(telefono)
  const safeInteres = escapeHtml(interes)

  const brandColor = '#ff751f'
  const html = `
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f6f8;padding:32px 0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:${brandColor};padding:20px 28px;color:#fff;font-size:20px;font-weight:600;letter-spacing:.5px;">
              Grupo Chavón · Nuevo Contacto
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;font-size:15px;line-height:1.55;color:#1f2937;">
              <h1 style="margin:0 0 12px;font-size:22px;line-height:1.2;color:#111827;font-weight:600;">Detalle del Mensaje</h1>
              <p style="margin:0 0 16px;">Has recibido un nuevo mensaje desde el formulario del sitio web.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;margin:0 0 20px;font-size:14px;">
                <tr><td style="padding:4px 0;width:140px;color:#6b7280;">Interés</td><td style="padding:4px 0;color:#111827;font-weight:500;">${safeInteres || '—'}</td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Nombre</td><td style="padding:4px 0;color:#111827;font-weight:500;">${safeNombre}</td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Teléfono</td><td style="padding:4px 0;color:#111827;">${safeTelefono || '—'}</td></tr>
                <tr><td style="padding:4px 0;color:#6b7280;">Email</td><td style="padding:4px 0;"><a href="mailto:${email}" style="color:${brandColor};text-decoration:none;">${email}</a></td></tr>
              </table>
              <h2 style="margin:0 0 8px;font-size:16px;color:#111827;">Mensaje</h2>
              <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:16px 18px;border-radius:12px;font-size:14px;line-height:1.6;">${safeMensaje}</div>
              <p style="margin:28px 0 0;font-size:12px;color:#6b7280;">Este correo se generó automáticamente – Grupo Chavón © ${new Date().getFullYear()}.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`

  const text = `Nuevo contacto (Grupo Chavón)\nInterés: ${interes}\nNombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\n\nMensaje:\n${mensaje}`

  try {
    await transporter.sendMail({
      from: `Grupo Chavón <${FROM_EMAIL}>`,
      to: TO_EMAILS,
      replyTo: email,
      subject,
      html,
      text,
    })

    // Respuesta al usuario (simplificada)
    const confirmHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;padding:32px;background:#f5f6f8;">
        <div style="max-width:620px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;padding:28px 32px;border-radius:14px;">
          <h1 style="margin:0 0 12px;font-size:20px;color:#111827;">Hemos recibido tu mensaje</h1>
          <p style="margin:0 0 16px;font-size:15px;line-height:1.5;color:#374151;">Hola ${safeNombre}, gracias por contactarnos. Nuestro equipo te responderá pronto.</p>
          <p style="margin:0 0 8px;font-size:13px;color:#6b7280;">Resumen:</p>
          <ul style="margin:0 0 20px;padding-left:20px;font-size:13px;color:#374151;line-height:1.5;">
            <li>Interés: ${safeInteres || '—'}</li>
            <li>Teléfono: ${safeTelefono || '—'}</li>
          </ul>
          <p style="margin:0 0 6px;font-size:13px;color:#6b7280;">Mensaje:</p>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;padding:12px 14px;border-radius:10px;font-size:13px;line-height:1.5;">${safeMensaje}</div>
          <p style="margin:24px 0 0;font-size:11px;color:#9ca3af;">Grupo Chavón © ${new Date().getFullYear()}</p>
        </div>
      </div>`
    await transporter.sendMail({
      from: `Grupo Chavón <${FROM_EMAIL}>`,
      to: email,
      subject: 'Hemos recibido tu mensaje',
      html: confirmHtml,
      text: 'Hemos recibido tu mensaje y te responderemos pronto.'
    })

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    console.error('SMTP error:', err)
    return res.status(500).json({ error: 'No se pudo enviar el correo' })
  }
}
