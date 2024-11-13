<template>
  <div class="border-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.border-container {
  position: relative;
  width: 300px;
  height: 250px;
  border-radius: 8px;
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
  border-radius: 6px;
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
