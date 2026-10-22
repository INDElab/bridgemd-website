# bridgemd-website

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

  The six hues are spread so that no two read alike at badge size (12°, 41°, 144°, 204°, 275°,
  336°), and each is checked against its own tint for at least 4.5:1 contrast in both colour
  schemes. WP1's gold and WP4's brick are the closest pair, at 29°, and WP1 sits directly above
  WP4 in the grid — that is why WP4 is brick `#9c3a22` rather than the more orange terracotta it
  started as. Note that `--accent`, the terracotta still used for links and eyebrow labels, is a
  separate token and is unchanged. If you add a seventh colour, the free gaps are around 80° and
  240°.
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

Live at **https://indelab.github.io/bridgemd-website/**, served by GitHub Pages from the `main`
branch, root folder. Pushing to `main` redeploys.

That URL is a placeholder: a custom domain is planned once the project starts. The hostname
`bridgemd.github.io` is not available to this account — it would need a repository named
`indelab.github.io` — and `github.com/BridgeMD` and `gitlab.com/BridgeMD` are both taken.

The repository is public because GitHub Pages only serves private repositories on GitHub
Enterprise Cloud, and the INDElab organisation is on the Team plan.

**When the domain arrives:** add it under Settings → Pages → Custom domain, commit a `CNAME` file,
then update two things in this repository — the `canonical`/`og:url` tags in `index.html` and
`team.html`, and the three absolute paths in `404.html`, which currently carry the
`/bridgemd-website/` prefix that a project site needs and a domain root does not.

The site is plain static files, so any other static host works too (Vercel, Netlify): no build
command, no output directory, framework preset "Other".

## To do before going public

- Confirm the partner logos are used in line with each organisation's brand guidelines (see
  Editing above).
- Point the site at a custom domain once the project starts (see Deployment).

## Licence

Site content: CC BY 4.0 (as stated in the footer — change it if the consortium prefers otherwise).
