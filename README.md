# Just Move In Challenge

## Preview

- [App](https://just-move-in-challenge.vercel.app/)
- [Components](https://just-move-in-challenge.vercel.app/components)

## Notes
- I set up color variables and reusable components, and added ESLint and Prettier to keep code standards consistent. I also followed Conventional Commits and a clear project architecture.

- I used Cursor to speed up development, helping generate components quickly, and then refined the necessary details to ensure everything worked as expected.

- I quickly built a page based on the layout to see how the components behave in the system. Please check both mobile and desktop so we can validate all variants.

- As a next step, I would create dedicated components for primary and secondary buttons, but I prioritized other parts due to the 2-hour time constraint.

- I aimed for pixel-perfect accuracy, but made a few spacing adjustments where it felt more visually balanced. I also fixed a small typo in “address”.

- The “View plan details” button on mobile is currently the same as desktop, but it can be easily adjusted if needed.

## Tech stack

| Area | Technology |
|------|------------|
| **Runtime / UI** | [React](https://react.dev/) 19 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build & dev server** | [Vite](https://vite.dev/) 8 |
| **React plugin** | [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) 4 (via [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)) |
| **Linting** | [ESLint](https://eslint.org/) 9 with [typescript-eslint](https://typescript-eslint.io/), React, JSX a11y, import sort, and Prettier plugins |
| **Formatting** | [Prettier](https://prettier.io/) with [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) |
| **Package manager** | [pnpm](https://pnpm.io/) 10 |
