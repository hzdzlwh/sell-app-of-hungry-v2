# elm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

此项目是在sell app of hungry的基础上加入了前面的几个页面，用到的技术栈有vue-router，vuex
 1，在index.html页面中用script标签引入了第三方的js库用于实现轮播，此js库不能在vue文件中通过import引入（因为此文件不符合规范）
