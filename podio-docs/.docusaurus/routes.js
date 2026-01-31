import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '006'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'be1'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '970'),
            routes: [
              {
                path: '/docs/automations/task-population',
                component: ComponentCreator('/docs/automations/task-population', 'e9b'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/automations/troubleshooting-automations',
                component: ComponentCreator('/docs/automations/troubleshooting-automations', '526'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/automations/what-happens-automatically',
                component: ComponentCreator('/docs/automations/what-happens-automatically', 'dc3'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/contacts/adding-contacts',
                component: ComponentCreator('/docs/contacts/adding-contacts', '4ea'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/contacts/linking-to-projects',
                component: ComponentCreator('/docs/contacts/linking-to-projects', '2b2'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/core-concepts/apps-and-items',
                component: ComponentCreator('/docs/core-concepts/apps-and-items', '0f1'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/core-concepts/fields-and-data',
                component: ComponentCreator('/docs/core-concepts/fields-and-data', 'c92'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/core-concepts/how-everything-connects',
                component: ComponentCreator('/docs/core-concepts/how-everything-connects', 'bf4'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/core-concepts/our-apps-explained',
                component: ComponentCreator('/docs/core-concepts/our-apps-explained', 'f1d'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/core-concepts/views-and-filters',
                component: ComponentCreator('/docs/core-concepts/views-and-filters', '4cc'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/getting-started/logging-in',
                component: ComponentCreator('/docs/getting-started/logging-in', '9d0'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/getting-started/searching-and-filtering',
                component: ComponentCreator('/docs/getting-started/searching-and-filtering', '00b'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/getting-started/the-interface',
                component: ComponentCreator('/docs/getting-started/the-interface', '5ed'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '6d5'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/projects/creating-a-project',
                component: ComponentCreator('/docs/projects/creating-a-project', 'd9a'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/projects/editing-project-info',
                component: ComponentCreator('/docs/projects/editing-project-info', '668'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/projects/finding-projects',
                component: ComponentCreator('/docs/projects/finding-projects', '56f'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/projects/the-project-page',
                component: ComponentCreator('/docs/projects/the-project-page', '0f1'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/reference/cheatsheet',
                component: ComponentCreator('/docs/reference/cheatsheet', 'bde'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/reference/faq',
                component: ComponentCreator('/docs/reference/faq', 'a04'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/reference/glossary',
                component: ComponentCreator('/docs/reference/glossary', 'dfd'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/reference/jlcp-dependencies',
                component: ComponentCreator('/docs/reference/jlcp-dependencies', '207'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/reference/jlcp-matrix',
                component: ComponentCreator('/docs/reference/jlcp-matrix', 'da1'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/stages/construction',
                component: ComponentCreator('/docs/stages/construction', 'd87'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/stages/how-stages-work',
                component: ComponentCreator('/docs/stages/how-stages-work', '799'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/stages/mobilization',
                component: ComponentCreator('/docs/stages/mobilization', '361'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/stages/pre-construction',
                component: ComponentCreator('/docs/stages/pre-construction', 'aab'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/submittals-rfis-change-orders/change-orders',
                component: ComponentCreator('/docs/submittals-rfis-change-orders/change-orders', '133'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/submittals-rfis-change-orders/rfis',
                component: ComponentCreator('/docs/submittals-rfis-change-orders/rfis', '268'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/submittals-rfis-change-orders/submittals',
                component: ComponentCreator('/docs/submittals-rfis-change-orders/submittals', '9dd'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/tasks/assigning-tasks',
                component: ComponentCreator('/docs/tasks/assigning-tasks', '762'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/tasks/checking-job-status',
                component: ComponentCreator('/docs/tasks/checking-job-status', '962'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/tasks/completing-tasks',
                component: ComponentCreator('/docs/tasks/completing-tasks', 'f3d'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/tasks/creating-tasks',
                component: ComponentCreator('/docs/tasks/creating-tasks', '9cf'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/tasks/dependencies',
                component: ComponentCreator('/docs/tasks/dependencies', '26c'),
                exact: true,
                sidebar: "podioSidebar"
              },
              {
                path: '/docs/tasks/finding-your-tasks',
                component: ComponentCreator('/docs/tasks/finding-your-tasks', '12d'),
                exact: true,
                sidebar: "podioSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
