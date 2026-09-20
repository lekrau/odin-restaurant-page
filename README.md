# Odin Restaurant Page

## Project

Built as part of The Odin Project's JavaScript course:
[Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

A restaurant page with three tabs whose content is dynamically rendered using JavaScript.

## Preview

[Live preview](https://lekrau.github.io/odin-restaurant-page/)

## Run locally

```bash
git clone https://github.com/lekrau/odin-restaurant-page.git
cd odin-restaurant-page
npm install
npm run dev
```

To build the project:

```bash
npm run build
```

## Deploy

GitHub Pages serves the contents of the remote `gh-pages` branch. The local
`gh-pages` branch is used to build the project and commit the generated `dist`
directory before its contents are pushed to GitHub.

After the finished changes have been merged into `main` and committed, run:

```bash
git switch gh-pages
git merge main --no-edit
npm run build
git add dist -f
git commit -m "Deployment commit"
npm run deploy
git switch main
```

The `-f` option adds `dist` despite it being listed in `.gitignore`. The deploy
script uses `git subtree` to push only the contents of `dist` to the root of the
remote `gh-pages` branch.

## What I practiced

* Manipulating the DOM with JavaScript
* Organizing JavaScript in modules
* Setting up Webpack
* Managing project dependencies with npm
* Generating HTML from a template with HtmlWebpackPlugin
* Loading CSS and images with Webpack
* Running a Webpack dev server

## Scope and limitations

The visual design was intentionally kept simple, as the project's main focus was Webpack, JavaScript modules, and DOM manipulation.
