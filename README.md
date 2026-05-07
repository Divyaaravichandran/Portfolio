# Portfolio (Frontend-only)

## Run locally

```sh
npm install
npm run dev
```

## Contact form (EmailJS)

This project sends the contact form email directly from the frontend using EmailJS (no backend).

1) Create an EmailJS account and set up:
   - Email Service
   - Email Template
2) Create a `.env` in the project root (copy from `.env.example`) and set:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

### Template variables used

Your EmailJS template should reference these variables:
- `from_name`
- `reply_to`
- `subject`
- `message`

