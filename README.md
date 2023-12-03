# Vason documentation

Available at https://docs.vason.io

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website
generator.

## 👨‍💻 Development setup

1. Install NVM
   - For Linux: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`
   - For Windows: Go to https://github.com/coreybutler/nvm-windows/releases/latest, download and
     run `nvm-setup.exe`
2. Install node via nvm
   ```shell
   nvm install --lts
   ```
3. Set up global node version
   ```shell
   nvm use --lts
   ```
4. Enable corepack
   ```shell
   corepack enable
   corepack prepare yarn@stable --activate
   ```
5. Setup yarn
   ```shell
   npm install --global yarn
   ```

## 🏗️ Build and run the project

1. Download unplugged cache
   ```shell
   yarn
   ```
2. Start dev server
   ```shell
   yarn start
   ```

## 📄 Development conventions

- Use official palette generator for generating a color
  scheme: https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima
- Use standard `996px` value for media query breaking points. Due to limitations of standard CSS variables, we can not
  use them in media queries, hence we have to hardcode them for now

## License

This documentation is licensed under the MIT license, terms of which can be found in
the [LICENSE](LICENSE) file.
