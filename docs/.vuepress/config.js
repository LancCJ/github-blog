module.exports = {
    title: 'LancCJ Github Blog',
    description: 'LancCJ Github 博客',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      nav:[
        { text: '博客', link: 'https://blog.lanccj.cn/' }, // 外部链接
        // 下拉列表
        {
          text: 'GitHub',
          items: [
            { text: 'GitHub地址', link: 'https://github.com/LancCJ' }
          ]
        }        
      ]
      // ,
      // sidebar: [
      //   ['/', '首页'],
      //   ['/blog/FirstBlog.md', '我的第一篇博客']
      // ]
    }
  };