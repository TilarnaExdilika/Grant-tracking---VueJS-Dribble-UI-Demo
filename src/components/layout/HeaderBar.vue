<template>
  <div class="header-bar">
    <!-- Desktop layout -->
    <div class="header-content desktop-layout">
      <HeaderLeft />
      <div class="navigation-header">
        <!-- Navigation links -->
      </div>
      <div class="right-header">
        <!-- Right header content -->
      </div>
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
import MobileDrawer from './MobileDrawer.vue'

const isDrawerOpen = ref(false)

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
}
</script>

<style scoped>
.header-bar {
  height: 80px;
  width: 100%;
  background: transparent;
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.desktop-layout {
  justify-content: space-between;
}

.navigation-header {
  width: 250px;
  background-color: #E0FFFF;
  padding: 15px;
}

.right-header {
  background-color: #F0FFF0;
  padding: 15px;
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
