# HealthReviewHub

A high-performance, mobile-first health supplement review site built with Next.js 15 (App Router), Tailwind CSS, and MDX.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Content**: MDX for blog/review posts
- **Deployment**: Static export for Netlify Drop

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

### Development

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind + custom styles
│   └── reviews/[slug]/     # Dynamic review pages
├── components/             # Reusable UI components
│   ├── Header.tsx          # Sticky header
│   ├── Footer.tsx          # Site footer
│   ├── ReviewCard.tsx      # Homepage grid cards
│   ├── StarRating.tsx      # Visual star ratings
│   ├── ProsCons.tsx        # Pros/cons lists
│   ├── VideoEmbed.tsx      # YouTube embeds
│   ├── QuickSummary.tsx    # Summary boxes
│   ├── StickyCTA.tsx       # Mobile sticky button
│   └── Sidebar.tsx         # Desktop sidebar
├── content/reviews/        # MDX review content
├── lib/                    # Utility functions
│   ├── reviews.ts          # MDX parsing
│   └── schema.ts           # JSON-LD generators
└── public/                 # Static assets
```

## Adding New Reviews

1. Create a new `.mdx` file in `content/reviews/`
2. Add frontmatter with required fields:

```mdx
---
title: "Your Review Title"
slug: your-review-slug
excerpt: "Short description..."
thumbnail: "/images/your-image.jpg"
rating: 4.5
videoId: "youtube-id" # optional
verdict: "recommended" # or "not-recommended" or "mixed"
pros:
  - "Pro 1"
  - "Pro 2"
cons:
  - "Con 1"
affiliateUrl: "https://..."
publishedAt: "2026-01-15"
---

Your review content here...
```

## Deployment to Netlify

1. Run `npm run build` to generate static export in `out/` folder
2. Drag and drop the `out/` folder to Netlify Drop
3. Or connect your repo for automatic deployments

## Design System

- **Primary Color (Trust Blue)**: `#0056b3`
- **Text Color (Dark Slate)**: `#1e293b`
- **CTA Color (Orange)**: `#FF5722`
- **Font**: Inter (Google Fonts)

## License

MIT
