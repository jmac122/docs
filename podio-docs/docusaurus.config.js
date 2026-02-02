// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  title: 'PSS Podio Documentation',
  tagline: 'Complete guide to using Podio at Precision Site Services',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.precisionsiteservices.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/podio/',

  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PSS Podio Docs',
        logo: {
          alt: 'PSS Logo',
          src: 'img/favicon.ico',
          href: '/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'podioSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/jmac122/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Precision Site Services. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    }),
};

module.exports = config;
