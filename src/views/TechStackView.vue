<script setup>
import StackIcon from '../components/StackIcon.vue'
import rows from '../data/stack.js'
</script>

<template>
  <section class="stack">
    <div class="k mono">// tech_stack</div>
    <div v-for="(row, i) in rows" :key="i" class="row" :class="{ top: i === 0 }">
      <StackIcon v-for="item in row" :key="item.label" v-bind="item" />
    </div>
  </section>
</template>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  --size: 56px;
}
.k {
  color: var(--blue);
  font-size: 13px;
}
.row {
  display: flex;
  justify-content: center;
  gap: 40px;
}
.row.top {
  --size: 210px;
}
/* Odoo wordmark is wide: keep full width, trim the empty height */
.row.top :deep(.mark) {
  height: calc(var(--size) * 0.317);
}
@media (max-width: 640px) {
  .stack {
    gap: 18px;
    --size: 40px;
  }
  .row {
    gap: 22px;
  }
  .row.top {
    --size: 130px;
  }
}
@media (max-width: 359px) {
  .row {
    flex-wrap: wrap;
    max-width: 200px;
  }
}
@media (max-height: 480px) {
  .stack {
    gap: 8px;
    --size: 32px;
  }
  .row.top {
    --size: 90px;
  }
}
</style>
