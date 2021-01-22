module.exports = {
  title: 'FightingN的笔记',
  description: '记录前端知识',
  base: '/note-book-vuepress/',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '学习文档',
        link: '/guide/javaScript/'
      },
      {
        text: '通用组件',
        link: '/guide-components/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/FightingN/note-book-vuepress'
      },
    ],
    sidebar: {
      '/guide/': [{
          title: 'javaScript',
          sidebarDepth: 5,
          children: [{
              title: 'javaScript基础',
              path: '/guide/javaScript/',
            },
            {
              title: '基础',
              path: '/guide/javaScript/text'
            },
          ]
        },
        {
          title: '基础',
          path: '/guide/javaScript/text'
        },
      ],
      '/guide-components/': [{
        title: '组件配置',
        sidebarDepth: 3,
        children: [{
          title: '介绍',
          path: '/guide-components/text'
        }]
      }]
    }
  }
}