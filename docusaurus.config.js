// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const isDev = process.env.NODE_ENV === "development";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
module.exports = {
    title: "Vason (Beta)",
    tagline: "Visualize & Analyze JSON",
    favicon: "img/logo.svg",

    // Set the production url of your site here
    url: "https://docs.vason.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "vason-io", // Usually your GitHub org/user name.
    projectName: "vason-io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import("@docusaurus/preset-classic").Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/",
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
        {
            navbar: {
                title: "Vason",
                logo: {
                    alt: "Vason logo",
                    src: "img/logo.svg",
                },
                items: [
                    isDev && {
                        type: "docSidebar",
                        sidebarId: "documentation",
                        position: "left",
                        label: "Documentation",
                    },
                    !isDev && {
                        type: "doc",
                        docId: "doc-placeholder",
                        position: "left",
                        label: "Documentation (Coming Soon)",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "support",
                        position: "left",
                        label: "Support",
                    },
                    {
                        href: "https://vason.io",
                        label: "Open Vason",
                        position: "right",
                    },
                ].filter(Boolean),
            },
            footer: {
                style: "light",
                copyright: `Copyright © ${new Date().getFullYear()} Vason.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            zoom: {
                selector: '.markdown > img',
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)'
                },
                config: {
                    // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
                    margin: 70,
                    scrollOffset: 300,
                    container: '', // '#__docusaurus', //'[class*=docRoot_]',
                    template: '', //'#zoom-template',
                }
            }
        },

    plugins: [
        'docusaurus-plugin-image-zoom', // can also just be 'image-zoom'
    ],
};
