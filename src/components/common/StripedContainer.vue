<template>
  <div class="striped-container">
    <div class="striped-background"></div>
    <div class="content">
      <slot></slot>
    </div>
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
}

.striped-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-mask-image: radial-gradient(ellipse at center, black 50%, rgba(0, 0, 0, 0.2) 80%);
  mask-image: radial-gradient(ellipse at center, black 50%, rgba(0, 0, 0, 0.2) 80%);

  background-image:
    linear-gradient(to bottom,
      rgba(74, 75, 87, 0.6) 2px,
      transparent 2px),
    repeating-linear-gradient(180deg,
      rgba(42, 42, 42, 0.6) 0px,
      rgba(42, 42, 42, 0.6) 35px,
      rgba(18, 18, 18, 0.6) 35px,
      rgba(18, 18, 18, 0.6) 70px);
  background-size:
    100% 35px,
    100% 70px;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
