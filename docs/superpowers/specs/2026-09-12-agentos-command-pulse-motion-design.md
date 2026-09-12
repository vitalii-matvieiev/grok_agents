# Matvieiev AgentOS — Command Pulse motion design

## Goal

Make Matvieiev AgentOS feel like a live orchestration system during a presentation. Motion must demonstrate agents receiving work, completing it, and delivering one decision package without changing copy, data, or the existing user flows.

## Approved direction

**Command Pulse**: Solomiia is the visual command center. A cyan pulse travels through the team orbit, the active agent and orchestration step light up, and completed work resolves into a cascade of result cards.

## Motion system

### Ambient stage motion

- The existing outer orbit rotates slowly and continuously on desktop.
- A small cyan command pulse travels around the orbital ring every few seconds.
- The core has a restrained breathing glow. Satellite agents have an idle glow only while the hero is visible.
- The wordmark and static text do not animate continuously.

### Scenario execution

- Clicking the existing launch button adds a `running` state to the console and starts a short command pulse.
- Every flow step receives one distinct active state: cyan border, glow, an animated status dot, then a checkmark on completion.
- Result summary and each result card enter with a brief stagger. The approval card arrives last with a sand accent.
- Switching scenarios resets all runtime animation state before rendering the next flow.

### Scroll and interaction motion

- Agent, tomorrow-task, and skill cards fade upward once when entering the viewport.
- Cards receive a small lift and cyan edge glow on hover or keyboard focus.
- Filter changes keep their current functional behavior and add only a short opacity transition to the new results.

## Mobile and accessibility

- At widths below 900px, orbit rotations, card stagger, and hover-only effects are removed. The execution progress and result reveal remain.
- Under `prefers-reduced-motion: reduce`, all nonessential animations and transforms stop. Result visibility and state changes remain immediate and readable.
- Animations use only opacity and transform where possible. Decorative pulse elements are non-interactive and hidden from assistive technology.

## Limits

- No video, canvas, third-party animation library, or external network request.
- No change to existing agent data, scenario timing semantics, page content, navigation, or custom domain.
- The first screen must remain legible while the presentation is paused.

## Verification

- The three scenario tabs, launch button, reset button, filters, search, and keyboard launch shortcut still work.
- A desktop run clearly shows command pulse, active agent state, completed flow steps, and staggered results.
- A mobile-width run remains free from clipping, horizontal overflow, and dense decorative motion.
- Reduced-motion mode suppresses decorative movement.
- The public HTTPS site serves the same behavior after GitHub Pages publishes it.
