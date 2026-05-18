# CareQueue

CareQueue is a React healthcare booking app for finding diagnostic centres, comparing prices and reviews, and booking appointments for tests, scans, X-rays, ECG, echocardiograms, and specialist consultations.

The app is built as a front-end prototype with mock healthcare data and browser `localStorage` persistence. It is useful for demonstrating a complete patient booking flow without needing a backend service.

## Features

- User signup, login, and logout using browser storage
- Protected app routes for logged-in users
- Landing page with diagnostic service discovery
- Service catalogue for blood tests, scans, cardiology investigations, X-rays, and doctor consultations
- Search results filtered by selected service or consultation type
- Diagnostic centre cards with location, phone number, services, rating, reviews, and pricing
- Hospital and doctor listings for specialist consultations
- Booking form with patient details, appointment date, preferred timing, centre or hospital details, report timing, and review summaries
- Appointment confirmation flow
- My Appointments page with booking history and cancellation status
- About page describing the CareQueue service model

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4 via `@tailwindcss/vite`
- ESLint
- Browser `localStorage` for demo auth and appointments

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
carequeue/
+-- docs/                  # Supporting PDFs and document generation scripts
+-- public/                # Static public assets
+-- src/
|   +-- assets/            # App images and logos
|   +-- components/        # Pages, layout components, auth context, booking UI
|   +-- data/              # Mock pricing, hospital, doctor, and consultation data
|   +-- App.jsx            # Route definitions and auth-gated page routing
|   +-- index.css          # Global styles and Tailwind import surface
|   +-- main.jsx           # React entry point
+-- index.html
+-- package.json
+-- vite.config.js
+-- vercel.json
```

## Main Routes

| Route | Purpose |
| --- | --- |
| `/` | Shows the auth page when logged out, and the CareQueue landing page when logged in |
| `/book-appointments` | Service and consultation catalogue |
| `/search?service=...` | Filtered diagnostic centres or hospitals/doctors for the selected service |
| `/booking-form?center=...&service=...` | Appointment booking flow |
| `/appointments` | Current user's appointment history |
| `/about` | CareQueue information page |

## Local Storage Keys

CareQueue currently stores demo data in the browser:

- `currentUser`: the active logged-in user
- `carequeue_bookings`: appointment records created from the booking form

Because this is client-side storage, clearing the browser storage will remove users and bookings. For production, these flows should be moved behind a real backend API with server-side authentication, validation, and persistent database storage.

## Data Sources

Mock app data lives in:

- `src/data/pricing.js` for diagnostic service pricing
- `src/data/consultations.js` for consultation types, hospitals, doctors, and consultation reviews
- `src/components/SearchResults.jsx` for diagnostic centre listings
- `src/components/BookingForm.jsx` for diagnostic centre feedback, report timing, and scan doctor profiles

To add a new service, update the service cards, search data, pricing rules, and booking display logic together so the flow remains consistent from discovery to confirmation.

## Deployment

The project includes a `vercel.json` file for single-page app routing on Vercel. Build the app with `npm run build`; Vite outputs production files to `dist/`.

## Notes

This repository represents a front-end healthcare booking prototype. It should not be used to store real patient information until backend authentication, secure storage, consent handling, audit logging, and privacy controls are implemented.
