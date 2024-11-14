<template>
  <div class="border-cover-container">
    <slot></slot>
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
  background: var(--border_container);
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.border-cover-container::before {
  content: '';
  position: absolute;
  inset: 1.8px;
  background: var(--backgroundContainer2);
  border-radius: 6px;
}
</style>
