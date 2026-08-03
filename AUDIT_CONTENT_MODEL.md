# Audit content model

## Collection type

`api::audit.audit` owns page-level identity and composition:

| Field | Type | Purpose |
| --- | --- | --- |
| `title` | required string | Page H1 and the source for the entry slug. |
| `slug` | required UID | Stable route segment under `/audits`. |
| `hero` | required `audit.hero` | Eyebrow, highlighted title fragment, introduction, tags and ordered actions. |
| `content` | required Dynamic Zone | The ordered audit body and the source of sticky navigation. |
| `faqSection` | optional `shared.faq-section` | Section copy plus a many-to-many relation to reusable `FAQ` entries. |
| `capabilitiesCta` | required `service.hero-section` | Reuses the existing capabilities-page CTA model. |
| `seo` | required `shared.seo` | Reuses the website-wide SEO model. |

The collection has Draft & Publish enabled. `/api/audits` and `/api/audits/:documentId` are provided by the standard Strapi core router.

## Ordered content and sticky navigation

The content area is a single ordered Dynamic Zone. `audit.section-heading` is a semantic boundary: it starts an H2 section and provides its stable `anchorId`. Every block after it belongs to that section until the next `audit.section-heading`.

The frontend should:

1. Validate that the first content block is `audit.section-heading`.
2. Filter `audit.section-heading` blocks to build the sticky navigation in their CMS order.
3. Use `navigationLabel` when supplied; otherwise use `heading`.
4. Render `anchorId` on the H2 section container and use it for the navigation hash.
5. Group following blocks under that section until the next heading marker.

This boundary-marker approach lets an editor place any number and combination of blocks below one H2. It avoids coupling navigation to a card, table, or other visual pattern, and avoids nested Dynamic Zones (which Strapi components do not support).

## Dynamic Zone blocks

| Component | Editorial use |
| --- | --- |
| `audit.section-heading` | Starts a navigable H2 section. `anchorId` is required and restricted to URL-safe kebab case. |
| `audit.rich-text` | Structured prose, lower-level headings, lists and inline links. |
| `audit.card-grid` | General cards with optional eyebrow, rich body, labelled details and link. |
| `audit.comparison-cards` | Options compared through consistent labelled criteria, with optional recommendation metadata. |
| `audit.table` | Accessible column definitions and ordered rows/cells; row headings and a plain-language summary are supported. |
| `audit.quote` | Quotation, attribution, role and optional source link. |
| `audit.callout` | Highlighted supporting content with a semantic tone. |
| `audit.labelled-list` | Definition-style, numbered or plain title/body items. |
| `audit.two-column-content` | Two structured content columns, each supporting prose, labelled items and links. |
| `audit.link-group` | A titled group of reusable `elements.link` entries. |
| `shared.media` | Existing shared media block for future audit illustrations or files. |

For tables, cell order must match column order. `rowHeading` should be used when the first value identifies the row.

## Shared content and duplication rules

- FAQ answers remain in `api::faq.faq`. `shared.faq-section` relates them many-to-many so the same FAQ can be reused by multiple audit pages without copying it.
- CTA content uses `service.hero-section`, the component already consumed by the capabilities page's shared centered CTA. Its heading, descriptions and ordered `heroSectionButton` actions map directly to that design-system section. No audit-only CTA schema is introduced.
- Actions and links reuse `elements.buttons` and `elements.link`.
- Tags reuse `elements.points`.
- SEO uses `shared.seo` unchanged.

## Example composition for Product Modernisation Assessment

The sample page can be represented as:

1. Section heading: **The five routes**
2. Rich text
3. Comparison cards for the five routes
4. Callout: **A full rebuild is not one of the five.**
5. Section heading: **What the recommendation rests on**
6. Rich text
7. Numbered labelled list
8. Section heading: **The work that exists only during the change**
9. Rich text
10. Section heading: **What we need, and what you get**
11. Two-column content
12. Callout: **A defined engagement**
13. Section heading: **What this assessment does not do**
14. Numbered labelled list
15. Section heading: **If this is not the right assessment**
16. Rich text
17. Link group

The FAQ and capabilities CTA follow the Dynamic Zone as page-level sections.
