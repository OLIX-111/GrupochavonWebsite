import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    // In a real implementation, send an email or persist the data.
    // For now, just echo back success to let the UI confirm.
    const { name, email, phone, message } = req.body ?? {};
    if (!name || !email) {
        return res.status(400).json({ message: "name and email are required" });
    }

    return res.status(200).json({ ok: true, received: { name, email, phone, message } });
}
