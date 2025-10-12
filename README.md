# JustEat Create Account (Next.js + TypeScript)

An interactive, responsive web app.

## Tech
- Next.js (App Router) + React 18
- TypeScript
- Css

## Getting Started
```bash
pnpm i # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Using npm
```bash

npm install
npm run build
npm run start
npm run dev (for dev mode) # http://localhost:3000
```

## About Task Tech

1) What approaches did you use when completing the test?

    I approached the test with a component-driven mindset, focusing on semantic HTML, accessibility, and responsive layout. I prioritized clarity in structure, modularity in styling, and maintainability in code. I used a mobile-first strategy and ensured the layout adapted cleanly across breakpoints. I also incorporated basic validation and interactive feedback to enhance user experience.

2) Do you use any CSS methodologies or techniques to help this approach?

    Yes, I lean on a hybrid approach combining BEM-style naming for clarity and modular CSS (via CSS Modules) for scoping. I also follow principles from utility-first and atomic design when building reusable components. For larger projects, I advocate for design systems and scalable folder structures that support accessibility, theming, and consistency.

3) If you had more time to spend on the test, what would you like to add to your solution?

    With more time, I’d enhance the solution by:

    • 	Adding form validation feedback and accessibility attributes (ARIA, focus management)

    • 	Creating reusable input components with error handling

    • 	Animating transitions for visual polish

    • 	Improving keyboard navigation and screen reader support

    • 	Integrating a design token system for scalable theming

4) What browser(s) should we view your test in?

    The test is compatible across all modern browsers, including:

    • 	Chrome (latest)

    • 	Firefox

    • 	Safari

    • 	Edge
    
    It’s built with cross-browser consistency in mind and tested for responsiveness.

5) What's your favourite programming language? Why?

    My favorite language is TypeScript, it combines the flexibility of JavaScript with the safety of static typing. It improves developer confidence, reduces runtime errors, and scales well for large applications. I also enjoy Python for its clarity and ecosystem, especially in automation and ML workflows.

6) Please describe yourself using JSON?

    JSON is commonly used to store and transmit user data between client and server. It is also often used to define app settings, environment variables, and feature toggles. In real-time dashboards, JSON data is consumed from APIs or sockets to dynamically update charts and metrics.

######

## Detailed explanation about project ##

## Just Eat – Create Account Page

This project replicates the **Create Account** page from the Just Eat design provided in both Figma and PNG formats. It demonstrates semantic HTML, accessible markup, responsive styling, and basic JavaScript interactivity—all built without relying on CSS frameworks.

###  Tech Stack

- **HTML5**: Semantic structure for accessibility and clarity
- **CSS Modules**: Custom styling with component-driven architecture
- **JavaScript (React)**: Form validation, password toggle, and character count
- **Next.js**: Used for rapid setup and modularity (explained below)

###  Features

- **Responsive Design**: Adapts seamlessly across narrow and wide viewports using media queries
- **Accessible Markup**:
  - Proper `<label>` associations
  - `aria-label` and `aria-describedby` for screen reader support
  - Descriptive `alt` text for images
- **Form Interactivity**:
  - Validates required fields and email format
  - Toggles password visibility via eye icon
  - Displays live character count for password input
- **Component-Driven CSS**: Styles are modular and reusable across future pages

### Why Next.js?

Next.js was chosen for its fast setup, built-in routing, and support for modular components. It helps demonstrate scalable architecture without relying on external CSS frameworks.

### Assets

All icons, images, and fonts were sourced from the `/public` folder as instructed.

### If I Had More Time…

- Add inline error messaging with `aria-live` regions
- Improve keyboard navigation and focus management
- Refactor styles into a shared design system
- Add unit tests for form logic and accessibility checks

######