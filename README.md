# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Development setup

# Install NVM

For Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`

For Windows: Go to https://github.com/coreybutler/nvm-windows/releases/latest, download and run `nvm-setup.exe`

# Install node via nvm
    nvm install lts

## Set up global node version
    nvm use lts

## Enable corepack
    corepack enable
    corepack prepare yarn@stable --activate

## Setup yarn
    npm install --global yarn

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
