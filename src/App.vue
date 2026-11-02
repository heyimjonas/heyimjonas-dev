<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import AboutView from './views/AboutView.vue'
import CvView from './views/CvView.vue'
import ExperienceView from './views/ExperienceView.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import TechStackView from './views/TechStackView.vue'
import { parseTab } from './tabs.js'

const views = { home: HomeView, experience: ExperienceView, about: AboutView, projects: ProjectsView, tech_stack: TechStackView, cv: CvView }

const active = ref(parseTab(location.hash))

function select(id) {
  location.hash = id
}
function sync() {
  active.value = parseTab(location.hash)
}

onMounted(() => window.addEventListener('hashchange', sync))
onBeforeUnmount(() => window.removeEventListener('hashchange', sync))
</script>

<template>
  <div class="shell">
    <NavBar :active="active" @select="select" />
    <main class="panel">
      <Transition name="swap" mode="out-in">
        <component :is="views[active]" :key="active" />
      </Transition>
    </main>
  </div>
</template>

<style scoped>
.shell {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.panel {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: auto;
  padding: 16px;
}
.panel > :deep(*) {
  margin: auto;
}
.swap-enter-active,
.swap-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
@media (prefers-reduced-motion: reduce) {
  .swap-enter-active,
  .swap-leave-active {
    transition: none;
  }
}
</style>
