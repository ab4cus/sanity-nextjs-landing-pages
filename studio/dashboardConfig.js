export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623a1e2ecd5c0d007c8ef9dc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-sosgc6sh',
                  apiId: 'ae3989e3-8255-4b58-a236-ffa45c4135af'
                },
                {
                  buildHookId: '623a1e2e68f92700c2da2fb9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kacsq87k',
                  apiId: 'ee6de797-f0ee-4c13-be6e-408f0308e536'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ab4cus/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kacsq87k.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
