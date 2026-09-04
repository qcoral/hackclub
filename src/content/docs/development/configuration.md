---
title: Configuration
order: 3
---

# Configuration

## Astro Config

The main config lives in `astro.config.mjs`. You can customize markdown rendering, add integrations, and more.

```javascript
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: "github-dark",
        },
    },
});
```

## Deployment

Build the site for production:

```bash
npm run build
```

The output goes to `dist/` and can be deployed to any static hosting provider.
