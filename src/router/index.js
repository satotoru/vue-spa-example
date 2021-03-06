import Vue from 'vue'
import VueRouter from "vue-router";
import Top from '@/components/Top.vue'
import Coordinate from '@/components/Coordinate.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Top },
    { path: "/coordinate", component: Coordinate }
  ]
});
