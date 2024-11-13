<template>
  <div class="border-container" :style="containerStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    default: 1
  }
})

const containerStyle = computed(() => ({
  '--container-scale': props.size,
}))
</script>

<style scoped>
.border-container {
  --container-scale: 1;

  position: relative;
  width: calc(448px * var(--container-scale));
  height: calc(336px * var(--container-scale));
  border-radius: calc(8px * var(--container-scale));
  border: none;
  background: var(--border_container);
  transition: all 0.3s ease;
  padding: 8px;
}

.border-container::before {
  content: '';
  position: absolute;
  top: 1.8px;
  left: 1.8px;
  right: 1.8px;
  bottom: 1.8px;
  background: var(--backgroundContainer);
  border-radius: calc(6px * var(--container-scale));
  opacity: 1;
  animation: gradientIn 0.3s ease forwards;
}

.border-container :deep(*) {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  color: var(--active_text);
}

@keyframes gradientIn {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
