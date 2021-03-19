- 该文档总结工作中遇到的 bug 及可复用的代码

## vue 实现全局组件的自动化注册

- 问题:每次项目里在 components 文件夹下的组件都要重复引入注册才能使用
- 解决:实现 components 文件夹下的组件自动注册为全局组件

- 参考文档 webpack

- 使用 require.context 实现前端工程自动化

- 在 components 下新建 index.js 文件
  <img :src="$withBase('/image/vue/vue1.png')" alt="">

```js
import Vue from 'vue'
​
const components = require.context('components/', true, /\.vue$/)
components.keys().forEach(filename => {
  console.log('filename', filename)
  // filename:./fabric/fabric-index.vue 先把./替换成空，再把.vue替换成空 用/分割成数组
  const arr = filename.replace(/\.\//, '').replace(/\.vue$/, '').split('/')
// 定义组件的名字
const componentName = arr[arr.length - 2]
// 找到默认的组件
const componentConfig = components(filename).default
// 注册
Vue.component(componentName, componentConfig)
})
​
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svg-icon/svg', false, /\.svg\$/)
// requireAll(req)
```

- 在 main.js 引入
  <img :src="$withBase('/image/vue/vue2.png')" alt="">

- 组件就可以直接使用不用引入和注册（组件名是外层的文件夹的名称）

<img :src="$withBase('/image/vue/vue3.png')" alt="">

## 在项目中使用 svg 图片

