<script setup>
import projects from '../data/projects.js'
</script>

<template>
  <section class="projects">
    <div class="k mono">// custom_modules</div>
    <div class="grid">
      <article
        v-for="p in projects"
        :key="p.name"
        class="card"
        :class="{ soon: p.status === 'coming_soon' }"
      >
        <h2 class="mono">{{ p.name }}</h2>
        <p>{{ p.description }}</p>
        <a
          v-if="p.status === 'published' && p.url"
          class="mono link"
          :href="p.url"
          target="_blank"
          rel="noopener noreferrer"
          >Odoo Apps ↗</a
        >
        <span v-else class="mono muted">Coming soon</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  width: 100%;
  max-width: 860px;
}
.k {
  color: var(--blue);
  font-size: 13px;
  margin-bottom: 12px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.card.soon {
  border-style: dashed;
}
h2 {
  margin: 0;
  font-size: 15px;
  color: var(--orange);
}
p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}
.muted {
  color: var(--muted);
  font-size: 12px;
}
.link {
  color: var(--blue);
  font-size: 13px;
}
@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .card {
    padding: 10px 14px;
    gap: 2px;
  }
}
</style>
