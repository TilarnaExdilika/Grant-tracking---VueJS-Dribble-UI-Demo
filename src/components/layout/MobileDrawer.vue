<template>
  <div class="mobile-drawer" :class="{ 'drawer-open': isOpen }">
    <div class="right-header-section">
      <HeaderRight />
    </div>
    <div class="navigation-section">
      <div class="nav-button" :class="{ active: navigation.currentTab === 'overview' }"
        @click="navigation.setCurrentTab('overview')">
        <i class="fas fa-home"></i>
        <span>Overview</span>
      </div>
      <div class="nav-button" :class="{ active: navigation.currentTab === 'analysis' }"
        @click="navigation.setCurrentTab('analysis')">
        <i class="fas fa-chart-bar"></i>
        <span>Analysis</span>
      </div>
      <div class="nav-button" :class="{ active: navigation.currentTab === 'affiliates' }"
        @click="navigation.setCurrentTab('affiliates')">
        <i class="fas fa-handshake"></i>
        <span>Affiliates</span>
      </div>
      <div class="nav-button" :class="{ active: navigation.currentTab === 'clients' }"
        @click="navigation.setCurrentTab('clients')">
        <i class="fas fa-users"></i>
        <span>Clients</span>
      </div>
      <div class="nav-button" :class="{ active: navigation.currentTab === 'ai-strategy' }"
        @click="navigation.setCurrentTab('ai-strategy')">
        <i class="fas fa-robot"></i>
        <span>AI Strategy</span>
        <span class="notification-dot"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderRight from './HeaderRight.vue'
import { useNavigationStore } from '@/stores/navigation'

const navigation = useNavigationStore()

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

.right-header-section {
  margin-bottom: 30px;
}

.navigation-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--unactive_text);
}

.nav-button i {
  font-size: 1.2rem;
}

.nav-button span {
  font-size: 0.95rem;
}

.nav-button:hover {
  color: var(--active_text);
  background: var(--button_gradient);
}

.nav-button.active {
  color: var(--active_text);
  background: var(--button_gradient);
}

.notification-dot {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--cyan);
  border: 2px solid var(--backgroundMain);
}
</style>
