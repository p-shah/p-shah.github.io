import { Vue, store } from 'vue'
import App from './App.vue'
import router from './router' //import router.js into main.js

// createApp(App).mount('#app')

new Vue({
  render: h => h(App),
  store,
  router //added router instance
}).$mount('#app')