# mus49.github.io

Personal profile page for Harsh Vardhan. Plain HTML and CSS — no build step, no framework.

```
index.html    the whole page
style.css     the whole stylesheet
```

## Editing

Open `index.html` and edit the relevant `<section>`. Adding a publication means adding one `<li>` to
`ol.pubs`; the rest of the page is static text.

## Previewing

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Publishing

Pushing to `main` deploys to <https://mus49.github.io> via GitHub Actions
(`.github/workflows/pages.yml`), which uploads the repository root as-is.

```bash
git add . && git commit -m "Update" && git push origin main
```
