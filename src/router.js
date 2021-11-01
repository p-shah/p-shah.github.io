import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'

import { createRouter, createWebHistory } from 'vue-router'  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
createApp(App).use(router).mount('#app')