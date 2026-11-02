<script setup>
import { siOdoo } from 'simple-icons'
import { LINKEDIN_URL } from '../data/links.js'
import projects from '../data/projects.js'

const featured = projects.slice(0, 3)
const odooPath = siOdoo.path
const APPSTORE_URL = 'https://apps.odoo.com/apps'

function go(tab) {
  location.hash = tab
}
</script>

<template>
  <section class="home">
    <div class="left">
      <div class="hey mono">Hey, I'm</div>
      <h1 class="name">Jonas<span class="cursor" aria-hidden="true">|</span></h1>
      <div class="roles mono">
        <span>Odoo Custom App Developer</span>
        <i>|</i>
        <span>Python</span>
        <i>|</i>
        <span>OWL JS</span>
      </div>
      <p class="intro">
        Odoo developer with 3+ years of experience in custom modules, workflow automation, and ERP
        integration. I build in Python and deliver custom PDF &amp; XLSX reports and faster
        eCommerce sites.
      </p>
      <div class="actions">
        <a class="btn primary mono" :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
          in LinkedIn ↗
        </a>
        <button class="btn secondary mono" type="button" @click="go('cv')">View CV</button>
      </div>
    </div>

    <aside class="featured" aria-label="Featured Odoo modules">
      <div class="head">
        <span class="k mono">// featured_modules</span>
      </div>
      <div class="hand">
        <article
          v-for="(p, i) in featured"
          :key="p.name"
          class="card"
          :class="['pos' + i, { soon: p.status === 'coming_soon' }]"
        >
          <span class="corner tl mono">0{{ i + 1 }}</span>
          <svg class="logo" viewBox="0 0 24 24" aria-hidden="true">
            <path :d="odooPath" />
          </svg>
          <span class="mname mono">{{ p.name }}</span>
          <span class="state mono">{{ p.status === 'published' ? 'on Odoo Apps' : 'coming soon' }}</span>
          <a
            class="store mono"
            :href="p.url || APPSTORE_URL"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="'View ' + p.name + ' in Odoo Appstore'"
            ><span class="full">View in </span>Appstore ↗</a
          >
          <span class="corner br mono">0{{ i + 1 }}</span>
        </article>
      </div>
      <div class="more">
        <button class="btn cta mono" type="button" @click="go('projects')">View all modules →</button>
      </div>
    </aside>
  </section>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1040px;
}
.hey {
  font-size: 26px;
  color: var(--muted);
}
.name {
  margin: 0;
  font-size: 84px;
  line-height: 1.05;
  letter-spacing: -1px;
}
.cursor {
  color: var(--active);
  font-weight: 300;
  margin-left: 2px;
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
}
.roles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
  margin-top: 12px;
  color: var(--teal);
  font-size: 17px;
}
.roles i {
  font-style: normal;
  color: var(--muted);
}
.intro {
  margin: 20px 0 0;
  max-width: 460px;
  font-size: 17px;
  line-height: 1.7;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}
.btn {
  font-size: 16px;
  padding: 12px 22px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--btn);
}
.primary {
  background: var(--btn);
  color: #fff;
}
.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}
.btn:hover {
  filter: brightness(1.1);
}
.secondary:hover {
  border-color: var(--active);
}

/* featured modules: fanned hand of three cards */
.featured {
  --cw: clamp(116px, 24vh, 190px);
  --ch: calc(var(--cw) * 1.4);
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
}
.k {
  color: var(--blue);
  font-size: 15px;
}
.more {
  display: flex;
  justify-content: center;
  margin-top: 6px;
}
.cta {
  background: transparent;
  color: var(--text);
  border: 2px solid var(--btn);
  font-weight: 600;
  padding: 12px 26px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}
.cta:hover {
  background: var(--btn);
  color: #fff;
  filter: none;
}
.hand {
  position: relative;
  height: calc(var(--ch) + 56px);
}
.card {
  position: absolute;
  left: 50%;
  top: 28px;
  width: var(--cw);
  height: var(--ch);
  margin-left: calc(var(--cw) / -2);
  padding: 14px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
  font-family: var(--sans);
  color: var(--text);
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  transform-origin: 50% 120%;
  cursor: pointer;
  transition:
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.28s ease,
    border-color 0.2s ease;
}
/* extends the hover area downward so the lift never pulls the card out from under the cursor */
.card::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 28px;
}
@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
.card.soon {
  border-style: dashed;
}
.pos0 {
  transform: translateX(calc(var(--cw) * -0.72)) rotate(-10deg);
  z-index: 1;
}
.pos1 {
  transform: translateY(-14px);
  z-index: 2;
}
.pos2 {
  transform: translateX(calc(var(--cw) * 0.72)) rotate(10deg);
  z-index: 1;
}
.card:hover,
.card:focus-within {
  z-index: 5;
  border-color: var(--active);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
}
.pos0:hover,
.pos0:focus-within {
  transform: translateX(calc(var(--cw) * -0.72)) translateY(-10px) rotate(-10deg);
}
.pos1:hover,
.pos1:focus-within {
  transform: translateY(-24px);
}
.pos2:hover,
.pos2:focus-within {
  transform: translateX(calc(var(--cw) * 0.72)) translateY(-10px) rotate(10deg);
}
.corner {
  position: absolute;
  font-size: 13px;
  font-weight: 700;
  color: var(--blue);
}
.tl {
  top: 10px;
  left: 12px;
}
.br {
  bottom: 10px;
  right: 12px;
  transform: rotate(180deg);
}
.logo {
  width: calc(var(--cw) * 0.42);
  height: calc(var(--cw) * 0.42);
  fill: var(--odoo);
}
.mname {
  color: var(--orange);
  font-size: 14px;
  font-weight: 600;
}
.state {
  color: var(--teal);
  font-size: 11px;
}
.store {
  margin-top: 6px;
  padding: 6px 8px;
  background: var(--btn);
  color: #fff;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: filter 0.2s ease;
}
.store:hover {
  filter: brightness(1.15);
}
/* keep side-card content on the visible part of the card, away from the middle card */
.pos0 {
  padding-right: calc(var(--cw) * 0.27);
}
.pos2 {
  padding-left: calc(var(--cw) * 0.27);
}
@media (max-height: 640px) {
  .full {
    display: none;
  }
  .pos0 {
    padding-right: calc(var(--cw) * 0.2);
  }
  .pos2 {
    padding-left: calc(var(--cw) * 0.2);
  }
}

@media (max-width: 899px) {
  .home {
    grid-template-columns: 1fr;
    max-width: 560px;
  }
  .featured {
    display: none;
  }
}
@media (max-width: 480px) {
  .hey {
    font-size: 20px;
  }
  .name {
    font-size: 56px;
  }
  .roles {
    font-size: 14px;
  }
  .intro {
    font-size: 15px;
    margin-top: 14px;
  }
  .actions {
    margin-top: 20px;
    gap: 10px;
  }
  .btn {
    font-size: 14px;
    padding: 10px 16px;
  }
}
@media (max-height: 480px) {
  .name {
    font-size: 44px;
  }
  .intro {
    display: none;
  }
}
</style>
