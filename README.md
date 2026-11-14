# BMPS website

One-page landing site for BMPS, a Performance Royalty Organization under BLCPS.
Built with Next.js 16, Tailwind CSS 4, Three.js (React Three Fiber) and Framer Motion.

## Run it on your computer

Needs Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Put it live (temporary)

Easiest: push this folder to a GitHub repo, then import it at vercel.com (free plan). Vercel detects Next.js; no settings needed.
It also runs on any Node host or Coolify with `npm run build` and `npm start`.

## Where to edit things

- All page text: `src/content/site.ts` (contact details and repertoire samples are placeholders marked TODO)
- Sections: `src/components/sections/`
- 3D animations: `src/components/three/` (HeroScene = sound-wave field + spinning record; EqualizerScene = 3D level meter)
- Colours and fonts: `src/app/globals.css` (`@theme`) and `src/app/layout.tsx`
- Logo: `public/logo-light.png` (for dark backgrounds) and `public/logo.png` (navy, for light backgrounds)

## Not done yet (waiting for information)

- Trust strip with key numbers
- Royalty distribution section
- FAQ
- Contact form only shows a thank-you message; it does not send email yet
- Repertoire search uses sample entries, not the real database
