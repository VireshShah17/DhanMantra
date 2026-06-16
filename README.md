# Dhan Mantra

Production-ready frontend website for **Dhan Mantra** — a premium financial advisory and investment guidance company.

**Tagline:** Your Growth Brings Our Growth

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form + Zod
- Lucide React
- React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, icons, logo
├── components/
│   ├── layout/      # Navbar, Footer, MainLayout
│   ├── sections/    # Page sections
│   ├── cards/       # Reusable card components
│   ├── forms/       # Form components
│   └── shared/      # Button, Logo, SEO, etc.
├── pages/           # Route pages
├── data/            # All business content (no hardcoded content in components)
├── services/        # API service layer (mock implementations)
├── hooks/           # Custom React hooks
├── types/           # TypeScript interfaces
├── constants/       # Brand colors, routes
└── utils/           # Helpers and validation schemas
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/products` | Products |
| `/education` | Education |
| `/contact` | Contact |

## Backend Integration

Service files in `src/services/` contain mock implementations with clear TODO comments for API integration.

### Environment Variables

Create a `.env` file:

```env
VITE_API_URL=https://api.dhanmantra.com
VITE_SITE_URL=https://dhanmantra.com
```

### Contact Form API

Update `src/services/contact.ts`:

```typescript
const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

## SEO

SEO is managed via the `usePageSEO` hook and `SEOHead` component. Page-specific metadata lives in `src/data/seo.ts`.

Each page sets:

- Dynamic title
- Meta description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## Brand Colors

| Token | Value |
|-------|-------|
| Primary (Rich Gold) | `#D4AF37` |
| Secondary (Deep Gold) | `#B89028` |
| Accent (Soft Gold) | `#E7CF7A` |
| Text Primary | `#111111` |
| Text Secondary | `#4B5563` |
| Background | `#FFFFFF` |
| Alt Background | `#FAF8F2` |
| Border | `#E8DDB4` |

## Logo

Replace the placeholder logo at `src/assets/logo/logo.svg` with your official Dhan Mantra logo. The same file is used in the navbar, footer, and contact section.

## Deployment

### Netlify

1. Push the project to a Git repository.
2. Log in to [Netlify](https://netlify.com) and click **Add new site → Import an existing project**.
3. Connect your repository.
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Add environment variables under **Site settings → Environment variables** (optional):
   - `VITE_API_URL`
   - `VITE_SITE_URL`
6. Deploy. SPA routing is handled by `public/_redirects`.

### Vercel

1. Push the project to a Git repository.
2. Log in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository.
4. Vercel auto-detects Vite. Confirm:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Add environment variables under **Settings → Environment Variables** (optional):
   - `VITE_API_URL`
   - `VITE_SITE_URL`
6. Deploy. SPA routing is handled by `vercel.json`.

## Compliance

Dhan Mantra is an Authorized Person (AP) of Arihant Capital. SEBI Registration No. INZ000180939.

Regulatory disclaimers are displayed on the homepage, product pages, and footer.

## License

Proprietary — Dhan Mantra. All rights reserved.
