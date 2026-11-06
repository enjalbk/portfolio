# Enjal BK — Portfolio

A responsive, buildless portfolio inspired by the reference's cream, olive, and lime visual style. Includes Enjal's supplied portrait, education, contact links, and the reference's technical skill groups. Project and work-history claims are intentionally omitted until details are supplied.

## Local preview

Run `node server.mjs`, then visit http://127.0.0.1:4173. No dependencies or build step are required.

Run `npm run check` to check JavaScript syntax. In PowerShell with restricted script execution, use `npm.cmd run check`.

## Editing

- `dist/index.html`: personal details, links, education, and skills.
- `dist/styles.css`: responsive layout, colors, and typography.
- `dist/script.js`: mobile menu, toolkit filters, clipboard, and scroll effects.
- `dist/assets/enjal-graduation.jpg`: original user-supplied photo, presented with CSS cropping.

Email and phone links use the visitor's email and phone applications. The copy button uses the browser clipboard when available. No contact messages or personal information are collected by a backend. Google Fonts is optional; system font fallbacks are provided.

## Hosting

Serve `dist/` with any static host. The included `vercel.json` selects `dist/` for Vercel. OpenAI Sites identity and static output configuration are stored in `.openai/hosting.json`.
