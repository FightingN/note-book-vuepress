const navConf = require('./config/navConf.js');
module.exports = {
  title: 'FightingN的笔记',
  description: '记录前端知识',
  base: '/note-book-vuepress/',
  themeConfig: {
    nav: navConf,
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
      '/more/code/': [{
          title: 'git提交规范',
          sidebarDepth: 5,
          children: [{
            title: '代码规范',
            path: '/more/code/standard',
          }, ]
        },
        {
          title: 'vue书写规范',
          sidebarDepth: 5,
          children: [{
            title: '代码规范',
            path: '/more/code/vueStandard',
          }, ]
        },
      ],
      '/more/tool/': [{
          title: 'Mac电脑',
          sidebarDepth: 5,
          children: [{
            title: '使用',
            path: '/more/tool/mac',
          }, ]
        },
        {
          title: 'Vscode',
          sidebarDepth: 5,
          children: [{
            title: '使用',
            path: '/more/tool/vsode',
          }, ]
        },

      ],
      '/more/gitHub/': [{
        title: 'gitHub',
        sidebarDepth: 5,
        children: [{
          title: '命令集合',
          path: '/more/gitHub/order',
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
    },
    smoothScroll: true
  }
}