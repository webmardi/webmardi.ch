# Webmardi website

![Gatsby Publish](https://github.com/webmardi/webmardi.ch/workflows/Gatsby%20Publish/badge.svg?branch=master)

This is a [Gatsby](https://www.gatsbyjs.org/) project intended to show next Webmardi sessions and all supporting sponsors/partners.

## ✏️ Content edition

### 🎤 Sessions

To add a new session, simply add a new Mardown file in the `/data/sessions` directory. Follow the pattern `YYYYMMDD-name-of-session.md` when naming your file to keep things organized.

The session file must be set up with some frontmatter:

```markdown
---
featured: true
title: Easy as web
speaker: Marc Friederich
job: Co-Founder, Antistatique
date: 2019-07-02 19:00
location: Antistatique, Lausanne
url: http://example.com
---
Optional description, you can use **Markdown** here.
```

⚠ The homepage will always display the **first featured** session, ordering by date DESC.

### 💰 Sponsors

The sponsors are simple SVG components in the `src/svg/sponsors` directory. Follow the syntax of the existing ones to add a new one. 

You may need to adapt `src/components/Layout.js` if you have more than two sponsors.

### 🖼 Pictures

To add new pictures, simply add them in the `src/images/images-slider` directory. The directory needs to have at least one image.

Image must be at least 830x830px. They can be a lot bigger though, they will get resized as needed.

## 🚚 Setup

```bash
yarn
```

## 💻 Develop

Start the server and get working!

```bash
yarn start
# or
yarn develop
```

The website is now running at [http://localhost:8000](http://localhost:8000). You can also browse GraphiQL at [http://localhost:8000/___graphql](http://localhost:8000/___graphql).

## 🚀 Deployment

Github action will deploy to the Github `gh-page` which is reachable on [https://webmardi.github.io/webmardi.ch](https://webmardi.github.io/webmardi.ch) on every push into **master**.
