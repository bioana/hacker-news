# Hacker News

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Boilerplate (Nuxt / Dependencies)

- `nuxt.config.ts`: Generated with `npm create nuxt`
- `.nuxt/`: Entirely generated by Nuxt.
- Usage of `useFetch` : Nuxt 3 built-in composables.
- `app.vue` – Base Nuxt app layout file
- `tsconfig.json` – Standard TypeScript config for Nuxt projects.
- `package.json`, `package-lock.json` – Dependencies auto-generated when setting up project.

### Original code

- `composables/states.ts` – Custom state logic
- `pages/stories/index.vue` – Custom page for dysplaying the stories grid
- `pages/stories/[id].vue` – Dynamic page to show individual story details.
- `types/index.ts` – Custom TypeScript types defined for Story model.
- `public/image.jpg` – Custom asset added manually.

### Notes

This project pulls a list of top stories from the Hacker News API, selects 10 random stories, fetches detailed information for each one, and then renders them in a responsive grid layout, implemented using semantic HTML and CSS grid for responsive design.

## Features not implemented

- Author karma score displayed
- Filter by score or timestamp
- Article title linked to the actual article URL

## Time spent: 4 hours
