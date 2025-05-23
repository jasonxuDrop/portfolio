#!/bin/sh

npx imagemin "./images/favicon.png" --out-dir="./docs/images/"

# Minify images under each subfolder separately to retain directory structure.
for dir in home icons project-fsm seo; do
    npx imagemin "./images/${dir}" --out-dir="./docs/images/${dir}"
done
