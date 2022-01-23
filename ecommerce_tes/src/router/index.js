import Vue from 'vue'
import VueRouter from 'vue-router'

// Importar vistas
import LogIn from '../views/LogIn.vue'
import Products from '../views/Products.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/productos',
    name: 'Products',
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router
