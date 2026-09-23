<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="project-card">

    <!-- Image on top (only if the project has one) -->
    <div v-if="project.image" class="card-image">
      <img :src="project.image" :alt="project.title">
    </div>

    <!-- Body -->
    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.text }}</p>

      <!-- Tags + Links pushed to the bottom -->
      <div class="card-footer">
        <div class="tags">
          <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
        </div>

        <div class="card-links">
          <a :href="project.url" class="link-code" target="_blank" rel="noopener noreferrer">
            View Code <span class="arrow">→</span>
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            class="link-live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo <span class="arrow">↗</span>
          </a>
        </div>
      </div>
    </div>

  </article>
</template>

<style scoped>
.project-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%; /* Equal-height cards in the grid */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 12px rgba(34, 22, 56, 0.04);
}

[data-theme="dark"] .project-card {
  background: var(--color-card-bg);
  border: 1px solid var(--color-card-border);
  box-shadow: none;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(34, 22, 56, 0.1);
}

/* Image */
.card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #f1f1f1;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}

/* Body */
.card-body {
  padding: 24px 26px 26px 26px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Fills the remaining height */
}

.card-body h3 {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 14px;
  line-height: 1.3;
}

[data-theme="dark"] .card-body h3 {
  color: var(--color-dark);
}

.card-body p {
  font-size: 0.95rem;
  color: #6b6880;
  line-height: 1.65;
  margin-bottom: 20px;
}

[data-theme="dark"] .card-body p {
  color: var(--color-subtext);
}

/* Footer pinned to the bottom */
.card-footer {
  margin-top: auto; /* Pushes tags + links to the bottom */
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Tags — outline pills */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 0.78rem;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid #6bb5a3;
  color: #2E9D84;
  font-weight: 500;
  background: transparent;
  transition: 0.25s ease;
}

[data-theme="dark"] .tag {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.tag:hover {
  background: rgba(46, 157, 132, 0.08);
}

/* Links row */
.card-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.link-code,
.link-live {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.link-code { color: #e42074; }
.link-live { color: #2E9D84; }

[data-theme="dark"] .link-code { color: var(--color-accent); }
[data-theme="dark"] .link-live { color: #6bb5a3; }

.link-code .arrow,
.link-live .arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}

.link-code:hover,
.link-live:hover {
  opacity: 0.85;
}

.link-code:hover .arrow {
  transform: translateX(4px);
}

.link-live:hover .arrow {
  transform: translate(2px, -2px);
}
</style>