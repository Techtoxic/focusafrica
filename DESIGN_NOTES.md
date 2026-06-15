# Design Notes — Variant 1: Institutional Authority

**Branch:** `design-v1`

## Design Direction
Institutional / Corporate — structured, authoritative, trust-first. The goal is that a
large corporation, government body, or institutional funder lands on the site and
*immediately* trusts this firm. Think McKinsey/Kearney discipline, given a younger,
sharper African edge.

## Core Idea
A light, rigorously gridded site that signals stability and credibility before it says a
single word. Every section sits on a predictable 12-column structure with crisp, low-radius
edges and restrained motion, so the firm reads as established, dependable, and serious —
the partner you choose when the stakes are high.

## Typography
- **Libre Baskerville** (headings) — a high-contrast transitional serif rooted in classic
  publishing and institutional communication. It carries authority and heritage without
  feeling dated.
- **Inter** (body, UI, labels) — a neutral, highly legible grotesque that keeps the supporting
  text clean and modern so the serif does the talking. Uppercase, wide-tracked Inter is used
  for eyebrows and labels to reinforce the structured, documentary feel.

## Color Palette
| Token | Hex | Use |
|-------|-----|-----|
| Paper | `#FFFFFF` | Primary background |
| Paper Alt | `#F4F6F8` | Alternating section background |
| Paper Deep | `#ECEFF3` | Hover / inset surfaces |
| Navy | `#0B1F3A` | Brand primary, stats bands, footer, CTA bands |
| Navy 600 | `#14304F` | Hover state for navy |
| Navy 400 | `#294A73` | Secondary navy |
| Ink | `#16202E` | Body text |
| Muted | `#56616F` | Secondary text |
| Line | `#E2E6EB` | Borders, grid lines, dividers |
| Brass | `#B0883B` | Single metallic accent |
| Brass Dark | `#946F2C` | Accent text / hover |
| Brass Soft | `#F0E6D2` | Accent tints (check chips, success state) |

**Mood rationale:** Deep navy + white is the universal language of institutions, finance,
and government. A single restrained brass accent adds warmth and a touch of prestige without
ever becoming decorative. No second accent, no gradients on text — the discipline *is* the brand.

## Motion
Subtle only. Gentle fade-and-rise reveals (`Reveal` component, 0.7s, soft ease, no overshoot),
count-up on the stats band, and quiet hover transitions. Nothing bounces, nothing parallaxes.

## Imagery
Authentic African professional and Nairobi business contexts, presented full-frame inside
crisp bordered rectangles — no rounded corners, no decorative masks. Photography is treated
as evidence of credibility, not ornament.

## Packages
No packages added beyond the original dependencies. Animations use the existing
`framer-motion`; icons use the existing `lucide-react`; fonts load via the built-in
`next/font/google` (Libre Baskerville + Inter).

> **Note on images:** the photographs are AI-generated stand-ins chosen to reflect authentic
> African professional contexts. They live in `/public/images` and are referenced through a
> single map in `lib/content.ts`, so the client's real photography can be dropped in (same
> filenames) without touching component code.
