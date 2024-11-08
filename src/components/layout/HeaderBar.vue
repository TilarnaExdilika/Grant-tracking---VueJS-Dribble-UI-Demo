<template>
  <div class="header-bar">
    <!-- Desktop layout -->
    <div class="header-content desktop-layout">
      <div class="left-header">
        <!-- Left header content -->
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
        <!-- Left header content -->
      </div>

      <div class="drawer-icon" @click="toggleDrawer">
        <i class="fas fa-bars"></i>
      </div>

      <!-- Mobile drawer -->
      <div class="mobile-drawer" :class="{ 'drawer-open': isDrawerOpen }">
        <div class="right-header">
          <!-- Right header content -->
        </div>
        <div class="navigation-header">
          <!-- Navigation links -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDrawerOpen: false
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    }
  }
}
</script>

<style scoped>
.header-bar {
  height: 60px;
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
  background-color: #FFE4E1;
  /* Màu hồng nhạt */
  padding: 15px;
  min-width: 200px;
}

.navigation-header {
  width: 250px;
  background-color: #E0FFFF;
  /* Màu xanh nhạt */
  padding: 15px;
}

.right-header {
  background-color: #F0FFF0;
  /* Màu xanh lá nhạt */
  padding: 15px;
  min-width: 200px;
}

/* Mobile styles */
.mobile-layout {
  display: none;
  justify-content: space-between;
}

.drawer-icon {
  cursor: pointer;
  padding: 10px;
}

.mobile-drawer {
  position: fixed;
  top: 60px;
  right: -100%;
  width: 300px;
  height: calc(100vh - 60px);
  background: white;
  transition: right 0.3s ease;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 20px;
}

.mobile-drawer .left-header {
  background-color: #FFE4E1;
  /* Màu hồng nhạt */
  padding: 15px;
  margin-bottom: 20px;
}

.mobile-drawer .navigation-header {
  background-color: #E0FFFF;
  /* Màu xanh nhạt */
  padding: 15px;
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
