module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mytest',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /***
   * 配置公共的访问路径
   */
  env: {
    baseUrl :process.env.MODE == 'dev' ? 'test-' : (process.env.MODE == 'online' ? '//' : 'beta-')
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*****
   *公共的css
   */ 
  /* 输出目录名 */
  buildDir: 'nuxt',
  css:['@/assets/css/common.scss'],
  /*
  ** Build configuration
  */
  /* 修改路由默认地址 */ 
  /**
   * 这里可以根据自己需求进行更改，如果没需要保持初始配置就可以。本地启动之后需要在浏览器增加这个路径
   *如果实际项目中使用nginx反向代理，可以增加这个路径，这样不需要每次启动手动增加路径。
    router:{
    base: ''
  },
   * 
   * * */ 
  router:{
    base: '/nuxtv1/'
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      
    },
    /*
    * 可以增加项目的输入目录，放置在cdn上加速，需要制定一个目录，根据具体实际项目需要
    * 
    */
    /* 输出目录 */
    publicPath: `${process.env.MODE == 'dev' ? '//test-code.xxx.com' : '//code.xxx.com'}/nuxtv1/`
  
    /* 打包名称 */
    /* filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[chunkhash].js')
    }, */
  
  }
 
}

