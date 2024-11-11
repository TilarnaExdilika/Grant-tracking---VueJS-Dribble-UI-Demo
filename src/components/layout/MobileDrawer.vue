<template>
  <div class="mobile-drawer" :class="{ 'drawer-open': isOpen }">
    <div class="navigation-header">
      <!-- Navigation links -->
    </div>
    <div class="right-header">
      <!-- Right header content -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
.mobile-drawer {
  position: fixed;
  border-top: 3px solid var(--border);
  border-left: 3px solid var(--border);
  top: 60px;
  right: -100%;
  width: 300px;
  height: calc(100vh - 60px);
  background: var(--backgroundMain);
  transition: right 0.3s ease;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
}

.drawer-open {
  right: 0;
}
</style>
