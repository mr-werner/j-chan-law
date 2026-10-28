# J Chan Law — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://jchanlawct.com/ (J Chan Law, LLC, Danbury, CT).
Preview: https://jcl.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content in `src/App.jsx`, styles in `src/styles.css`, concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `j-chan-law` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `jcl.blueprintwebstudio.com` is a CNAME at Porkbun.
Optional env vars: `VITE_CONCEPT_END_DATE` (defaults to 2026-12-02), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the consultation form (`api/contact.js`; demo mode without them).

## Design
- Logo: their original gold "J Chan Law, LLC · Attorney at Law" wordmark (trimmed), on the dark header.
- Palette from the original: the dark olive-charcoal background and logo gold #d8cf84, with parchment for reading sections and a deeper gold for type on light backgrounds.
- Fonts: Cormorant Garamond (headings), Cinzel (small caps labels, echoing the logo lettering), Source Sans 3 (body).
- Motif: a double gold frame around the portrait, section-mark (§) bullets for practice items, and a "docket" list of reported cases.
- Section order: hero with portrait and years in practice → the firm's two pledges → eight practice areas → attorney bio, bar admissions and award → reported cases and bar service → pro bono → consultation form and office → footer with attorney-advertising disclaimer.

## What changed from the current site
- The homepage hero is a Flash movie that no longer loads ("Couldn't load plugin"); replaced with a real hero and portrait.
- No mobile layout (no viewport meta, fixed 960px table layout); now fully responsive.
- Page titles still say "Grispin & Chan LLC"; the concept uses J Chan Law, LLC throughout.
- The attorney profile shows JackieChan@GrispinChanLaw.com while the contact page shows JChan@jchanlawct.com; the concept uses the jchanlawct.com address only.
- Contact page shows only thumbnails ("Click on pictures for more information"); the contact details are now one tap away.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm
- Whether Attorney Wendy Grispin is still with the firm (her profile is on the old site under the Grispin & Chan name). The concept features Attorney Chan only.
- Which phone to lead with: (203) 942-2386 (office) vs (203) 798-3829 (direct).
- Practice areas are still all active (the list is from the current Practice page).
- The "52 years in practice" figure is calculated from the 1974 admission.
- Portrait photo by Amanda Emanuel (credited on the current site); confirm it can be reused.
- Attorney-advertising disclaimer wording should be reviewed against Connecticut Rules of Professional Conduct.
- No reviews are shown (none on the current site).
