// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store'
import { routerMode } from './config/env'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router
})
