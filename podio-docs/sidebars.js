/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  podioSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/logging-in',
        'getting-started/the-interface',
        'getting-started/searching-and-filtering',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/our-apps-explained',
        'core-concepts/apps-and-items',
        'core-concepts/fields-and-data',
        'core-concepts/views-and-filters',
        'core-concepts/how-everything-connects',
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [
        'projects/finding-projects',
        'projects/the-project-page',
        'projects/creating-a-project',
        'projects/editing-project-info',
      ],
    },
    {
      type: 'category',
      label: 'Stages',
      items: [
        'stages/how-stages-work',
        'stages/pre-construction',
        'stages/mobilization',
        'stages/construction',
        'stages/demobilization',
        'stages/retainage',
      ],
    },
    {
      type: 'category',
      label: 'Safety & Compliance',
      items: [
        'safety-compliance/overview',
      ],
    },
    {
      type: 'category',
      label: 'Tasks',
      items: [
        'tasks/finding-your-tasks',
        'tasks/creating-tasks',
        'tasks/assigning-tasks',
        'tasks/completing-tasks',
        'tasks/dependencies',
        'tasks/checking-job-status',
      ],
    },
    {
      type: 'category',
      label: 'Contacts',
      items: [
        'contacts/adding-contacts',
        'contacts/linking-to-projects',
      ],
    },
    {
      type: 'category',
      label: 'Submittals, RFIs & Change Orders',
      items: [
        'submittals-rfis-change-orders/submittals',
        'submittals-rfis-change-orders/rfis',
        'submittals-rfis-change-orders/change-orders',
      ],
    },
    {
      type: 'category',
      label: 'Automations',
      items: [
        'automations/what-happens-automatically',
        'automations/task-population',
        'automations/troubleshooting-automations',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/cheatsheet',
        'reference/faq',
        'reference/jlcp-matrix',
        'reference/jlcp-dependencies',
      ],
    },
  ],
};

module.exports = sidebars;
