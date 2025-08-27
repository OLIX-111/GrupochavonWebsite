import { Locate, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

function IconWrap({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex size-10 items-center justify-center rounded-[12px] bg-[#ee8e0b59] text-black border border-[#ee8e0b59]">
            {children}
        </span>
    );
}

type FormState = {
    name: string;
    phone: string;
    email: string;
    message: string;
};

export default function ContactSection() {
    const [state, setState] = useState<FormState>({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setState((s) => ({ ...s, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(state),
            });
            if (res.ok) {
                setSent(true);
                setState({ name: "", phone: "", email: "", message: "" });
                setTimeout(() => setSent(false), 2500);
            }
        } catch (err) {
            // no-op; in real app we could surface an error toast
        } finally {
            setLoading(false);
        }
    }

    const inputBase =
        "mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] text-slate-800 shadow-xs placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-200/70";

    return (
        <section className="w-full py-30 bg-white">
            <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: copy + contact info */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            Estamos Aquí para Ti
                        </h2>
                        <p className="mt-4 max-w-xl text-slate-600">
                            En Grupo Chavón, valoramos cada conexión. Ya sea para consultas,
                            alianzas estratégicas o comentarios, estamos a tu disposición para
                            escucharte y colaborar.
                        </p>

                        <ul className="mt-10 space-y-6">
                            <li className="flex items-start gap-4">
                                <IconWrap>
                                    <Phone/>
                                </IconWrap>
                                <div className="pt-1 text-[15px] text-slate-700">
                                    <a href="tel:8292222481" className="font-medium hover:underline">
                                        829-222-2481
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <IconWrap>
                                    <Mail/>
                                </IconWrap>
                                <div className="pt-1 text-[15px] text-slate-700">
                                    <a
                                        href="mailto:info@grupochavon.com"
                                        className="font-medium hover:underline"
                                    >
                                        info@grupochavon.com
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <IconWrap>
                                    <Locate/>
                                </IconWrap>
                                <div className="pt-1 text-[15px] text-slate-700">
                                    <span className="font-medium">
                                        Reparto Torres C/ 4ta #5, La Romana
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right: form card */}
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                            aria-labelledby="contact-title"
                        >
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                                        Nombre
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Jane Smith"
                                        className={inputBase}
                                        value={state.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                                        Teléfono
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="(123) 456 789"
                                        className={inputBase}
                                        value={state.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">
                                    Correo electrónico
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="test@gmail.com"
                                    className={inputBase}
                                    value={state.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mt-6">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder=""
                                    className={`${inputBase} resize-y align-top`}
                                    value={state.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-8 w-full rounded-xl bg-[#1c274c] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1c274c] focus:outline-none focus:ring-4 focus:ring-[#1c274c]/40 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Enviando…" : sent ? "Enviado ✓" : "Enviar"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
