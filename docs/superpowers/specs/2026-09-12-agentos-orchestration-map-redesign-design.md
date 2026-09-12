# Matvieiev AgentOS: Orchestration Map Redesign

## Goal

Transform AgentOS from a dashboard of agent cards into a scene-ready, interactive orchestration system visually aligned with the AI Orchestrator School. The site must make one idea immediately legible: Vitalii sets direction; Solomiia orchestrates 12 specialized agents; the human approves results.

## Visual language

The School page is the reference, not a source to copy literally. AgentOS adopts:

- near-black graphite surfaces with a subtle technical grid;
- large condensed, high-contrast, uppercase display headings paired with readable Ukrainian body text;
- violet/purple connection lines and moving pulses to communicate work moving through the system;
- restrained warm-gold accents for human control, approval, and governance;
- cyan reserved for currently active agents and completed live actions.

Existing CTA destination, Ukrainian copy, AgentOS name, and the rule that outside actions need human confirmation remain intact.

## Information architecture

1. **Hero / Command Map.** Vitalii is represented as the human orchestrator. Goal, context, constraints, and success criteria feed the central Solomiia node. The node distributes the request to agent directions and returns a proposed action package for human approval.
2. **Live scenarios.** The three existing scenarios stay, but trigger routes through the map rather than a three-column console alone. Each scenario has a distinct agent route and result package.
3. **Agent network.** The 12 existing agents become explorable nodes grouped by responsibility: operations, signals, sales, finance, product, engineering, talent, and personal leverage. Opening a node shows role, KPI, skills, and its current contribution.
4. **Skills matrix.** The 56-skill search and filters remain; their language shifts from catalogue to operational capability matrix.
5. **Conversion.** The hero CTA and post-catalogue CTA to the AI Orchestrator School remain, keeping their distinct `utm_content` attribution values.

## Stage interactions

### Map behaviour

- Nodes support pointer/keyboard focus, click/tap to open a detail panel, and desktop dragging within the visual map bounds.
- Connection lines animate only when their connected agent is active. A pulse travels from input to Solomiia, onward to relevant agents, then back to the approval node.
- A selected agent has a clear focus treatment; the detail panel identifies its skills and business impact.

### Scenario playback

`Запустити сценарій` plays a 10–15 second deterministic sequence:

1. A human input is selected.
2. Solomiia receives and frames it.
3. Required agent nodes activate one by one.
4. The result package assembles in the approval node.
5. The human-approval state appears, without performing any external action.

Each existing scenario defines its own route and output. Scenario reset restores the initial map state.

### Stage mode

A `Режим сцени` control expands the map into a full-viewport overlay. It retains the essential title, route, live agent status, and close control; all supporting prose is suppressed. Escape, the close button, and the control itself exit the mode. The interface never enters stage mode automatically.

## Responsive, accessibility, and motion

- On small screens, the graph becomes an ordered vertical route with large tappable nodes; no horizontal scrolling or drag requirement remains.
- Every map action is reachable by keyboard, with visible focus and semantic buttons/controls.
- `prefers-reduced-motion: reduce` stops nonessential pulses, camera movement, and transitions. Playback remains as immediate step changes with the same content.
- Stage overlay traps focus while open and restores focus to its launcher when closed.

## Technical boundaries

- Keep the project dependency-free, using existing HTML, CSS, and vanilla JavaScript.
- Add a dedicated map data model that maps each scenario to nodes and ordered steps. Rendering, playback, and map selection use that model rather than hard-coded DOM state.
- Preserve the existing catalogue search/filter and current scenario information as independent modules.
- Avoid network calls and external state changes.

## Verification

- Check the three desktop playback routes, reset behaviour, agent selection, dragging, and stage mode open/close.
- Check keyboard navigation, Escape handling, focus return, and the reduced-motion variant.
- Check mobile layout at a narrow viewport: ordered route, readable controls, no horizontal overflow.
- Check both School CTA URLs and their UTM variants after the layout change.
