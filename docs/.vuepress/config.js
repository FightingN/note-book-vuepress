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
        text: '前端知识',
        items: [{
            text: 'css',
            link: '/frontend/css/',
          },
          {
            text: 'javaScript',
            link: '/frontend/javaScript/',
          },
        ]
      },
      {
        text: '通用组件',
        link: '/guide-components/'
      },
      {
        text: '其他',
        link: '/guide-components/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/FightingN/note-book-vuepress'
      },
    ],
    sidebar: {
      '/frontend/css/': [{
          title: 'CSS相关',
          sidebarDepth: 5,
          children: [{
            title: 'css相关',
            path: '/frontend/css/css-summary',
          }, ]
        },
        {
          title: 'CSS相关',
          sidebarDepth: 5,
          children: [{
            title: 'css进阶',
            path: '/frontend/css/css-advanced'
          }, ]
        },
        {
          title: '测试文件',
          path: '/frontend/css/text'
        },
      ],
      '/frontend/javaScript/': [{
          title: 'javaScript基础',
          sidebarDepth: 5,
          children: [{
            title: 'javaScript基础知识点',
            path: '/frontend/javaScript/basics',
          }, ]
        },
        {
          title: 'javaScript高级',
          sidebarDepth: 5,
          children: [{
            title: 'javaScript高级',
            path: '/frontend/javaScript/advanced'
          }, ]
        },
        {
          title: 'webApi总结',
          sidebarDepth: 6,
          children: [{
            title: 'webApi总结',
            path: '/frontend/javaScript/webApi'
          }, ]
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