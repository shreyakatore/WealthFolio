# WealthFolio 💰

A premium Wealth Management & SIP (Systematic Investment Plan) Tracker Dashboard built with Next.js 16 and Tailwind CSS 4. Designed with a sophisticated dark-mode interface inspired by platforms like Zerodha and Groww.

**Live Demo:** https://wealth-folio-teal.vercel.app

---

## Features

- **SIP Calculator** — Real-time compound interest using the standard SIP future value formula
- **Interactive Sliders** — Smooth Radix UI sliders for monthly amount, return rate, and time horizon
- **Wealth Growth Chart** — Year-by-year invested capital vs compound growth (Recharts)
- **Skeleton Loader** — Production-grade loading state simulating async network requests
- **Error Boundary** — Clean fallback UI on data failures
- **Dark Mode** — Deep navy/slate palette with emerald green accents via next-themes
- **Client-side Persistence** — SIP profiles saved to localStorage with async save flow
- **Toast Notifications** — Save confirmations via Sonner
- **Fully Responsive** — Mobile-first layout across all screen sizes

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.2.6 |
| Language | TypeScript | 5.7.3 |
| Styling | Tailwind CSS | 4.2.0 |
| UI Components | Radix UI | various |
| Charts | Recharts | 2.15.0 |
| Icons | Lucide React | 0.564.0 |
| Notifications | Sonner | 1.7.1 |
| Theme | next-themes | 0.4.6 |
| Forms | React Hook Form + Zod | 7.54 + 3.24 |
| Analytics | Vercel Analytics | 1.6.1 |
| Deployment | Vercel | — |

---

## SIP Formula

\\\
FV = P × [(1 + r)^n - 1] / r × (1 + r)
\\\

| Variable | Meaning |
|----------|---------|
| P | Monthly investment amount (₹) |
| r | Monthly rate = Annual Rate ÷ 12 ÷ 100 |
| n | Total months = Years × 12 |
| FV | Future value of investment |

---

## Project Structure

\\\
wealth-management-dashboard/
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main dashboard entry point
├── components/
│   └── ui/                  # Radix-based reusable UI components
├── styles/
│   └── globals.css          # Global styles and Tailwind CSS variables
├── utils/
│   ├── sipCalc.js           # Pure SIP math engine
│   └── format.ts            # Currency and number formatters
└── public/                  # Static assets and icons
\\\

---

## Performance Decisions

- **useMemo on calculation engine** — Prevents recalculation on every render, zero lag during slider adjustments
- **Pure function in utils/sipCalc.js** — No side effects, fully testable, reusable across components
- **Client-side persistence** — localStorage eliminates backend cost for transactional calculation data
- **Simulated async save flow** — setTimeout + skeleton mirrors real-world API loading patterns

---

## Run Locally

\\\ash
git clone https://github.com/shreyakatore/WealthFolio.git
cd WealthFolio
npm install
npm run dev
\\\

Open http://localhost:3000

---

## Scripts

\\\ash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
\\\

---

## Author

**Shreya Katore** — Frontend Software Engineer

- GitHub: @shreyakatore
- LinkedIn: linkedin.com/in/shreya-katore
- Email: shrkatore18@gmail.com
