<script setup>
import { LINKEDIN_URL } from '../data/links.js'
import { education, email, name, skills, summary } from '../data/cv.js'
import { jobs } from '../data/experience.js'

const cvUrl = import.meta.env.BASE_URL + 'cv.pdf'
const FILE = 'Jonas_Santiago_Odoo_Developer.pdf'
</script>

<template>
  <section class="cv">
    <div class="bar">
      <span class="file mono">{{ FILE }}</span>
      <div class="actions">
        <a class="btn mono" :href="cvUrl" target="_blank" rel="noopener noreferrer">View CV ↗</a>
        <a class="btn alt mono" :href="cvUrl" :download="FILE">Download PDF</a>
      </div>
    </div>

    <div class="viewer" tabindex="0" aria-label="CV preview, scrollable">
      <article class="paper">
        <h1>{{ name }}</h1>
        <p class="contact">
          {{ email }} |
          <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>

        <h2>Summary</h2>
        <p>{{ summary }}</p>

        <h2>Work Experience</h2>
        <div v-for="job in jobs" :key="job.company" class="job">
          <div class="row">
            <strong class="co">{{ job.company }}</strong>
            <strong>{{ job.period }}</strong>
          </div>
          <div class="row">
            <span>{{ job.role }}</span>
            <span>{{ job.mode }}</span>
          </div>
          <ul>
            <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
          </ul>
        </div>

        <h2>Skills</h2>
        <ul>
          <li v-for="s in skills" :key="s.label">
            <strong>{{ s.label }}:</strong> {{ s.value }}
          </li>
        </ul>

        <h2>Education</h2>
        <div v-for="e in education" :key="e.school" class="edu">
          <div class="row">
            <strong>{{ e.title }}</strong>
            <span>{{ e.detail }}</span>
          </div>
          <div class="row">
            <span>{{ e.school }}</span>
            <span>{{ e.period }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.cv {
  width: 100%;
  max-width: 820px;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 16px;
}
.file {
  color: var(--blue);
  font-size: 13px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.btn {
  background: var(--btn);
  color: #fff;
  padding: 9px 18px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid var(--btn);
  transition: filter 0.3s ease, border-color 0.3s ease;
}
.btn:hover {
  filter: brightness(1.1);
}
.alt {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}
.alt:hover {
  border-color: var(--active);
  filter: none;
}

/* grey desk the paper sits on; scrolls like a PDF viewer */
.viewer {
  flex: 1;
  min-height: 0;
  overflow: auto;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px;
}
.paper {
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  color: #111;
  padding: 44px 52px 52px;
  font-family: 'Times New Roman', Times, 'Liberation Serif', serif;
  font-size: 14.5px;
  line-height: 1.35;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
}
h1 {
  margin: 0;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
}
.contact {
  margin: 2px 0 14px;
  text-align: center;
}
.paper a {
  color: #111;
}
h2 {
  margin: 14px 0 6px;
  padding-bottom: 2px;
  border-bottom: 1.5px solid #111;
  font-size: 14.5px;
  font-weight: 700;
  text-transform: uppercase;
}
.paper p {
  margin: 0;
}
.row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}
.co {
  text-decoration: underline;
}
.job {
  margin-top: 4px;
}
ul {
  margin: 4px 0 0;
  padding-left: 30px;
}
li {
  margin-bottom: 1px;
}
.edu {
  margin-top: 4px;
}

@media (max-width: 640px) {
  .viewer {
    padding: 10px;
  }
  .paper {
    padding: 22px 18px 28px;
    font-size: 12px;
  }
  h1 {
    font-size: 22px;
  }
  h2 {
    font-size: 12px;
  }
  ul {
    padding-left: 18px;
  }
  .row {
    flex-direction: column;
    gap: 0;
  }
  .btn {
    padding: 8px 14px;
    font-size: 13px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
</style>
