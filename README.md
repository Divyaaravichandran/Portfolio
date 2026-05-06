# Portfolio Website

A responsive personal portfolio built with **Vite + React + TypeScript + Tailwind + shadcn-ui**.  
Includes a working **Contact** form that can send messages to your email via a small Node server using **Nodemailer + Gmail SMTP**.

## Features

- Modern, responsive portfolio UI
- Animated sections (Framer Motion)
- Contact form → sends email (backend `POST /send`)
- Toast feedback on success / error

## Tech Stack

- Vite, React, TypeScript
- Tailwind CSS, shadcn-ui
- Framer Motion
- Node.js (Express) + Nodemailer (email)

## Getting Started

### 1) Install dependencies

```sh
npm install
```

### 2) Create environment variables

Copy `.env.example` to `.env` and fill in the values:

- `GMAIL_USER` — your Gmail address
- `GMAIL_APP_PASSWORD` — a **Gmail App Password** (recommended; do not use your normal password)
- `MAIL_TO` (optional) — where you want to receive messages (defaults to `GMAIL_USER`)
- `SERVER_PORT` (optional) — backend port (default `5000`)
- `VITE_API_URL` (optional) — backend URL for the frontend (default `http://localhost:5000`)

### 3) Run the app (2 terminals)

Terminal A — backend API (sends emails):

```sh
npm run server
```

Terminal B — frontend:

```sh
npm run dev
```

Default URLs:

- Frontend: `http://localhost:8080`
- Backend: `http://localhost:5000`

## API

### `POST /send`

Sends an email containing the submitted contact form details.

Expected JSON body:

```json
{ "name": "...", "email": "...", "subject": "...", "message": "..." }
```

## Scripts

- `npm run dev` — start frontend (Vite)
- `npm run server` — start email backend server
- `npm run build` — build frontend for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Deployment notes

- The frontend can be deployed to any static host (Vercel/Netlify/GitHub Pages).
- The email backend (`server/server.js`) must be deployed to a Node-compatible host (Render/Railway/Fly.io/etc.), and then set `VITE_API_URL` to that backend URL in your frontend environment.

## Troubleshooting

- If emails don’t send, confirm `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set correctly and you’re using an **App Password**.
- If the frontend can’t reach the backend, check `VITE_API_URL` and that the backend is running on `SERVER_PORT`.

