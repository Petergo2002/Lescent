# Plan: Premium Review Carousel Redesign

## Goal
Transform the static testimonials grid into a smart, auto-playing "Wall of Love" carousel that aligns with Lescent's premium brand identity.

## Proposed Strategy
- **Visuals**: Deep Evergreen backgrounds with Gold-400 accents and Eggshell typography.
- **Motion**: Auto-playing loop using Framer Motion with "drag" support and hover-pause.
- **Smart UI**: Fixed-height cards with line-clamped text to prevent layout shifts.

## Tasks
- [ ] **Task 1: Research & Setup**
    - Verify current `Testimonials.tsx` structure and review data.
- [ ] **Task 2: Implement Carousel Core**
    - Create a new `Carousel` sub-component or update `Testimonials.tsx` to handle index-based sliding.
    - Add Framer Motion `AnimatePresence` for smooth transitions.
- [ ] **Task 3: Redesign Review Cards**
    - Update colors to `Evergreen` / `Gold-400`.
    - Fix hover behavior: remove the text expansion and replace with a subtle scale/glow effect.
- [ ] **Task 4: Add Auto-play & Controls**
    - Implement the auto-slide timer.
    - Add minimalist "Progress dots" or "Navigation arrows".
- [ ] **Phase X: Verification**
    - Check responsiveness (ensure it shows 1 card on mobile, 3 on desktop).
    - Run `ux_audit.py` to ensure smooth interactions.

## Done When
- [ ] Reviews are scrolling automatically.
- [ ] Aesthetics match the "Modern Scandinavian Luxury" vibe.
- [ ] Hover works predictably and elegantly.
