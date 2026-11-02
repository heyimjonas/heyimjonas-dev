<script setup>
defineProps({
  icon: { type: Object, required: true },
  label: { type: String, required: true },
  brand: { type: String, default: null },
})
</script>

<template>
  <figure class="item">
    <svg v-if="icon.path" class="mark" :viewBox="icon.viewBox ?? '0 0 24 24'" role="img" :aria-label="label">
      <path :d="icon.path" :style="{ fill: brand ?? 'currentColor' }" />
    </svg>
    <img v-else-if="icon.image" class="mark" :src="icon.image" :alt="label" />
    <span v-else class="mark emoji" role="img" :aria-label="label">{{ icon.emoji }}</span>
    <figcaption class="mono">{{ label }}</figcaption>
  </figure>
</template>

<style scoped>
.item {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: var(--text);
}
.mark {
  width: var(--size, 56px);
  height: var(--size, 56px);
}
.emoji {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(var(--size, 56px) * 0.85);
  line-height: 1;
}
figcaption {
  font-size: 12px;
  color: var(--muted);
}
</style>
