# Vason documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Development setup

### Install NVM

For Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`

For Windows: Go to https://github.com/coreybutler/nvm-windows/releases/latest, download and run `nvm-setup.exe`

Install node via nvm

    nvm install lts

Set up global node version

    nvm use lts

Enable corepack

    corepack enable
    corepack prepare yarn@stable --activate

Setup yarn

    npm install --global yarn

### Build and run the project

Download unplugged cache

    yarn

Start dev server

    yarn start

### Convert SVG to ICO

https://image.online-convert.com/convert/svg-to-ico
