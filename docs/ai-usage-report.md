# AI Usage Report

## Tools Used & Use Cases

### GitHub Copilot
- Used for code suggestions, HTML/CSS patterns, JavaScript snippets
- Generated UI components during early prototyping

### Copilot Chat / ChatGPT
Used extensively for:
- Designing UI components (project cards, GitHub repo display)
- Building the GitHub API integration
- Creating filtering and sorting logic
- Fixing JavaScript issues and improving logic flow
- Improving dark/light mode behavior
- Providing debugging explanations and best practices
- Code reviews and refactoring suggestions

## Use Cases Covered in This Project

- Building GitHub repo cards (HTML + CSS)
- Fetching real GitHub data using the GitHub REST API
- Displaying repo details: name, description, language, stars, last updated date, and URL
- Implementing filtering by language
- Re-rendering components dynamically based on user selection
- Formatting dates from GitHub's API
- Refining and fixing dark/light mode styling
- Creating reusable UI sections
- Debugging CSS, JavaScript, and DOM issues throughout the process

## Benefits & Challenges

### Benefits
- **Faster development**: AI helped generate boilerplate code quickly, letting me focus on functionality
- **Problem-solving support**: When stuck on rendering, DOM updates, or GitHub API formatting, AI provided clear guidance
- **Modern design patterns**: Helped implement clean UI cards, responsive layouts, and dynamic rendering patterns
- **More confidence with JavaScript**: Especially with DOM manipulation and API usage

### Challenges
- **Dark/light mode implementation**: The AI-generated solution required manual debugging because some selectors and styles didn't fully match my structure. This showed that:
  - AI can generate incomplete CSS logic
  - Understanding CSS cascade and specificity is essential for fixing theme mode issues
- **GitHub API filtering logic**: AI provided the base, but I had to adjust variable scopes, rendering logic, and event handling to get a clean solution
- **Integrating AI code with my existing structure**: Sometimes AI-generated components didn't match my HTML layout or naming conventions, so manual adjustments were required

**Overall, this reinforced that AI is a helper, not a replacement for real coding skills.**

## Learning Outcomes

- **Better understanding of API integration**: I now know how to fetch data, store it, filter it, and re-render components dynamically
- **Improved JavaScript skills**: Learned about `fetch()`, event listeners, dynamic rendering, template literals, and date formatting
- **UI/UX skills**: Developed cleaner project cards and learned how to match components with my portfolio's design system
- **Debugging & DOM manipulation**: I gained confidence in finding and fixing issues, especially around:
  - Dark/light mode inconsistencies
  - Updating HTML through JavaScript
  - Clearing and re-rendering elements in the DOM
- **Responsible use of AI**: I learned how to evaluate AI output, fix mistakes, and improve the suggestions

## How I Modified AI Suggestions Responsibly

- Cleaned up and rewrote AI-generated CSS to match my portfolio's design
- Checked all JavaScript logic for correctness and fixed issues around re-rendering and filtering
- Ensured dark/light mode styles worked consistently across all new components
- Customized all UI components (repo cards, filters) to match my personal style
- Verified JS behavior using real API data, testing filters and edge cases
- Used AI's output as a starting point, then built on it with real understanding