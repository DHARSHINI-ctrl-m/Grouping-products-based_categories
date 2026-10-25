# Category Atlas

A data exploration site for the mini project **Grouping Products Based on Categories**.

## Open the site

Double-click `index.html`, or from this folder run:

```bash
npx --yes serve .
```

Charts load from the Chart.js CDN, so you need an internet connection the first time you open the page.

## What it does

- Loads a built-in product catalog, or accepts a CSV / JSON upload
- Groups products by category
- Shows dashboard totals, a bar chart, a pie chart, grouped tables, and a sortable product table
- Filters by product name, category chips, and price range
- Click a chart slice to isolate that category

## File format

CSV or JSON with at least:

- `name`
- `category`
- `price`

Optional: `id`, `brand`, `stock`.
