<script setup>
import { ref } from 'vue'
import { TABS } from '../tabs.js'

defineProps({ active: { type: Boolean, default: false } })

const STORE = 'shortcuts-open'

function load() {
  try {
    return localStorage.getItem(STORE) === '1'
  } catch {
    return false
  }
}
const open = ref(load())

function toggle() {
  open.value = !open.value
  try {
    localStorage.setItem(STORE, open.value ? '1' : '0')
  } catch {
    /* storage unavailable: keep in memory only */
  }
}
</script>

<template>
  <aside class="box mono" :class="{ open, on: active }" aria-label="Keyboard shortcuts">
    <button
      class="head"
      type="button"
      :aria-expanded="open"
      aria-controls="shortcut-list"
      @click="toggle"
    >
      <span>Shortcuts</span>
      <span class="chev" aria-hidden="true">▴</span>
    </button>
    <div id="shortcut-list" class="wrap" :inert="!open">
      <div class="body">
        <p>Hold <kbd>Alt</kbd> to show numbers, then press:</p>
        <ul>
          <li v-for="(t, i) in TABS" :key="t.id">
            <span class="keys"><kbd>Alt</kbd> + <kbd>{{ i + 1 }}</kbd></span>
            <span>{{ t.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.box {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 20;
  width: 140px;
  background: var(--panel);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  transition:
    width 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease,
    color 0.25s ease;
}
.box.open {
  width: 236px;
}
.box.on {
  border-color: var(--active);
  color: var(--text);
}
.head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 9px 14px;
  background: none;
  border: 0;
  border-radius: 8px;
  color: inherit;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
.head:hover {
  color: var(--text);
}
.chev {
  display: inline-block;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.open .chev {
  transform: rotate(180deg);
}
/* grid rows 0fr -> 1fr animates the height without knowing it */
.wrap {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transition:
    grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease;
}
.open .wrap {
  grid-template-rows: 1fr;
  opacity: 1;
}
.body {
  min-height: 0;
  overflow: hidden;
  padding: 0 14px;
  border-top: 1px solid transparent;
  transition: border-color 0.25s ease, padding-bottom 0.35s ease;
}
.open .body {
  padding-bottom: 12px;
  border-top-color: var(--border);
}
p {
  margin: 10px 0 8px;
  line-height: 1.45;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
li {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--text);
}
kbd {
  padding: 1px 6px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  color: var(--text);
  font: inherit;
  font-size: 13px;
}
.keys {
  color: var(--muted);
}
@media (max-width: 899px) {
  .box {
    display: none;
  }
}
@media (max-height: 560px) {
  .box {
    right: 8px;
    bottom: 8px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .box,
  .chev,
  .wrap,
  .body {
    transition: none;
  }
}
</style>
