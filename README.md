# Webmardi website

This is a [Gatsby](https://www.gatsbyjs.org/) project intended to show next Webmardi sessions and all supporting sponsors/partners.

## ✏️ Content edition

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

## Deployment
