# Matvieiev AgentOS — Obsidian Glass color refresh

## Goal

Replace the green palette of the public Matvieiev AgentOS interface with a modern MATVIEIEV brand palette. Preserve the current layout, content, interactions, agent roles, and responsive behavior.

## Approved direction

The approved direction is **D · Obsidian Glass**: a near-black graphite foundation, luminous cyan for actions and live state, warm sand for premium/value signals, and restrained translucent surfaces.

## Palette

- Canvas: `#070A0C`
- Primary surface: `#0D1316`
- Elevated glass surface: `rgba(255, 255, 255, 0.045)`
- Strong border: `rgba(113, 238, 232, 0.24)`
- Neutral border: `rgba(255, 255, 255, 0.10)`
- Primary text: `#F6F4F0`
- Secondary text: `#93A7A9`
- Cyan action: `#19D3CF`
- Cyan highlight: `#71EEE8`
- Sand value accent: `#C8B59D`
- Sand highlight: `#F0E0CC`
- Warning: `#FFCA68`
- Error: `#FF7E72`
- External-system blue and purple accents remain available for Trello and Linear labels.

## Application rules

1. Cyan is the primary interactive color for buttons, active states, live indicators, focus rings, and progress.
2. Sand is used sparingly for value, revenue, premium labels, and the `AGENTOS` wordmark accent. It must not compete with primary actions.
3. Cards and consoles use subtle glass-like gradients and translucent borders without reducing text legibility.
4. Ambient lighting changes from green to cyan and warm sand, with low opacity to avoid visual noise.
5. Existing semantic warning, error, Trello, and Linear colors remain distinct.
6. The visual system must work on desktop presentation screens and mobile widths without layout changes.

## Components affected

- Global color tokens and page background
- Brand mark, wordmark, live status, headings, and hero actions
- Orbital agent diagram and ambient glows
- Statistics, scenario tabs, orchestration steps, result cards, and approval states
- Agent, schedule, skill catalog, search, filter, and footer surfaces
- Hover, focus, selected, running, and completed states

## Out of scope

- No copy, agent names, skill assignments, data, navigation, or interaction changes
- No new animation system or component restructuring
- No change to hosting, domain, or analytics

## Verification

- Build succeeds with no warnings introduced by the color refresh.
- All existing interactive scenario controls still work.
- Text and controls remain readable at desktop and mobile breakpoints.
- The public URL serves the refreshed assets over HTTPS.
- The final page visibly matches the approved Obsidian Glass direction: graphite base, cyan action hierarchy, and restrained sand accents.
