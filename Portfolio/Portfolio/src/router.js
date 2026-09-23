import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Education from './views/Education.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home, meta: { title: 'Home' } },
    { path: '/about', component: About, meta: { title: 'About' } },
    { path: '/education', component: Education, meta: { title: 'Education' } },
    { path: '/skills', component: Skills, meta: { title: 'Skills' } },
    { path: '/projects', component: Projects, meta: { title: 'Projects' } },
    { path: '/contact', component: Contact, meta: { title: 'Contact' } },
  ],
  scrollBehavior: () => ({ top: 0 }),
})