<script setup>
import AppBackground from './components/AppBackground.vue'
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppBackground />
  <AppNav />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
</template>

<style>
/* Make the app a flex column so the footer stays at the bottom on short pages */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* main grows to fill the space between nav and footer */
main {
  flex-grow: 1;
  padding-top: 90px; /* Prevents navbar overlap */
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.page-leave-active {
  position: absolute;
  width: 100%;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-15px) scale(0.98);
}
</style>