# Zaks & Co website

## Core concept

The screen is divided vertically into:

- Zaks on the left: Josh and Tessa as one permanent unit.
- Co on the right: a growing portfolio of independent companies.

The page division must pass precisely through the centre of the ampersand
in “ZAKS & CO.”

## Desktop behavior

- The viewport should fill the browser height.
- The left side remains fixed.
- The portfolio column on the right scrolls independently when required.
- The right column should partially reveal the next card when more cards exist.
- Do not show a prominent scrollbar.
- Company cards link to their respective websites.

## Company-card hover

The Turtle screenshot shows the hover state.

Default:
- warm off-white or transparent card surface
- subtle 1px border
- no obvious shadow

Hover:
- white background
- restrained soft shadow
- optional 1–2px upward translation
- pointer cursor
- 160–200ms transition

Do not change the photography, page background, copy, logo, or other cards
when hovering.

## Left content

- Seasonal photograph of Josh and Tessa together
- Zaks seal placeholder
- “Just a couple of investors turning ideas into assets.”
- “Josh & Tessa Zak”
- clickable email address
- no individual founder cards or LinkedIn links

## Portfolio cards

Each contains:
- supplied SVG logo
- company name
- one-line description
- category tag
- founding year
- entire card clickable

Each logo retains one canonical brand color. Card surfaces remain neutral.

## Seasonal system

Create a configuration object for four seasons. Each season supplies:
- image path
- manually designed pastel background gradient

Use date-based switching, but make the active season easy to override
during development.

## Mobile

Do not use independently scrolling columns.
Stack:
1. title
2. Zaks image
3. manifesto/signature
4. portfolio cards

## Design character

Editorial, understated, timeless and highly refined.
Avoid generic SaaS styling, excessive shadows, glassmorphism, loud gradients,
stock animation, and unnecessary navigation.