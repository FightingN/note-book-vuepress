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
          {
            text: 'vue',
            link: '/frontend/vue/',
          },
        ]
      },
      {
        text: '后端知识',
        items: [{
          text: 'egg',
          link: '/backend/egg/',
        }, ]
      },
      {
        text: '通用组件',
        link: '/guide-components/'
      },
      {
        text: '其他',
        link: '/os/'
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
            },
            {
              title: '数组方法汇总',
              path: '/frontend/javaScript/arryAll',
            },
            {
              title: '其他',
              path: '/frontend/javaScript/others',
            },
          ]
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
      '/frontend/vue/': [{
        title: 'vue相关',
        sidebarDepth: 5,
        children: [{
          title: 'vue相关',
          path: '/frontend/vue/vue-basics',
        }, ]
      }, ],
      '/backend/egg/': [{
        title: 'egg相关',
        sidebarDepth: 5,
        children: [{
          title: 'egg相关',
          path: '/backend/egg/egg-basics',
        }, ]
      }, ],
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