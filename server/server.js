import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json({ limit: "200kb" }));

// Minimal CORS (so the Vite frontend can call this API during dev)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

app.post("/send", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body ?? {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields." });
    }

    const gmailUser = requiredEnv("GMAIL_USER");
    const gmailAppPassword = requiredEnv("GMAIL_APP_PASSWORD");
    const mailTo = process.env.MAIL_TO || gmailUser;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: mailTo,
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Failed to send email." });
  }
});

const port = Number(process.env.SERVER_PORT || 5000);
app.listen(port, () => {
  console.log(`Email API running on http://localhost:${port}`);
});

