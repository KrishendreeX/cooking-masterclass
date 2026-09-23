<script setup>
import { ref, onMounted } from 'vue'
import { links } from '../data'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}
</script>

<template>
  <header class="site-header">
    <nav class="nav-container">
      <div class="logo">
        <RouterLink to="/">
          <img src="https://i.ibb.co/0p23n73V/Krishendree-logo2.png" alt="Krishendree Logo">
        </RouterLink>
      </div>

      <ul class="nav-links">
        <li><RouterLink to="/" exact-active-class="active">Home</RouterLink></li>
        <li><RouterLink to="/about" exact-active-class="active">About Me</RouterLink></li>
        <li><RouterLink to="/education" exact-active-class="active">Education</RouterLink></li>
        <li><RouterLink to="/skills" exact-active-class="active">Skills</RouterLink></li>
        <li><RouterLink to="/projects" exact-active-class="active">Projects</RouterLink></li>
        <li><RouterLink to="/contact" exact-active-class="active">Contact</RouterLink></li>
      </ul>

      <div class="nav-actions">
        <div class="socials">
          <a :href="links.linkedin" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin-in"></i></a>
          <a :href="links.github" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
        </div>
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle Dark Mode">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
  background: var(--color-nav-bg);
  border-bottom: 1px solid var(--color-nav-border);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.nav-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1100px; }
.logo img { width: 90px; display: block; }

.nav-links { display: flex; gap: 35px; align-items: center; list-style: none; }
.nav-links a { text-decoration: none; font-size: 0.95rem; font-weight: 500; color: var(--color-subtext); transition: color 0.25s ease; position: relative; padding: 4px 0; }
.nav-links a:hover, .nav-links a.active { color: var(--color-accent); }
.nav-links a::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0%; height: 2px; background: var(--color-accent); transition: width 0.3s ease; border-radius: 2px; }
.nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

.nav-actions { display: flex; align-items: center; gap: 15px; }
.socials { display: flex; gap: 15px; }
.socials a { color: var(--color-dark); text-decoration: none; font-size: 1.1rem; transition: 0.3s; background: var(--color-card-bg); border: 1px solid var(--color-card-border); width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; border-radius: 50%; }
.socials a:hover { color: var(--color-accent); border-color: var(--color-accent); }

.theme-toggle { background: none; border: 1px solid var(--color-card-border); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.2rem; transition: transform 0.3s ease, background 0.3s ease; color: var(--color-dark); }
.theme-toggle:hover { transform: scale(1.1); background: var(--color-card-bg); }

@media (max-width: 768px) {
  .site-header { padding: 15px; }
  .nav-container { flex-direction: column; gap: 15px; }
  .nav-links { flex-wrap: wrap; justify-content: center; gap: 15px; }
}
</style>