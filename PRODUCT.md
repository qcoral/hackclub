# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Internal Hack Club team members referencing guides, processes, and resources for their work.

## Product Purpose

A lightweight internal documentation site for the Hack Club team. Collects general guides and resources in one place so team members can find what they need without hunting through scattered sources.

## Positioning

Not a public-facing product — a private knowledge base built to be fast, simple, and easy to maintain. Markdown-in, docs-out with no overhead.

## Operating Context

Team members look up docs during their work. Content is authored as markdown files in the repo and deployed as a static site. No authentication or access control at the application layer.

## Capabilities and Constraints

- Static site built with Astro 7, using content collections for markdown docs
- SPA-mode navigation via ClientRouter (no full-page flashes)
- Sidebar navigation auto-generated from content, sorted by frontmatter `order`
- Mobile support with slide-in sidebar
- Syntax highlighting via Shiki (github-dark theme)
- Light/dark theme support via `prefers-color-scheme`
- No table of contents, search, or versioning currently

## Evidence on Hand

Content is placeholder — real documentation has not been authored yet. No logos, assets, or existing content to preserve.

## Product Principles

1. **Low friction to author** — adding a doc is creating a markdown file with two frontmatter fields.
2. **Fast to navigate** — SPA transitions, simple sidebar, no unnecessary UI layers.
3. **Easy to maintain** — minimal dependencies, no CMS, no build complexity beyond Astro itself.
