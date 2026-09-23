<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({ words: { type: Array, required: true } })
const text = ref('')
let wi = 0, ci = 0, deleting = false, timer

function tick() {
  const word = props.words[wi]
  ci += deleting ? -1 : 1
  text.value = word.slice(0, ci)
  let wait = deleting ? 40 : 85
  if (!deleting && ci === word.length) { deleting = true; wait = 1400 }
  else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % props.words.length; wait = 350 }
  timer = setTimeout(tick, wait)
}
onMounted(tick)
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <p class="hero-subtitle">I'm a <span class="role-highlight">{{ text }}</span><span class="typing-cursor">|</span></p>
</template>

<style scoped>
.hero-subtitle { font-size: clamp(1.2rem, 3.2vw, 1.8rem); color: var(--color-subtext); font-weight: 400; min-height: 2.2em; display: flex; align-items: center; justify-content: center; }
.role-highlight { color: var(--color-accent); font-weight: 600; margin-left: 0.3em; }
.typing-cursor { display: inline-block; color: var(--color-accent); font-weight: 300; margin-left: 2px; animation: blinkCursor 0.8s step-end infinite; }
@keyframes blinkCursor { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
</style>