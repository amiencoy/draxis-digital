# Draxis Digital

Static website for [draxis-digital.my.id](https://draxis-digital.my.id), built without a framework to stay lightweight and easy to deploy on Cloudflare Pages.

## Local preview

There are no dependencies or build steps. Run any static file server from the repository root, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy to Cloudflare Pages

1. Open **Workers & Pages** in the Cloudflare dashboard.
2. Choose **Create application → Pages → Connect to Git**.
3. Select this repository and use `main` as the production branch.
4. Use the following build settings:

   - Framework preset: `None`
   - Build command: `exit 0`
   - Build output directory: `/`

5. Once the deployment succeeds, open **Custom domains** and add `draxis-digital.my.id`.

Every new push to `main` will be deployed automatically.

## Before launch

- Review and refine the current exploratory Draxis mark before treating it as a final identity.
- Keep project narratives and development statuses current.
- The primary contact address is `muhammad-amien@draxis-digital.my.id`.
- For a fully self-hosted setup, download and serve the Google Fonts locally.

## Project structure

- `index.html` — page structure and content
- `styles.css` — visual system, dreamy light/dark themes, layout, and responsive styles
- `assets/draxis-mark.png` — current exploratory brand mark generated from the early logo references
- `script.js` — theme switcher, mobile navigation, and reveal animations
- `_headers` — Cloudflare Pages security headers
- `robots.txt` and `sitemap.xml` — basic search metadata

## License

The website source is owned by Draxis Digital. Add an explicit open-source license before inviting public reuse or contributions.
