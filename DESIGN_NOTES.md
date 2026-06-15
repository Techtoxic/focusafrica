# Design Notes — Variant 3: Bold & Pan-African

**Branch:** `design-v3`

## Design Direction
Bold & Distinctive — a firm that owns its identity: confident, rooted, and impossible to
confuse with a generic Western consultancy. It leads *from* its identity, not despite it.

## Core Idea
A warm, grounded, structurally expressive site where the brand's African roots are the design,
not a decoration. Earthy color blocks, architectural arch forms, and a characterful serif give
the firm a confident, unmistakable voice — proud, contemporary, and continental.

## Typography
- **Fraunces** (display, headings) — a high-contrast "old-style" serif with genuine
  personality (soft terminals, expressive italics). It feels crafted and human rather than
  corporate, giving the brand a distinctive editorial character.
- **Inter** (body) — a clean, neutral sans that keeps the expressive serif readable and the
  long-form copy modern and calm.

## Color Palette
| Token | Hex | Use |
|-------|-----|-----|
| Cream | `#F6EEE2` | Primary background |
| Cream 2 | `#EFE2CF` | Alternating section background |
| Sand | `#E7D6BD` | Tints |
| Ink | `#1C140D` | Warm near-black text |
| Ink 2 | `#3A2E22` | Secondary text |
| Muted | `#6E5C49` | Tertiary text |
| Line | `#E2D3BB` | Warm hairline borders |
| Terracotta | `#C2553A` | Primary accent / warm blocks |
| Terracotta Dark | `#A8442C` | Hover |
| Ochre | `#D9952B` | Secondary accent / highlights |
| Ochre Dark | `#BD7E1C` | Hover |
| Forest | `#274133` | Deep grounding tone (stats, footer, CTA blocks) |
| Forest 2 | `#1C3326` | Hover |

**Mood rationale:** A warm cream base with terracotta, ochre, and forest reads as confidently
African — earth, sun, and land — used in full-strength blocks rather than timid tints. The
three accents echo a Pan-African warmth without resorting to literal flag motifs or clipart.

## Structural / Geometric Language
Identity is carried through **architecture, not stamps**: repeating arch image masks
(`mask-arch`/`mask-arch-lg`), full-strength color blocks offset behind imagery, a 3-colour
Pan-African stripe at the top edge and footer, and pure-CSS structural patterns (arches, dots,
diagonals) layered behind dark sections. Nothing is decorative clipart — every motif is a
structural element of the layout.

## Motion
Expressive but purposeful: rise-and-settle reveals (`Reveal`), gentle vertical **parallax**
on arch-masked imagery (`Parallax`), count-up stats, an infinite client marquee, and tactile
hover interactions (lift, arrow nudges, expanding accent bars).

## Imagery
Authentic African professional and field contexts (boardroom, agronomy, training, fieldwork),
shown full-colour and warm inside arch masks so the people and places — not a filter — carry
the identity.

## Packages
No packages added beyond the original dependencies. Motion uses the existing `framer-motion`;
icons use `lucide-react`; fonts load via `next/font/google` (Fraunces + Inter). All patterns,
stripes, and arch masks are pure CSS.

> **Note on images:** photographs are AI-generated stand-ins reflecting authentic African
> professional contexts, referenced through a single map in `lib/content.ts` so the client's
> real photography can replace them (same filenames) without code changes.
