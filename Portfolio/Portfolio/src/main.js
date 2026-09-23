import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { reveal, tilt } from './composables/directives'
import './style.css'

createApp(App)
  .use(router)
  .directive('reveal', reveal)
  .directive('tilt', tilt)
  .mount('#app')