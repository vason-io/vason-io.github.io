// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

//const isDev = process.env.NODE_ENV === "development";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vason (Beta)',
  tagline: 'Visualize & Analyze JSON',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://docs.vason.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vason-io', // Usually your GitHub org/user name.
  projectName: 'vason-io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Please change this to your repo. // Remove this to remove the "edit this page" links. // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // blog: { showReadingTime: true, // Please change this to your repo. // Remove this to remove the "edit this page" links. editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Vason',
        logo: {
          alt: 'Vason logo',
          src: 'img/logo.svg',
        },
        items: [
          //isDev &&
          {
            type: 'docSidebar',
            sidebarId: 'documentation',
            position: 'left',
            label: 'Documentation',
          }, // {to: '/blog', label: 'Blog', position: 'left'}, { href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right', },
          // !isDev && {
          //     type: "doc",
          //     docId: "doc-placeholder",
          //     position: "left",
          //     label: "Documentation (Coming Soon)",
          // },
          {
            type: 'docSidebar',
            sidebarId: 'support',
            position: 'left',
            label: 'Support',
          },
          {
            href: 'https://vason.io',
            label: 'Open Vason',
            position: 'right',
          },
        ].filter(Boolean),
      },
      footer: {
        style: 'light', // links: [ { title: 'Docs', items: [ { label: 'Tutorial', to: '/docs/intro', }, ], }, { title: 'Community', items: [ { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus', }, { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus', }, { label: 'Twitter', href: 'https://twitter.com/docusaurus', }, ], }, { title: 'More', items: [ { label: 'Blog', to: '/blog', }, { label: 'GitHub', href: 'https://github.com/facebook/docusaurus', }, ], }, ], copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `Copyright © ${new Date().getFullYear()} Vason.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown > img',
        background: {
          light: 'rgb(50, 50, 50)', //'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          margin: 70,
          scrollOffset: 300,
          container: '', // '#__docusaurus', //'[class*=docRoot_]',
          template: '', //'#zoom-template',
        },
      },
    }),
  plugins: [
    'docusaurus-plugin-image-zoom', // can also just be 'image-zoom'
  ],
};

export default config;
