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
   nvm install lts
   ```
3. Set up global node version
   ```shell
   nvm use lts
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

## Miscellaneous

- Convert SVG to ICO:
  https://image.online-convert.com/convert/svg-to-ico

## License

This documentation is licensed under the MIT license, terms of which can be found in
the [LICENSE](LICENSE) file
