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
                  buildHookId: '6363ec8ba247c400623470e1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6ocm2vz2',
                  apiId: '10979736-25de-40d1-80e2-7b7f93fe2185'
                },
                {
                  buildHookId: '6363ec8c66347d0084c4c749',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vkyk9xp9',
                  apiId: 'eb3ba9e5-5102-4eef-87d0-8949cb3333b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brahmk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vkyk9xp9.netlify.app', category: 'apps' }
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
