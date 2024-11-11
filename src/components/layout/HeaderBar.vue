<template>
  <div class="header-bar">
    <!-- Desktop layout -->
    <div class="header-content desktop-layout">
      <div class="left-header">
        <div class="logo-section">
          <img :src="assets.images.logo" alt="Logo" class="logo">
          <div class="brand-text">
            <span class="brand-main">Lumify</span>
            <span class="brand-separator">/</span>
            <span class="brand-sub">Nexus</span>
          </div>
        </div>
        <button class="creator-button">
          Creator
        </button>
      </div>

      <div class="navigation-header">
        <!-- Navigation links -->
      </div>

      <div class="right-header">
        <!-- Right header content -->
      </div>
    </div>

    <!-- Mobile layout -->
    <div class="header-content mobile-layout">
      <div class="left-header">
        <div class="logo-section">
          <img :src="assets.images.logo" alt="Logo" class="logo">
          <div class="brand-text">
            <span class="brand-main">Lumify</span>
            <span class="brand-separator">/</span>
            <span class="brand-sub">Nexus</span>
          </div>
        </div>
        <button class="creator-button">
          Creator
        </button>
      </div>

      <div class="drawer-icon" @click="toggleDrawer">
        <i class="fas fa-bars"></i>
      </div>

      <!-- Mobile drawer -->
      <div class="mobile-drawer" :class="{ 'drawer-open': isDrawerOpen }">
        <div class="navigation-header">
          <!-- Navigation links -->
        </div>
        <div class="right-header">
          <!-- Right header content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { assets } from '@/config/assets'

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

/* Desktop styles */
.desktop-layout {
  justify-content: space-between;
}

.left-header {
  padding: 20px 0;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 50px;
  height: 50px;
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
}

.brand-main {
  color: var(--active_text);
  font-weight: bold;
}

.brand-separator,
.brand-sub {
  color: var(--unactive_text);
  font-weight: normal;
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

.creator-button {
  background-color: var(--button_color);
  color: var(--active_text);
  border: none;
  padding: 6px 15px;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.creator-button:hover {
  opacity: 0.9;
}

/* Mobile styles */
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

/* Responsive breakpoint */
@media (max-width: 768px) {
  .desktop-layout {
    display: none;
  }

  .mobile-layout {
    display: flex;
  }
}
</style>
