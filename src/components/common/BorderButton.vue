<template>
  <button class="border-button" :class="{
    'has-notification': hasNotification,
    'active': active
  }" @click="$emit('click')">
    <slot></slot>
    <span v-if="hasNotification" class="notification-dot"></span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  hasNotification: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style scoped>
.border-button {
  position: relative;
  min-width: 38px;
  height: 38px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0 8px;
}

.border-button::before {
  content: '';
  position: absolute;
  top: 1.8px;
  left: 1.8px;
  right: 1.8px;
  bottom: 1.8px;
  background: transparent;
  border-radius: 6px;
  transition: opacity 0.3s ease;
  opacity: 0;
}

.border-button :deep(*) {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  font-size: 0.86rem;
  color: var(--unactive_text);
  transform-origin: center;
  animation: scaleIn 0.2s ease;
}

.border-button.active {
  background: var(--border_gradient);
}

.border-button.active::before {
  background: var(--button_gradient);
  opacity: 1;
  animation: gradientIn 0.3s ease forwards;
}

.border-button.active :deep(*) {
  color: var(--active_text);
}

.border-button:hover :deep(i) {
  color: var(--active_text);
}

.border-button:hover :deep(span) {
  color: var(--active_text);
}

.notification-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--cyan);
  border: 2px solid var(--backgroundMain);
  z-index: 1;
}

.border-button.active {
  background: var(--border_gradient);
}

.border-button.active::before {
  background: var(--button_gradient);
}

.border-button.active:hover :deep(i) {
  color: var(--active_text);
}

@keyframes scaleIn {
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
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
