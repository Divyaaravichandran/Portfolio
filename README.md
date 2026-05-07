## Portfolio

### Contact form email (Nodemailer)

This project includes a small Node.js API that sends the contact form message via SMTP using Nodemailer.

1) Create `.env` (copy from `.env.example`) and fill in `SMTP_*` and `CONTACT_*`
2) Start the API in one terminal:
   - `npm run dev:api`
3) Start the UI in another terminal:
   - `npm run dev`

The UI calls `POST /api/contact` (proxied to the API during development).
