import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './components/App.vue'
import Top from './components/Top.vue'
import Coordinate from './components/Coordinate.vue'

Vue.use(VueRouter)

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