<script setup>
import { TABS } from '../tabs.js'

defineProps({
  active: { type: String, required: true },
  showKeys: { type: Boolean, default: false },
})
defineEmits(['select'])

import { LINKEDIN_URL } from '../data/links.js'
</script>

<template>
  <header class="nav">
    <span class="brand mono">&lt;Jonas /&gt;</span>
    <nav class="tabs" aria-label="Sections">
      <button
        v-for="(tab, i) in TABS"
        :key="tab.id"
        type="button"
        class="tab mono"
        :class="{ on: tab.id === active }"
        :aria-current="tab.id === active ? 'page' : undefined"
        :aria-keyshortcuts="'Alt+' + (i + 1)"
        @click="$emit('select', tab.id)"
      >
        <kbd class="key" :class="{ show: showKeys }" aria-hidden="true">{{ i + 1 }}</kbd>
        {{ tab.label }}
      </button>
    </nav>
    <a class="linkedin" :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
      <span class="in">in</span><span class="li"> LinkedIn ↗</span>
    </a>
  </header>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 60px;
  padding: 0 24px;
  background: var(--panel);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}
.brand {
  color: var(--teal);
  font-weight: 600;
  font-size: 18px;
  margin-right: auto;
  white-space: nowrap;
}
.tabs {
  display: flex;
  gap: 4px;
}
.tab {
  background: none;
  border: 0;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 15px;
  color: var(--muted);
  cursor: pointer;
  box-shadow: inset 0 -3px 0 transparent;
  transition:
    color 0.3s ease,
    box-shadow 0.35s ease,
    background-color 0.3s ease;
}
.tab {
  position: relative;
}
/* number box layered in front of the label while Alt is held */
.key {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  min-width: 24px;
  padding: 0 6px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: color-mix(in srgb, var(--panel) 85%, transparent);
  color: var(--text);
  font: 700 14px/22px var(--mono);
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease;
}
.key.show {
  opacity: 1;
}
@media (max-width: 899px) {
  .key {
    display: none;
  }
}
.tab:hover {
  color: var(--text);
}
.tab.on {
  color: var(--text);
  box-shadow: inset 0 -3px 0 var(--active);
}
.linkedin {
  margin-left: 12px;
  background: var(--btn);
  color: #fff;
  padding: 10px 18px;
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
  transition: filter 0.3s ease;
}
.linkedin:hover {
  filter: brightness(1.1);
}

/* wide screens: tabs truly centered, brand left, LinkedIn right */
@media (min-width: 1200px) {
  .nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: 72px;
    padding: 0 32px;
  }
  .brand {
    font-size: 22px;
    margin-right: 0;
  }
  .tabs {
    gap: 8px;
  }
  .tab {
    font-size: 18px;
    padding: 12px 24px;
  }
  .linkedin {
    justify-self: end;
    margin-left: 0;
    font-size: 17px;
    padding: 12px 22px;
  }
}

@media (max-width: 899px) {
  .tab {
    font-size: 14px;
    padding: 10px 10px;
  }
}
@media (max-width: 800px) {
  .brand {
    display: none;
  }
  .tabs {
    margin-right: auto;
  }
}
@media (max-width: 640px) {
  .tab {
    font-size: 12px;
    padding: 8px 6px;
  }
}
@media (max-width: 560px) {
  .li {
    display: none;
  }
}

@media (max-width: 480px) {
  .nav {
    height: 52px;
    padding: 0 8px;
    gap: 2px;
  }
  .tab,
  .linkedin {
    padding: 8px 6px;
    font-size: 11px;
  }
  .linkedin {
    margin-left: 4px;
  }
  .brand {
    font-size: 12px;
  }
}
@media (max-width: 400px) {
  .brand,
  .li {
    display: none;
  }
  .tab {
    padding: 8px 3px;
    font-size: 10px;
  }
  .linkedin {
    padding: 8px 8px;
  }
  .tabs {
    margin-right: auto;
  }
}
@media (prefers-reduced-motion: reduce) {
  .key,
  .tab,
  .linkedin {
    transition: none;
  }
}
</style>
