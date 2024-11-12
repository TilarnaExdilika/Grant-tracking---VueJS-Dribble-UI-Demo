<template>
  <div class="header-bar">
    <!-- Desktop layout -->
    <div class="header-content desktop-layout">
      <HeaderLeft />
      <HeaderNavigation />
      <HeaderRight />
    </div>

    <!-- Mobile layout -->
    <div class="header-content mobile-layout">
      <HeaderLeft />
      <div class="drawer-icon" @click="toggleDrawer">
        <i class="fas fa-bars"></i>
      </div>
      <MobileDrawer :isOpen="isDrawerOpen" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderLeft from './HeaderLeft.vue'
import HeaderNavigation from './HeaderNavigation.vue'
import HeaderRight from './HeaderRight.vue'
import MobileDrawer from './MobileDrawer.vue'

const isDrawerOpen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}
</script>

<style scoped>
.header-bar {
  height: 70px;
  width: 100%;
  background: transparent;
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 5px;
}

.desktop-layout {
  justify-content: space-between;
}

.right-header {
  min-width: 200px;
}

.mobile-layout {
  display: none;
  justify-content: space-between;
}

.drawer-icon {
  cursor: pointer;
  padding: 10px;
  color: var(--unactive_text);
}

.drawer-icon:hover {
  color: var(--active_text);
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .desktop-layout {
    display: none;
  }

  .mobile-layout {
    display: flex;
  }
}
</style>
