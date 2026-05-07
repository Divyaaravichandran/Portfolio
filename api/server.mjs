import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';

console.log("SMTP_HOST:", process.env.SMTP_HOST);

const app = express();

// Middleware
app.use(express.json({ limit: '25kb' }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:8080',
  })
);

// Validate required env variables
function requiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }

  return value;
}

// Create nodemailer transporter
function getTransporter() {
  const host = requiredEnv('SMTP_HOST');
  const port = Number(process.env.SMTP_PORT || 587);
  const user = requiredEnv('SMTP_USER');
  const pass = requiredEnv('SMTP_PASS');

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

// Validate contact form payload
function validateContactPayload(body) {
  const name =
    typeof body?.name === 'string' ? body.name.trim() : '';

  const email =
    typeof body?.email === 'string' ? body.email.trim() : '';

  const subject =
    typeof body?.subject === 'string'
      ? body.subject.trim()
      : '';

  const message =
    typeof body?.message === 'string'
      ? body.message.trim()
      : '';

  if (!name || !email || !subject || !message) {
    return {
      ok: false,
      error: 'All fields are required.',
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      error: 'Invalid email address.',
    };
  }

  return {
    ok: true,
    value: {
      name,
      email,
      subject,
      message,
    },
  };
}

// Health route
app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    message: 'Server running successfully',
  });
});

// Contact route
app.post('/api/contact', async (req, res) => {
  const parsed = validateContactPayload(req.body);

  if (!parsed.ok) {
    return res.status(400).json({
      ok: false,
      error: parsed.error,
    });
  }

  try {
    const transporter = getTransporter();

    const to =
      process.env.CONTACT_TO ||
      requiredEnv('SMTP_USER');

    const from =
      process.env.CONTACT_FROM ||
      requiredEnv('SMTP_USER');

    const { name, email, subject, message } =
      parsed.value;

    const text = `
New Portfolio Message

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`;

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text,
    });

    return res.json({
      ok: true,
      message: 'Email sent successfully',
    });
  } catch (err) {
    console.error('MAIL ERROR:', err);

    return res.status(500).json({
      ok: false,
      error:
        err instanceof Error
          ? err.message
          : 'Failed to send email.',
    });
  }
});

// IMPORTANT FOR RAILWAY/RENDER
const port = process.env.PORT || 5174;

app.listen(port, () => {
  console.log(
    `Contact API listening on port ${port}`
  );
});