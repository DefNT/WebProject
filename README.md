# Mythos: Mythological Creatures Wiki

**Midterm project, Front-End Web Development**

Mythos is a multi-page, responsive website: an independent digital field guide to mythical creatures from different cultures. Each entry treats a creature as a window into the people who kept its story alive.

**Live site:** 
**Repository:** https://github.com/DefNT/WebProject
**Group:** SE-2530

## Team

- Turlykhan Zhortbas
- Mumina Mukazhan
- Ali Serekpaev
## Topic

Mythological creatures and the traditions they come from: the Sphinx, Medusa, the Minotaur, Kitsune, Fenrir, the Leshy, the Long (Chinese dragon), Tulpar and Samruk. The site covers six traditions: Greek & Roman, Egyptian, Norse, Slavic, East Asian, and Turkic & Kazakh.

## Pages

| Page | Folder | Description |
|------|--------|-------------|
| Home | `page1` | Hero banner, featured creatures, links to traditions |
| Bestiary | `page2` | Grid of all 9 creatures with origin, type and description |
| Mythologies | `page3` | Six traditions and a comparison table |
| About | `page4` | About the archive, working principles, purpose |
| Contact | `page5` | Contribution form for stories and corrections |

All pages share the same navigation bar and footer, so every page can be reached from any other.

## Features

### HTML
- Semantic HTML5: `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `blockquote`, `footer`
- Headings, paragraphs, lists, links and images with `alt` text
- **Table:** tradition comparison table with `thead`, `tbody` and `scope` (Mythologies page)
- **Form:** contact form with text, email, textarea, select, checkbox and submit button (Contact page)
- `div` and `span` used for structure and styling

### CSS
- Shared theme through CSS variables (colors, fonts) for a consistent look
- Fonts: Cormorant Garamond (headings) and Manrope (text)
- Classes and IDs used for styling (for example `#tradition-table`)
- **Flexbox:** navbar brand, footer, tradition rows, hero, quote ornament
- **CSS Grid:** featured creatures, bestiary grid, tradition grid, info cards
- **Positioning:**
  - `relative` and `absolute`: hero image and counter, creature tags, the "37" stat box on the About image, quote corners
  - `sticky`: navigation bar stays at the top while scrolling

### Bootstrap 5.3
- Grid system: `container`, `row`, `col-12`, `col-md-*`, `col-lg-*`, `g-*`
- Responsive collapsing navbar with a toggler button
- Utility classes: spacing (`pt-5`, `mt-4`, `mb-3`), flex helpers (`d-flex`, `gap-3`), alignment classes
- Components: buttons, table, form controls
- Dark theme through `data-bs-theme="dark"`

### Responsive design
Media queries for two breakpoints on every page:
- **Tablet (max-width: 992px):** grids drop to two columns or one, the active nav underline is replaced by color, the footer wraps
- **Mobile (max-width: 576px):** single-column layouts, smaller images and spacing, the footer links wrap

## Project structure

```
WebProject/
├── images/          # creature photos, hero, banner, about image
├── page1/           # Home
│   ├── index.html
│   └── styles.css
├── page2/           # Bestiary
├── page3/           # Mythologies
├── page4/           # About
├── page5/           # Contact
└── README.md
```

Each page has its own `index.html` and `styles.css`. Shared images are stored in `images/` and linked as `../images/...`.

## How to run locally

1. Clone the repository: `git clone [repository link]`
2. Open the `page1` folder and launch `index.html` in a browser (or use the VS Code Live Server extension)
3. Use the navigation bar to move between pages

## Technologies

HTML5, CSS3, Bootstrap 5.3.3 (CDN), Google Fonts, Git and GitHub, GitHub Pages for deployment.
