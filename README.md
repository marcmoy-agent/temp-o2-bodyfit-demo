# O2 BodyFit Static HTML Demo

This repo is a standalone static HTML preview of the redesigned O2 BodyFit site.

It is set up to work as:

- a normal local static site
- a GitHub Pages project site at `https://<username>.github.io/o2-bodyfit-static-html-demo/`

## Preview Locally

From this directory:

```bash
python3 -m http.server 8092
```

Then open:

```text
http://localhost:8092/
```

## GitHub Pages

Recommended setup:

1. Push this repo to GitHub as `temp-o2-bodyfit-demo`
2. Go to `Settings` -> `Pages`
3. Set the source to `Deploy from a branch`
4. Select branch `main`
5. Select folder `/ (root)`

GitHub Pages will then publish the site at:

```text
https://<username>.github.io/temp-o2-bodyfit-demo/
```

## Important Caveat

The Zen Planner member pages are included in this demo, but they may refuse to render on:

- `localhost`
- `github.io`
- temporary staging domains

Based on testing so far, those iframe pages appear to be restricted by Zen Planner to approved domains. The working assumption is that the final member iframe pages should run on the real `o2bodyfit.com` domain.

So this repo is good for previewing the brochure site and page structure, but the member login and member sign-up pages may still fail until they are hosted on the final domain.

## Current Limitations

- `membership-cancellation` is still a placeholder
- `membership-freeze-request` is still a placeholder
- member iframe behavior likely depends on production-domain allowlisting
