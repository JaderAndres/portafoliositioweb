## Purpose
This file gives focused, actionable guidance for AI coding agents working on this Angular portfolio project so they become productive quickly.

## Quick Architecture Summary
- **Framework**: Angular 20.3 with optional SSR (server.ts, main.server.ts).
- **Main areas**: frontend sources under `src/app/` (components, services, models), SSR entry points at `src/main.server.ts` and `src/server.ts`, static assets in `public/imagenes/`.
- **Data flow**: `Home` requests lists from `ProyectoService` (src/app/services/proyecto.ts); navigation to `detalle-proyecto/:id` loads `DetalleProyecto` which calls `DetalleProyectoService` (src/app/services/detalleproyecto.ts).

## What to change and where (concrete)
- To add or update sample data, edit `src/app/services/proyecto.ts` and `src/app/services/detalleproyecto.ts` — these services hold hardcoded arrays used by components.
- To add a new page/component, follow existing pattern: create `src/app/<kebab-name>/<kebab-name>.ts`, `.html`, `.css` and add route in `src/app/app.routes.ts`.
- To change route parameter handling, look at `DetalleProyecto` usage of `ActivatedRoute` and `this.route.snapshot.paramMap.get('id')`.
- For SSR changes, inspect `src/main.server.ts` and `src/server.ts` and update build/serve scripts in `package.json`.

## Project-specific conventions
- Components organized in `src/app/<component-name>/` with matching `.ts`, `.html`, `.css` files (kebab-case directory names).
- Models live in `src/app/models/` as TypeScript interfaces (`proyecto.ts`, `detalleproyecto.ts`).
- Services use Angular DI and `providedIn: 'root'`. Components retrieve services via `inject(...)`.
- Tests: unit spec files live alongside components/services (`*.spec.ts`) and use Karma/Jasmine.

## Important files to inspect for behavior and examples
- App root and routing: [src/app/app.ts](src/app/app.ts) and [src/app/app.routes.ts](src/app/app.routes.ts)
- Home list flow: [src/app/home/home.ts](src/app/home/home.ts)
- Detail flow: [src/app/detalle-proyecto/detalle-proyecto.ts](src/app/detalle-proyecto/detalle-proyecto.ts)
- Services: [src/app/services/proyecto.ts](src/app/services/proyecto.ts) and [src/app/services/detalleproyecto.ts](src/app/services/detalleproyecto.ts)
- Models: [src/app/models/proyecto.ts](src/app/models/proyecto.ts) and [src/app/models/detalleproyecto.ts](src/app/models/detalleproyecto.ts)
- SSR entrypoints: [src/main.server.ts](src/main.server.ts) and [src/server.ts](src/server.ts)

## Build / test / run commands (as used in this repo)
- Install: `npm install` in repository root.
- Dev server: `npm start` or `ng serve` (serves at http://localhost:4200).
- Build production: `npm run build`.
- Watch build: `npm run watch`.
- Unit tests: `npm test`.
- SSR run: `npm run serve:ssr:portafolio` (see `package.json` for exact script).

## Code patterns for AI edits (do these, not generic stuff)
- When adding data, keep shape consistent with interfaces in `src/app/models/` (fields and optional properties).
- Prefer editing the service arrays rather than mutating components — components assume services provide ready-to-display objects.
- When adding routes, keep the path naming consistent with existing kebab-case pattern and update navigation calls (`this.router.navigate([...])`).
- Avoid changing global styling unless the change is UI-focused; prefer component-scoped CSS in component folder.

## Integration points & assets
- Images and logos: `public/imagenes/` (Power BI project images are under `public/imagenes/powerbi/`).
- If adding external links (Power BI, repos), use `DetalleProyecto.enlaceExternoProyecto` fields in detail objects.

## Tests and QA notes
- Unit tests use Karma/Jasmine. Look for existing `*.spec.ts` files in `src/app/` for patterns. Keep tests small and focused on component/service behavior.

## When in doubt — minimal safe edits
1. Update or extend service data arrays (`proyecto.ts`, `detalleproyecto.ts`).
2. Add new component folder using existing components as templates (copy `home/` or `detalle-proyecto/`).
3. Wire route in `app.routes.ts` and add navigation in `home.ts`.

## TODO / Follow-up from the agent
- Ask the repo owner if there are any hidden or external CI steps not in `package.json` (Docker builds, deployment commands).

---
If any section is unclear or you want more examples (e.g., a component scaffold or service update example), tell me which area to expand.
