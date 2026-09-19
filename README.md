# Dilithi Tharindi — Portfolio

A single-page, responsive portfolio site for Dilithi Tharindi (Associate IT Analyst),
built with plain HTML, CSS and JavaScript — no build step, no framework — so it can
be hosted directly on GitHub Pages.

## What's inside

```
.
├── assets/
│   ├── profile.jpeg     # Profile photo used in the hero section
│   └── epic.m4a         # Background music track (add your own file here)
├── css/
│   └── style.css        # All styling
├── js/
│   └── script.js        # Mobile nav, reveal-on-scroll, audio toggle
├── index.html            # The whole site
└── README.md
```

## Content

Everything on the page — the summary, skills, work experience, education and
languages — comes directly from the CV that was supplied. Two deliberate choices
were made for privacy:

- The two referees are listed by name and title only; their personal phone
  numbers and email addresses are not published on the public site. Add them
  back in yourself in `index.html` under the `#references` section if you'd
  rather have them visible.
- The home address is shown as "Ambalantota, Sri Lanka" rather than the full
  street address, for the same reason. Edit the `#contact` section if you want
  the full address shown.

The CV document itself is **not** included or linked anywhere on the site.

## Before you publish

1. **Add the background audio file.** Drop your track in at `assets/epic.m4a`
   (the path is already wired up in `index.html`). If the file isn't there,
   the sound button in the bottom-right corner will simply disable itself —
   nothing breaks.
2. **Check the profile photo.** `assets/profile.jpeg` currently holds the
   headshot from the CV. Swap it out for a different file of the same name
   if you'd prefer another photo.
3. **Double-check the contact links** — email, phone, LinkedIn
   (`dilithi-tharindi`) and GitHub (`DTharindiGHub`) — against the current
   accounts before it goes live.

## Deploying to GitHub Pages

1. Create a new repository on GitHub — for a personal/user site, name it
   `<your-github-username>.github.io` (e.g. `DTharindiGHub.github.io`); for a
   project site, any repo name works.
2. Upload/push these files (`index.html`, `css/`, `js/`, `assets/`, `README.md`)
   to the root of that repository — keep the folder structure exactly as it is.
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**,
   set the branch to `main` (or whichever branch you pushed to) and the folder
   to `/ (root)`, then save.
5. GitHub will publish the site at:
   - `https://<username>.github.io` (if the repo is named `<username>.github.io`), or
   - `https://<username>.github.io/<repo-name>/` (for any other repo name).
6. Give it a minute or two after the first deploy, then reload.

## Editing later

- **Text content** — everything is in `index.html`; each section is clearly
  commented (`<!-- ===== SECTION ===== -->`).
- **Colours, fonts, spacing** — all defined as CSS custom properties at the
  top of `css/style.css` under `:root`, so a palette or font change only
  needs to happen in one place.
- **Nav links / section order** — add or reorder `<section>` blocks in
  `index.html` and update the matching links in the `<nav>` at the top.

## Browser support & accessibility

- Fully responsive from small phones up to wide desktop screens.
- Keyboard-navigable, with visible focus states and a "skip to content" link.
- Respects `prefers-reduced-motion` — the entrance animation and audio-bar
  animation are skipped automatically for anyone who has that setting on.
- No external JavaScript frameworks; the two Google Fonts requests
  (Public Sans, IBM Plex Sans/Mono) are the only external calls the page makes.
