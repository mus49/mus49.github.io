# Harsh Vardhan's Portfolio Site

A minimal, distraction-free personal portfolio.

## Adding New Articles

### 1. Create New Content

**For Essays:**
```bash
hugo new essays/your-article-title.md
```

**For Research:**
```bash
hugo new research/your-research-title.md
```

**For Projects:**
```bash
hugo new projects/your-project-title.md
```

**For Notes:**
```bash
hugo new notes/your-note-title.md
```

### 2. Edit the Article

Open the newly created file in `content/[section]/your-article-title.md` and edit the front matter:

```markdown
---
title: "Your Article Title"
date: 2025-12-30
description: "A short description that appears in lists"
---

Your content goes here...
```

### 3. Preview Locally

Run the Hugo development server:
```bash
hugo server -D
```

Visit `http://localhost:1313` to preview your site.

## Publishing to GitHub Pages

### Initial Setup (One-time)

1. **Create a GitHub repository** named `mus49.github.io`

2. **Initialize Git in your project** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Add the remote repository:**
```bash
git remote add origin https://github.com/mus49/mus49.github.io.git
```

4. **Create `.github/workflows/hugo.yml`** for automatic deployment:
```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest'
          extended: true

      - name: Build
        run: hugo --minify

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

5. **Enable GitHub Pages** in repository settings:
   - Go to `Settings` → `Pages`
   - Source: `GitHub Actions`

### Regular Publishing Workflow

Every time you add or update content:

```bash
# 1. Add your changes
git add .

# 2. Commit with a descriptive message
git commit -m "Add new article: Your Title"

# 3. Push to GitHub
git push origin main
```

GitHub Actions will automatically build and deploy your site to `https://mus49.github.io`

The deployment usually takes 1-2 minutes. Check the "Actions" tab in your GitHub repository to monitor the progress.

## Quick Commands

```bash
# Create new essay
hugo new essays/title.md

# Preview site locally
hugo server -D

# Build site (generates /public folder)
hugo

# Publish to GitHub
git add . && git commit -m "Update content" && git push origin main
```

## Site Structure

```
content/
├── essays/      # Essays and long-form content
├── research/    # Research papers and notes
├── projects/    # Project documentation
└── notes/       # Quick thoughts and notes
```

## Customization

- **Edit site info**: `hugo.toml`
- **Edit styles**: `static/css/custom.css`
- **Edit layouts**: `layouts/` directory

---

Built with ♥ using Hugo
