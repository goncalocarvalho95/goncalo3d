# FiveM MLO Tutorial

A single-page reference for building FiveM MLOs with CodeWalker and Blender (Sollumz):
step-by-step workflow, Blender shortcuts, YTYP/YMAP flags, and useful links.

Any question? Contact me on Discord: [Gonçalo](https://discord.com/invite/goncalo0001).

## Stack

Vue 3 · Vite · TypeScript · Tailwind CSS 3 · pnpm

## Scripts

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Dev server on http://localhost:3000       |
| `pnpm typecheck` | Type-check `.ts` and `.vue` files         |
| `pnpm build`     | Type-check, then build to `dist/`         |
| `pnpm preview`   | Serve the production build locally        |

## Editing content

- Flags, shortcuts and links live in `src/data/*.ts`. Add an entry to the array and it appears (and becomes searchable) automatically.
- The step-by-step guides are written directly in `src/components/MLO.vue` and `Props.vue`.
- Images go in `src/assets/img/` as **WebP** (lossless for screenshots). Set `width`/`height` on every `<img>` and use `loading="lazy"` for anything below the fold.

The build uses relative asset URLs (`base: './'`), so `dist/` can be hosted from any folder on a static host.
