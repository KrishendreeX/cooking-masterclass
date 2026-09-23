<script setup>
</script>

<template>
  <main>
    <section class="about">
      <div class="container">
        <div class="section-title">
          <h2>About Me</h2>
          <span>ABOUT ME</span>
        </div>
        <p>I am an aspiring Full Stack Developer with a passion for creating responsive and user-friendly websites.</p>
        <p>My journey into software development started with a curiosity about how websites work, leading me to learn HTML, CSS, JavaScript, Bootstrap, and Python.</p>
        <p>I enjoy solving problems, learning new technologies, and building projects that improve my coding skills and creativity.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about { padding: 120px 5% 60px 5%; scroll-margin-top: 100px; }
.about p { max-width: 750px; margin: 0 auto 15px auto; text-align: center; font-size: 1rem; color: var(--color-subtext); }

.section-title { position: relative; text-align: center; margin-bottom: 30px; }
.section-title h2 { text-align: center; font-size: clamp(22px, 3vw, 40px); margin-bottom: 60px; color: var(--color-accent); text-transform: uppercase; letter-spacing: 5px; }
.section-title span { width: 100%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: clamp(40px, 8vw, 100px); font-weight: 800; letter-spacing: 5px; color: rgba(255, 140, 66, 0.06); z-index: 1; user-select: none; text-transform: uppercase; pointer-events: none; }
[data-theme="light"] .section-title span { color: rgba(228, 32, 116, 0.05); }

.container { width: 90%; max-width: 1100px; margin: auto; }
</style>