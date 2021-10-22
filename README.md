<h1 align="center">
  Webmardi Website
</h1>

<p align="center">
  <strong>
    <a href="https://d36s9anuji.preview.infomaniak.website/">Staging</a>
  </strong>
</p>

## Overview

Webmardi is a static generated website based on [Next.js](https://nextjs.org/).

- **Language:** Uses [TypeScript](https://www.typescriptlang.org/) as the main programming language. 👨‍🏫 Feel free to use the [TypeScript CheatSheet](https://typescript-cheatsheet.vercel.app/)
- **CSS-in-JS:** Uses [Tailwind](https://tailwindcss.com/), [Emotion](https://emotion.sh/) and [Twin](https://github.com/ben-rogerson/twin.macro) for styling.
- **Deployment:** Uses [Infomaniak](https://infomaniak.com/) for hosting, deployed using a Github action.

## Installation

First of all, you need to have the following tools installed globally on your environment:

- [📗 NodeJS >= 14.4](https://nodejs.org/en/) - JavaScript runtime used to build and run the project
- [🐈 Yarn >= 1.22](https://yarnpkg.com/lang/en/) - Dependency manager built on top of the NPM registry

To install the project:

```bash
yarn

cp .env.sample .env
code .env
```

## Usage

Those are the main commands to use:

### 💻 Next.js Development

```bash
# Start dev mode
yarn dev

# Start production mode
yarn build
yarn serve

# Clean project (remove .next directory)
yarn clean

# Add new component
npx generact
```

### ⚠️ Linters

Thanks to [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), our linters are automatically fired when a commit is attempted. To fire them manually:

```bash
# Lint JavaScript
yarn lint:js
```

## Contribute

The project is using the **Gitflow workflow**. It defines a strict branching model designed around the project release.

You can learn more on the following resources :

- [Vincent Driessen's post](http://nvie.com/posts/a-successful-git-branching-model/)
- [Gitflow Workflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
