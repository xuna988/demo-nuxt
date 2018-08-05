
const apiConfig = require('./api.config')
const isProdMode = Object.is(process.env.NODE_ENV,'production')

module.exports = {
  head:{
    title:'一个的神奇网站',
    meta:[
      {charset:'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
      {hid: 'description', name: 'description', content: '猫评网利用大量数据精确筛选用户需要的内容，内容包括要闻、 社区生活、传统文化、法律财经、教育移民、医疗健康、艺术时尚、旅游地产、美食、娱乐体育。'},
      {hid: 'description', name: 'keyswords', content: '猫评手,猫评网,数据,评论分析,从评论看新闻,中文,媒体,评论网站,观点,时效,即时新闻,独立社区'}
    ],
    link:[
      {src: '~/assets/stylus/index.styl', lang: 'stylus'},
      {src: 'material-design-icons/iconfont/material-icons.css'},
      {src: '~/assets/css/animate.css'}
    ],
    render:{
      // bundleRenderer:{
      //   shouldPreload:(file,type)=>{
      //     return ['script','style','font','css'].includes(type)
      //   }
      // }
    }

  },
  css: [
    {src: '~/assets/stylus/index.styl', lang: 'stylus'},
    {src: 'material-design-icons/iconfont/material-icons.css'},
    {src: '~/assets/css/animate.css'}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/Loading/loading.vue',
  plugins: [
    {src: '~plugins/extra.js', ssr: false},
    {src: '~plugins/lodash.js', ssr: false},
    {src: '~plugins/getSlideDirection.js', ssr: false},
    {src: '~plugins/input_filter.js', ssr: false},
    {src: '~plugins/ga.js', ssr: false},
    {src: '~plugins/cookie.js', ssr: false},
    {src: '~plugins/autosize.js', ssr: false},
    {src: '~plugins/share.js', ssc: true}
  ],
  dev: isProdMode,
  env: {
    baseUrl: apiConfig.baseUrl,
    HOST_URL: apiConfig.socketHost,
    imgUrl: apiConfig.imgUrl
  },
  router: {
    middleware: 'stats'
  },
  build: {
    vendor: [
      'axios'
    ],
    loaders:[{
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: 'url-loader',
    query: {
      limit: 1000, // 1KO
      name: 'img/12/34/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 1000, // 1 KO
      name: 'fonts/[name].[hash:7].[ext]'
    }
  }],
    extend (config, { isClient }) {
      // 为 客户端打包 进行扩展配置
       console.log("common")
      if (isClient) {
        console.log("client")
        config.devtool = 'eval-source-map'
      }
    },
    analyze: false,
     publicPath: 'https://cdn.nuxtjs.org',
     filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    }
  }
}