- [npm 下载](https://www.npmjs.com/package/svg-sprite-loader)

- [vue 官网](https://cn.vuejs.org/v2/cookbook/editable-svg-icons.html)

- [gitHub 案例](https://github.com/sdras/vue-sample-svg-icons/)

### 为什么使用 svg

- 兼容性，现在 svg 的基本兼容性已经很好了。在 canIuse 中可以查看。
- 相比较传统的图片，svg 在放大的时候不会失真
- 因为 svg 是 xml 形式的，利于浏览器 seo 搜索，所以一般 logo 强烈建议用 svg
- 可以修改颜色和宽高（fill,width,height)
- 性能，性能是前端很重要的一个指标，svg 相比 iconfont 图标整体加载性能要好，svg sprites 与 png sprites 相比性能也不差。
- 如果使用 png 的雪碧图，在新增图标的时候需要修改雪碧图，并且修改之后可能因为浏览的缓存问题导致图片加载不出。svg 不存在这个问题

### 常见的使用 svg 的方式有

- lnline svg, img svg, background svg
  - inline svg 是直接将 svg 写在 html 的文件中
  - img svg 是用 img 标签引入 svg
  - background svg 是在 css,background 属性中设置 svg 文件

### 在 vue 中使用

- 下载 svg-sprite-loader 插件

```js
npm install svg-sprite-loader --save-dev
```

- 配置 webpack--vue.config.js

```js
// 调整 webpack 配置
chainWebpack: config => {
config.module
.rule('svg')
.include.add(join('src/components/svg-icon/svg'))
.end()
.test(/\.svg\$/)
.use('file-loader')
.loader('svg-sprite-loader')
.options({
symbolId: 'icon-[name]'
})
},
```

- 新建 components 下的 svg-icon/svg 文件夹
  - 该文件夹主要存放阿里矢量图库的 svg 图标

<img :src="$withBase('/image/vue/vue4.png')" alt="">

- 新建 components/svg-icon/index.vue 组件

```js
<template>
  <svg :class="svgClass"
       aria-hidden="true"
       :style="{fill:fill}">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    fill: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
```

- 将新建 components/svg-icon/index.vue 的组件注册成全局组件

```js
components/index.js
import Vue from 'vue'
​
const components = require.context('components/', true, /\.vue$/)
components.keys().forEach(filename => {
  console.log('filename', filename)
  // filename:./fabric/fabric-index.vue 先把./替换成空，再把.vue替换成空 用/分割成数组
  const arr = filename.replace(/\.\//, '').replace(/\.vue$/, '').split('/')
// 定义组件的名字
const componentName = arr[arr.length - 2]
// 找到默认的组件
const componentConfig = components(filename).default
// 注册
Vue.component(componentName, componentConfig)
})
//引入项目中所有的 svg 文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg-icon/svg', false, /\.svg\$/)
requireAll(req)
```

- 在 main.js 中将 components/index.js 文件引入

- svg 使用
  - 随便一个页面

```js
<svg-icon icon-class="mine" fill="#fff"></svg-icon>
```

​

- mine 指的 svg 图片的名称

## vue 中的多页模式搭建

- 使用场景

  - 只针对我遇到的项目，如小程序中要开发多个 H5 页面，但是每个 H5 页面的功能又都是独立的，此时就适合用 vue 的多页模式

- 思路

  - 使用 Vue 搭建多页应用。所有系统都在同一目录下。配置多入口多出口。每个系统之间可以链接。每个系统内依然采用 Vue 单页应用开发。

- 组件复用性

  - 可以将所有的系统公共组件放到系统目录最外面，以达到组件复用。在系统内部依然将自己独立的组件封装，复用。这样可以最大限度的提高组件的复用性。

- 路由
  - 每个系统单独进行路由配置
- 数据管理
  - 每个系统数据仓库单独处理

### 初步搭建

- 创建项目

```js
vue create multi-page-demo
```

- 将 vue 单页面内容中原有的内容全部清空掉，不然到时候回有一些不必要的路径报错

- 新建 src/pages 文件夹

<img :src="$withBase('/image/vue/vue5.png')" alt="">

```js
const path = require('path')
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/pages/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    about: 'src/pages/about/main.js',
  },
}
```

- 页面路由访问

  - index：http://localhost:8080/
  - about：http://localhost:8080/about.html#/

- 配置完一定要记得重启一下应用不然不起作用

## vue 中多页模式打包

[官网文档](https://cli.vuejs.org/zh/guide/mode-and-env.html)

> 多页应用的每个页面也可能会放在不同的服务器上，这时候如果往每个服务器上都放置完整的资源包，就会显得过于臃肿。于是我们可能就需要将某个页面单独打包出来。

- 配置环境变量

<img :src="$withBase('/image/vue/vue6.png')" alt="">

- package.json

```js
  "build:index": "vue-cli-service build --mode prod-index",
```

- vue.config.js

```js
// 打包文件夹名称
outputDir: process.env.VUE_APP_OUTPUTDIR,
```

<img :src="$withBase('/image/vue/vue7.png')" alt="">

- 打包
  <img :src="$withBase('/image/vue/vue8.png')" alt="">

## vue 中解决跨域问题

[webpack](https://www.webpackjs.com/configuration/dev-server/#devserver-proxy)
[vue-element-admin 解决跨域方法](https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/advanced/cors.html)

### 什么是跨域

::: tip

- 跨域：由于浏览器同源策略，凡是发送请求 url 的协议、域名、端口三者之间任意一个与当前页面地址不同即为跨域。存在跨域的情况：
- 网络协议不同，如 http 协议访问 https 协议。
- 端口不同，如 80 端口访问 8080 端口。
- 域名不同，如 qianduanblog.com 访问 baidu.com。
- 子域名不同，如 abc.qianduanblog.com 访问 def.qianduanblog.com。
- 域名和域名对应 ip,如www.a.com访问20.205.28.90.

:::

### 在 vue 中如何解决跨域

- vue.config.js

- 在 vue 中使用 proxy 进行跨域的原理是：将域名发送给本地的服务器（启动 vue 项目的服务,loclahost:8080），再由本地的服务器去请求真正的服务器

```js
  // 开发环境 dev-server
  devServer: {
  proxy: {
  '/api': {
  target: 'https://epdc-luzhou-antest.elinkservice.cn/epdc-api/',//设置你调用的接口域名和端口号
  pathRewrite: {
  /_ 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
  实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
  _/
  '^/api': '',//这里理解成用‘/api’代替 target 里面的地址，后面组件中我们掉接口时直接用 api 代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
  },
  changeOrigin: true,//這裡 true 表示实现跨域
  }
  },
  },
  '^/api': '' //当你的接口中没有/api 字眼时，采用这种，直接替换成空即可

  '^/api': '/api' //当你的接口中刚好有/api 时，采用这种方式\*
```

## vue 项目构建优化

### 包分析工具

- 构建代码之后，到底是什么占用了这么多空间？使用 webpack-bundle-analyzer

- vue.config.js

```js
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
​
chainWebpack: (config) => {
if (process.env.NODE_ENV === 'development') {
config
.plugin('webpack-bundle-analyzer')
.use(WebpackBundleAnalyzer.BundleAnalyzerPlugin);
}
},
```

[官网 process.env.NODE_ENV](https://cli.vuejs.org/zh/guide/mode-and-env.html)

- process.env.NODE_ENV：运行 npm run serve 默认的环境变量是 development

- 修改 process.env.NODE_ENV 的方式有两种

  - 通过--mode 来指定

```js
"serve": "vue-cli-service serve --mode development",
```

- 新建.env 环境变量文件，在文件中指定，命令行指定要运行的文件

### 开启 Gzip

- 为什么开启 Gzip

  - 在你的项目使用了 Vue 的路由懒加载、Vue 使用 CDN 引用项目组件，减少项目体积 后，还是觉得项目加载速度慢，效果不尽如人意的时候，还有一个“瘦身项目”可以完成，那就是利用 nginx 和 webpack 来使用 gzip 压缩功能。
  - 通常来讲更小的体积就意味着更快的加载速度，也就对应着更好用户体验

- Gzip

[git 地址](https://github.com/webpack-contrib/compression-webpack-plugin)

- 下载

```js
npm install compression-webpack-plugin --save-dev
```

- Vue.config.js

```js
chainWebpack: (config) => {
config
.plugin('CompressionPlugin')
.use(CompressionPlugin, []);
},
//以上很多配置都未写，使用时需要写上，而且后台必须配合设置才能生效
```

### 路由懒加载

[vue 官网](https://router.vuejs.org/zh/guide/advanced/lazy-loading.html#%E6%8A%8A%E7%BB%84%E4%BB%B6%E6%8C%89%E7%BB%84%E5%88%86%E5%9D%97)

```js
const Foo = () => import('./Foo.vue')
const router = new VueRouter({
  routes: [{ path: '/foo', component: Foo }],
})
```

- 或者把组件按组分块(未了解和实践)

### 把组件按组分块

- 有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)

```js
const Foo = () => import(/_ webpackChunkName: "group-foo" _/ './Foo.vue')
const Bar = () => import(/_ webpackChunkName: "group-foo" _/ './Bar.vue')
const Baz = () => import(/_ webpackChunkName: "group-foo" _/ './Baz.vue')
```

### Preload & Prefetch

[csdn 文章](https://blog.csdn.net/vivo_tech/article/details/109485871)
[webpack](https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules)
[csdn 文章](https://blog.csdn.net/weixin_41855143/article/details/103427765)

- prefetching

> webpack4.6.0 以上支持 prefetching 特性，prefetch 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。

> 一般使用了 prefetching 会和路由懒加载造成冲突

## vue 中的动态组件

[vue 官网](https://cn.vuejs.org/v2/api/#component)

<img :src="$withBase('/image/vue/vue9.png')" alt="">

## vue 中 H5 页面的适配

[csdn 文章](https://blog.csdn.net/wx1035589113/article/details/109580887)

[gitHub](https://github.com/amfe/lib-flexible)

[px2rem-postcss-gitHub](https://github.com/songsiqi/px2rem-postcss)

- 下载依赖

```js
npm i lib-flexible 或者是 amfe-flexible
npm install postcss-px2rem --save
```

- 在 main.js 引入

```js
import 'lib-flexible'
```

- vue.config.js

```js
// css 相关
css: {
// 将组件内的 css 提取到 一个单独的文件
extract: true,
​
// 是否开启 css source map
sourceMap: false,
​
// 为预处理器的 loader 传递自定义选项
loaderOptions: {
css: {},
postcss: {
plugins: [
require('postcss-px2rem')({
remUnit: 37.5
})
]
}
}
},
```

- remUnit: 这里要写成 37.5, 因为在 amfe-flexible 中宽度为 375px 时候 1rem 为 37.5, postcss-px2rem 的作用是将 px 单位自动转为 rem 单位, 在进行调试的时候一般将浏览器的模拟为 iphone6/7/8, 宽度正好为 375px

- postcss-px2rem 会自动将 px 转为 rem, 若是不想使用自动转化可以使用单位大写 Px 或者 PX, 常用在设置边框宽度上

- 效果

<img :src="$withBase('/image/vue/vue10.png')" alt="">

## vue 方法使用防抖和节流

- utils 中封装好防抖和节流

```js
/**
 * 防抖函数-目前仅是延迟执行版本
 * @param fn function  要做处理的防抖函数
 * @param delay number 延迟间隔-毫秒级
 */
export function debounce(fn, delay) {
  const delays = delay || 200
  let timer
  return function () {
    const th = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      timer = null
      fn.apply(th, args)
    }, delays)
  }
}
```

- 具体的 vue 文件

```js
  import { debounce, isNumber } from 'utils/common'
  // methods中的方法
   updateYearAverageIndex: debounce(function () {
 			写具体的逻辑代码
    }, 1000),
```

## vue 的.sync 修饰符

[官网](https://vue3js.cn/docs/zh/guide/migration/v-model.html#_2-x-%E8%AF%AD%E6%B3%95)

- 为了解决数据双向绑定语法的简写
- sync 修饰符是一个语法糖，类似 v-model，它主要是解决了父子组件的双向绑定问题。因为 vue 提倡的是单向数据流动，因此不能直接在子组件里面修改父组件传过来的数据，需要子组件触发一个方法，父组件绑定一个方法，写法比较麻烦
- 引用组件的地方

```js
<ChildComponent :title.sync="pageTitle" />
```

- 组件内部

```js
   <button @click="closeAlert">关闭</button>
    methods:{
        closeAlert(){
           this.$emit('update:title', '111')
         }
    }
```
