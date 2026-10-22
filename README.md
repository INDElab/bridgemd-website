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
- **Colour.** Every work package has its own colour, defined once as a token with a `-soft` tint
  for backgrounds: `--c-meth` (gold, WP1), `--c-integ` (raspberry, WP2), `--c-ml` (blue, WP3),
  `--c-mat` (brick red, WP4), `--c-plant` (green, WP5), `--c-comm` (plum, WP6). The three
  evaluation-domain colours do double duty: `--c-ml`, `--c-mat` and `--c-plant` also carry the
  hero diagram's reuser pills and arrows and the use-case tiles' top edge, so the colour means
  something rather than decorating.

  **This branch is a variant:** WP1 is gold (41°) rather than the olive (81°) on `main`. Gold is
  warmer and brighter, but it sits only ~23° from WP4's terracotta, so the two badges read as
  related — WP1 is directly above WP4 in the work-package grid. Olive has the larger separation;
  gold has the more cheerful colour. To open that gap, WP4's colour on this branch is also darker
  and redder than on `main` — brick `#9c3a22` (12°) instead of terracotta `#b5542c` (18°) — which
  also lifts its badge contrast from 4.2:1 to 5.7:1. Note that `--accent`, the terracotta used for
  links and eyebrow labels, is unchanged.
- **Partner logos** live in `assets/img/logos/` as icon-only marks (no wordmark), shown in a 46px
  white tile beside the partner name — white in both colour schemes, because most of these marks
  are dark. The full logos with wordmarks are kept in `assets/img/logos/wordmark/` in case they are
  wanted somewhere with more room. Taken from each organisation's own website on 22 October 2026:

  | File | Organisation | Mark | Source |
  | --- | --- | --- | --- |
  | `uva.svg` | University of Amsterdam | coat-of-arms square | `uva.nl` logo sprite (`logo-uva-mini`) |
  | `tue.svg` | TU Eindhoven | TU/e | `tue.nl` icon sprite, in the site's own `#C72125` |
  | `tudelft.svg` | TU Delft | flame | inline logo on `tudelft.nl`, cropped to the flame, set to black |
  | `wur.svg` | Wageningen UR | green/blue mark | `wur.nl/wurds/images/logos/`, cropped |
  | `surf.svg` | SURF | SURF flag | `surf.nl/themes/surf/logo.svg`, cropped |
  | `uu.svg` | Utrecht University | sun seal | `uu.nl` English logo, cropped |

  The icon crops are `viewBox` changes only — no path data was altered, so the marks keep their
  proportions. The TU/e and TU Delft logos are drawn with `currentColor` on their own sites, so a
  colour had to be chosen: TU/e uses the red its site computes, TU Delft black (its own site shows
  it white on a dark header). These are third-party trademarks used to identify project partners —
  worth checking against each organisation's brand guidelines, and with the partners themselves,
  before the site goes public.

## Deployment

Hosting is not settled yet. The site is plain static files, so any static host works; it needs no
build command and no output directory.

- **Vercel** (the current plan, e.g. `bridgemd.vercel.app`): import the GitHub repository, framework
  preset "Other", leave build and output settings empty.
- **GitHub Pages:** Settings → Pages → Deploy from a branch → `main` / `/ (root)`. Note that the
  repository lives under the `INDElab` account, so Pages would serve it at
  `https://indelab.github.io/bridgemd.github.io/`, not at `bridgemd.github.io` — that hostname
  needs a repository named `indelab.github.io`. Pages also needs the repository to be public
  unless the organisation is on GitHub Enterprise Cloud.

Whichever is chosen, update the `canonical` and `og:url` tags in `index.html` and `team.html`;
they currently read `https://bridgemd.github.io/`. The absolute asset paths in `404.html` are
correct for any host that serves the site at its domain root (Vercel included).

## To do before going public

- Confirm the partner logos are used in line with each organisation's brand guidelines (see
  Editing above).
- Set the `canonical`/`og:url` tags to the final URL once hosting is decided (see Deployment).

## Licence

Site content: CC BY 4.0 (as stated in the footer — change it if the consortium prefers otherwise).
