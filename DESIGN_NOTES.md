# Design Notes — Variant 2: Modern Boutique

**Branch:** `design-v2`

## Design Direction
Modern Boutique — editorial, premium, whitespace-driven. The goal is to communicate
premium quality, creative thinking, and modern expertise: *if a global design studio ran
a consultancy.*

## Core Idea
A near-monochrome, oversized-type canvas where confidence comes from restraint and scale.
Generous whitespace and asymmetric composition let huge headlines and a single electric
accent do the work, so the firm reads as sharp, contemporary, and quietly expensive — the
kind of advisor that thinks in design and detail.

## Typography
- **Space Grotesk** (display, headings, UI labels, buttons) — a contemporary geometric
  grotesque with just enough character to feel like a studio's own typeface. Set very large
  with tight tracking for confident, editorial hierarchy.
- **Inter** (body) — a humanist, highly readable companion that keeps long-form copy calm and
  legible beneath the oversized display type.

## Color Palette
| Token | Hex | Use |
|-------|-----|-----|
| Bone | `#F4F3EF` | Primary background |
| Bone 2 | `#ECEAE3` | Alternating section background |
| Bone 3 | `#E3E0D7` | Ghost numerals / tints |
| Ink | `#111111` | Text, dark CTA blocks, footer |
| Ink 2 | `#2B2B29` | Secondary text, hover |
| Muted | `#6B6B64` | Tertiary text |
| Line | `#DCD9CF` | Hairline borders |
| Electric Blue (accent) | `#2540FF` | The single brand carrier |
| Accent 600 | `#1A30D6` | Accent hover |

**Mood rationale:** A warm off-white base (bone, not stark white) feels considered and
gallery-like. Everything else is monochrome — so the one electric-blue accent reads as a
deliberate brand signature wherever it lands (links, stats, the full-bleed CTA block,
duotone imagery). One accent, used fearlessly, is the whole identity.

## Motion
Smooth scroll reveals (`Reveal`, 0.8s expo-out, no bounce), subtle vertical **parallax** on
key images (`Parallax`), count-up stats, an infinite client marquee, and polished
micro-interactions (diagonal arrow nudges, grayscale→colour image warm-ups on hover).

## Imagery
Intentional treatment, not raw stock: a duotone (ink ↔ electric blue) on the hero/feature
images for drama, soft grayscale that warms to full colour on hover elsewhere, and masked
shapes (arch tops, large radii) instead of plain rectangles — the studio fingerprint.

## Packages
No packages added beyond the original dependencies. Reveals/parallax use the existing
`framer-motion`; icons use `lucide-react`; fonts load via `next/font/google`
(Space Grotesk + Inter). Duotone/masks are pure CSS.

> **Note on images:** photographs are AI-generated stand-ins reflecting authentic African
> professional contexts, referenced through a single map in `lib/content.ts` so the client's
> real photography can replace them (same filenames) without code changes.
