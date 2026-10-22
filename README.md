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
- **Partner logos** live in `assets/img/logos/` as SVG, each shown in a white band above the
  partner's name (white in both colour schemes, because most of the marks are dark). They were
  taken from each organisation's own website on 22 October 2026:

  | File | Organisation | Source |
  | --- | --- | --- |
  | `uva.svg` | University of Amsterdam | `uva.nl` logo sprite, English wordmark |
  | `tue.svg` | TU Eindhoven | `tue.nl` icon sprite (`tueLogo`), recoloured to the site's own `#C72125` |
  | `tudelft.svg` | TU Delft | inline logo symbol on `tudelft.nl`, set to black |
  | `wur.svg` | Wageningen University & Research | `wur.nl/wurds/images/logos/` |
  | `surf.svg` | SURF | `surf.nl/themes/surf/logo.svg` |
  | `uu.svg` | Utrecht University | `uu.nl` English logo |

  The TU/e and TU Delft marks are drawn with `currentColor` on their own sites, so a colour had to
  be chosen: TU/e uses the red its site computes, TU Delft black (its site shows white on a dark
  header). These are third-party trademarks used to identify project partners — worth a quick check
  against each organisation's brand guidelines, and against what the partners themselves prefer,
  before the site goes public.

## Deployment

The repository is named `bridgemd.github.io`, so GitHub Pages serves it at
`https://bridgemd.github.io/` from the repository root.

1. Push this folder to the `main` branch of the `bridgemd/bridgemd.github.io` repository.
2. In **Settings → Pages**, set *Source* to "Deploy from a branch", branch `main`, folder `/ (root)`.

## To do before going public

- Confirm the partner logos are used in line with each organisation's brand guidelines (see
  Editing above).
- Check the canonical/`og:url` tags and the absolute paths in `404.html` against the URL the site
  is actually served from — they currently assume `https://bridgemd.github.io/`, which is not where
  a repository named `bridgemd.github.io` under the `INDElab` account is published.

## Licence

Site content: CC BY 4.0 (as stated in the footer — change it if the consortium prefers otherwise).
