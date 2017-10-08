import Vue from 'vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './components/App.vue'
import Top from './components/Top.vue'
import Coordinate from './components/Coordinate.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: [
    { path: "/", component: Top },
    { path: "/coordinate", component: Coordinate }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})