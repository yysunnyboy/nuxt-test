//- 根据路由 `$route.name` 映射配置
//- path - 页面的访问路径
//- head - Document <head>，页面的元信息
module.exports = {
  'index': {
    head: {
      title: 'test',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'mobile-agent', content: 'format=wml; url=//该页面对应的移动端网址/' },
        { name: 'mobile-agent', content: 'format=xhtml; url=//该页面对应的移动端网址/' },
        { name: 'mobile-agent', content: 'format=html5; url=//该页面对应的移动端网址/' }
      ],
      link: [
        { rel: 'alternate', type: 'applicationnd.wap.xhtml+xml', media: 'handheld', href: '//该页面对应的移动端网址/' }
      ]
    }
  },
  //- head 可以是一个 `function`
  //- `function` 中会接收过来一个参数 `route`，表示当前页面的路由信息
  //- 可以根据这个做一些动态的配置信息
  //- 比如动态路由生成的页面中的 meta 信息，可能会根据页面内容来决定
  'user': {
    head(route) {
      const titles = {
        '1': '男演员',
        '2': '女演员',
        '3': '导演'
      }

      return {
        title: `我们是什么网站`,
        meta: [
        
        ],
        link: [
          { rel: 'alternate', type: 'applicationnd.wap.xhtml+xml', media: 'handheld', href: `//该页面对应的移动端网址` }
        ]
      }
    }
  }
}