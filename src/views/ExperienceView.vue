<script setup>
import { education, jobs } from '../data/experience.js'
</script>

<template>
  <section class="exp">
    <div class="main">
      <div class="k mono">// experience</div>
      <ol class="timeline">
        <li v-for="job in jobs" :key="job.company" class="job">
          <div class="meta mono">
            <span class="period">{{ job.period }}</span>
            <span class="mode">{{ job.mode }}</span>
          </div>
          <h2>{{ job.role }}</h2>
          <div class="company mono">{{ job.company }}</div>
          <ul class="bullets">
            <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
          </ul>
        </li>
      </ol>
    </div>

    <aside class="edu">
      <div class="k mono">// education</div>
      <ul class="schools">
        <li v-for="e in education" :key="e.school">
          <div class="period mono">{{ e.period }}</div>
          <h3>{{ e.title }}</h3>
          <div class="school mono">{{ e.school }}</div>
          <p>{{ e.detail }}</p>
        </li>
      </ul>
    </aside>
  </section>
</template>

<style scoped>
.exp {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 48px;
  width: 100%;
  max-width: 1040px;
}
.k {
  color: var(--blue);
  font-size: 14px;
  margin-bottom: 16px;
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0 0 0 22px;
  border-left: 2px solid var(--border);
}
.job {
  position: relative;
}
.job::before {
  content: '';
  position: absolute;
  left: -29px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--active);
  border: 2px solid var(--bg);
}
.meta {
  display: flex;
  gap: 10px;
  font-size: 13px;
}
.period {
  color: var(--orange);
  font-size: 13px;
}
.mode {
  color: var(--muted);
}
h2 {
  margin: 2px 0 0;
  font-size: 22px;
}
.company {
  font-size: 14px;
  color: var(--teal);
}
.bullets {
  margin: 12px 0 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--text);
}
.bullets li::marker {
  color: var(--blue);
}
.schools {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.schools li {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 12px 14px;
}
h3 {
  margin: 2px 0 0;
  font-size: 16px;
}
.school {
  font-size: 13px;
  color: var(--teal);
}
.schools p {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.4;
}

@media (max-width: 899px) {
  .exp {
    grid-template-columns: 1fr;
    max-width: 640px;
  }
  .edu {
    display: none;
  }
  .bullets {
    font-size: 13.5px;
    gap: 5px;
    line-height: 1.4;
  }
  h2 {
    font-size: 18px;
  }
}
@media (max-width: 480px) {
  .bullets {
    font-size: 12.5px;
    gap: 4px;
    margin-top: 8px;
  }
}
</style>
