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
│   └── github.js           # github fetching data
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
- **Github Projects Section**: Lists latest github repos I worked on and filter them based on language used.
- **Contact Section**: Simple contact form (no backend).
- **Dark/Light Mode**: Toggle button for theme switching, with persistent user preference.
- **Responsive Design**: Layout adapts to different screen sizes.

## Implementation Notes

- **Styling**: Uses Google Fonts (Inter, Roboto, Poppins) for a modern look. Dark mode styles are handled via the `.dark-mode` class in CSS.
- **Theme Toggle**: Implemented in `js/theme.js` using a fixed-position button. The button's background and icon color change based on the current theme.
- **Technology Icons**: Project sections use SVG icons from CDN for tech stack visualization.
- **Accessibility**: Semantic HTML tags and alt attributes are used for better accessibility.

## Extending the Project

- Add more projects or sections by editing `index.html`.
- Update styles in `css/styles.css` for custom themes.
- Add new images to `assets/images/` as needed.
- For backend integration, connect the contact form to a server or service.

## Troubleshooting

- If styles or scripts do not load, check file paths and browser cache.
- For dark mode issues, verify the `.dark-mode` CSS and `theme.js` logic.

## Credits

- Icons: [Devicon CDN](https://devicon.dev/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

For further details, see the README.md and ai-usage-report.md in the docs folder.
