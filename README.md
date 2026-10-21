# bridgemd.github.io

Project website for **BridgeMD — Bridging the Distance between Data Producer and Data Reuser
through Automated Metadata Generation**, a 24-month project within the Thematic Digital Competence
Centre for Natural and Engineering Sciences (TDCC-NES), led by the Informatics Institute,
University of Amsterdam.

Content is drawn from the project proposal (`BridgeMD-TDCC-proposal-Final-20251117`).

## How it works

A plain static site: two hand-written HTML pages and one stylesheet. There is **no build step and
no dependencies** — serve the folder to preview it:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. (Opening `index.html` directly as a `file://` URL also works in
most browsers.) `.nojekyll` tells GitHub Pages to publish the files as-is rather than running them
through Jekyll.

## Layout

```
index.html             Everything about the project: hero + diagram, project snapshot table,
                       the problem, three objectives, six work-package tiles, three use cases,
                       datathons, partners, contact
team.html              Applicants and community affiliates
404.html               Not-found page
assets/css/style.css   All styling: design tokens at :root, light + dark mode
assets/js/nav.js       Mobile menu toggle (progressive enhancement)
assets/img/favicon.svg
```

## Editing

- **Colours, fonts, spacing** are CSS custom properties in `:root` at the top of
  `assets/css/style.css`; dark-mode values sit in the `prefers-color-scheme: dark` block below it.
- **Work packages** are the `<article class="wp-tile">` blocks in `index.html`. Each has a `WP*`
  badge, the output type on the right, the lead institution, a short description, topic pills
  (`<li class="pill">`) and the WP lead with an initials monogram.
- **Navigation and footer** are repeated in both pages — change both, and keep `aria-current="page"`
  on the link to the current page.
- **Partner logos:** partners currently show initials monograms (`<span class="mono mono--lg
  mono--sq">`). To use real logos, drop image files in `assets/img/` and replace that span with an
  `<img>` of the same size (38×38), keeping the `alt` text as the organisation name.

## Deployment

The repository is named `bridgemd.github.io`, so GitHub Pages serves it at
`https://bridgemd.github.io/` from the repository root.

1. Push this folder to the `main` branch of the `bridgemd/bridgemd.github.io` repository.
2. In **Settings → Pages**, set *Source* to "Deploy from a branch", branch `main`, folder `/ (root)`.

## To do before going public

- Add a contact email or mailing-list link (see the `TODO` comment near the bottom of `index.html`).
- Confirm the funding/acknowledgement wording and add a link to the TDCC-NES website in the footer
  of both pages.
- Add project start and end dates — the snapshot table currently says "24 months" with no timeline.
- Optionally swap the partner monograms for real logos (see Editing above).

## Licence

Site content: CC BY 4.0 (as stated in the footer — change it if the consortium prefers otherwise).
