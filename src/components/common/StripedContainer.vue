<template>
  <div class="striped-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'StripedContainer'
})
</script>

<style scoped>
.striped-container {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, rgba(0, 0, 0, 0.2) 70%);
  mask-image: radial-gradient(ellipse at center, black 30%, rgba(0, 0, 0, 0.2) 70%);

  background-image:
    linear-gradient(to bottom,
      var(--border-color, var(--border, #4a4b57)) 2px,
      transparent 2px),
    repeating-linear-gradient(180deg,
      var(--stripe-color-1, var(--background-main, #2a2a2a)) 0px,
      var(--stripe-color-1, var(--background-main, #2a2a2a)) 35px,
      var(--stripe-color-2, var(--background-secondary, #121212)) 35px,
      var(--stripe-color-2, var(--background-secondary, #121212)) 70px);
  background-size:
    100% 35px,
    100% 70px;
  opacity: 0.6;
}
</style>
