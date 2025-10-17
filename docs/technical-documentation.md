# Technical Documentation

## Overview

This document provides technical details for the portfolio website project, including file structure, main features, and implementation notes.

## File Structure

```
assignment-1/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # Site styles
├── js/
│   └── theme.js            # Dark/light mode toggle
├── assets/
│   └── images/
│       └── me.jpeg         # Profile image
├── docs/
│   ├── ai-usage-report.md  # AI usage documentation
│   └── technical-documentation.md # Technical documentation (this file)
└── README.md               # Project overview and setup
```

## Main Features

- **About Me Section**: Displays profile image and introduction.
- **Projects Section**: Lists projects with technology icons and descriptions.
- **Contact Section**: Simple contact form (no backend).
- **Dark/Light Mode**: Toggle button for theme switching, with persistent user preference.
- **Responsive Design**: Layout adapts to different screen sizes.

## Implementation Notes

- **Styling**: Uses Google Fonts (Inter, Roboto, Poppins) for a modern look. Dark mode styles are handled via the `.dark-mode` class in CSS.
- **Theme Toggle**: Implemented in `js/theme.js` using a fixed-position button. The button's background and icon color change based on the current theme.
- **Technology Icons**: Project sections use SVG icons from CDN for tech stack visualization.
- **Accessibility**: Semantic HTML tags and alt attributes are used for better accessibility.

### Recent technical updates

- CSS variables: Colors and gradients were centralized in `:root` variables in `css/styles.css` to make theming and palette tweaks easier.
- Theme toggle improvements: the toggle swaps button background and icon color depending on theme for contrast; the icon is centered using flexbox. Preferences are saved in `localStorage`.
- Typewriter greeting: `js/typewriter.js` implements a typewriter effect that types a greeting determined by local time (morning/afternoon/evening/night) and now applies a class to the `#greeting` section to control gradient styling.
- Time-based gradients: multiple linear-gradient rules were added for `#greeting` variants (morning, afternoon, evening, night, late) and are driven by classes set in the JS.
- Code hygiene: `js/theme.js` and `js/typewriter.js` include explanatory comments; assets were organized under `assets/images`.


## Troubleshooting

- If styles or scripts do not load, check file paths and browser cache.
- For dark mode issues, verify the `.dark-mode` CSS and `theme.js` logic.

## Credits

- Icons: [Devicon CDN](https://devicon.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

For further details, see the README.md and ai-usage-report.md in the docs folder.
