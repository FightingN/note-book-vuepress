module.exports = {
  title: 'FightingN的笔记',
  description: '记录前端知识',
  base:'/note-book-vuepress/',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/FightingN/note-book-vuepress'
      },
    ],
    sidebar: [
      '/guide/text',
    ]
  }
}