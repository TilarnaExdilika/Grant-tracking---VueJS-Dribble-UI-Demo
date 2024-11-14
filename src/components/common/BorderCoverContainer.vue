<template>
  <div class="border-cover-container">
    <div class="border-cover-container__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'BorderCoverContainer'
})
</script>

<style scoped>
.border-cover-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: none;
  background: var(--border_container);
  transition: all 0.3s ease;
  padding: 8px;
  overflow: hidden;
}

.border-cover-container__content {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.border-cover-container::before {
  content: '';
  position: absolute;
  top: 1.8px;
  left: 1.8px;
  right: 1.8px;
  bottom: 1.8px;
  background: var(--border_gradient);
  border-radius: 6px;
  opacity: 1;
  animation: gradientIn 0.3s ease forwards;
}

.border-cover-container :deep(*) {
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

/* Hover effect */
.border-cover-container:hover::before {
  background: var(--backgroundContainerHover);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .border-cover-container {
    background: var(--border_container_dark, var(--border_container));
  }

  .border-cover-container::before {
    background: var(--backgroundContainer_dark, var(--backgroundContainer));
  }

  .border-cover-container:hover::before {
    background: var(--backgroundContainerHover_dark, var(--backgroundContainerHover));
  }
}
</style>
