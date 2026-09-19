# ACE Talent Consulting Website

Plain HTML + CSS + JavaScript. No build step, no npm.

## Run locally
Open `index.html` in a browser (or use the VS Code "Live Server" extension).

## Folder structure
- `index.html` : page shell (header, footer, script tags)
- `css/style.css` : all styles. Colors are in `:root` at the top (`--blue`, `--navy`, `--acc`)
- `js/data.js` : EDIT CONTENT HERE: company contact (`CO`), services, industries, jobs (`JB`), FAQ, stats, testimonials, blog
- `js/forms.js` : form fields + validation. Search for `TODO` to connect a real API / Formspree
- `js/pages.js` : components and page layouts (Home, About, Jobs, etc.)
- `js/app.js` : router, menu, filters, animations
- `images/` : put your real photos here

## Add real photos
In `js/pages.js`, replace the `ph(...)` placeholder with `<img src="images/your-photo.jpg" alt="Describe the image" loading="lazy">`.

## Deploy (free)
1. Push this folder to GitHub.
2. Netlify or Vercel > Import from GitHub > Deploy. Publish directory: root (`/`), no build command.
