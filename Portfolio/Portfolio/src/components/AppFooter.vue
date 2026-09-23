<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2026 Krishendree Kistensamy. All rights reserved.</p>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/krishendree-kistensamy-36a224370" target="_blank" rel="noopener">LinkedIn</a>
        <span>·</span>
        <a href="https://github.com/KrishendreeX" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 25px;
  background: var(--color-footer-bg);
  border-top: 1px solid var(--color-footer-border);
  color: var(--color-subtext);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.footer-links {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.footer a {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.footer a:hover { opacity: 0.8; }
</style>