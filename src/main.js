import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import { Message } from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import './assets/theme/theme-#006a63/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
//import Mock from './mock'
//Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios';

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

// http request 拦截器
axios.interceptors.request.use(
  config => {
    var token = sessionStorage.getItem('token');
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      token =sessionStorage.getItem('token')+':';
      config.headers.Authorization = `Basic ${new Buffer(token).toString('base64')}`;
    }
    return config;
  },
  error => {
    Message({
      message: "登录状态信息过期,请重新登录",
      type: "error"
    });
    router.push({
      path: "/login"
    });
    // return Promise.reject(error);
  });

// http response 拦截器

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.removeItem('token');
          router.push({
            path: "/login"
          });
          Message({
            message: '请检查登录',
            type: 'error'
          });
      }
    }
    // return Promise.reject(error);
  });

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('token');
  }
  let token = sessionStorage.getItem('token');
  if (!token && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

