import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  ['inventory', 'Inventory'],
  ['contact', 'Contact Us', 'ContactUs'],
  ['pricing', 'Pricing'],
].map(([pathSlug, name, componentOverride]) => {
  return {
    path: `/${pathSlug}`,
    name,
    component: () => import(`../views/${componentOverride || name}.vue`),
  }
});

const router = new VueRouter({
  routes
})

export default router
