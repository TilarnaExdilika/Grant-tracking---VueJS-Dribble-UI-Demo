<script setup>
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: var(--font-family);
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: var(--font-family);
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
