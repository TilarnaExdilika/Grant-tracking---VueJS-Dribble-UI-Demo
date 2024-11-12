<template>
  <div class="mobile-drawer" :class="{ 'drawer-open': isOpen }">
    <div class="right-header-section">
      <HeaderRight />
      <BorderButton active>
        <i class="fas fa-download"></i>
      </BorderButton>
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
      <div class="nav-button ai-strategy-button" :class="{ active: navigation.currentTab === 'ai-strategy' }"
        @click="navigation.setCurrentTab('ai-strategy')" :style="{ '--galaxy-bg': `url(${assets.images.ai_bg})` }">
        <i class="fas fa-robot"></i>
        <span>AI Strategy</span>
        <span class="notification-dot"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderRight from './HeaderRight.vue'
import BorderButton from '../common/BorderButton.vue'
import { useNavigationStore } from '@/stores/navigation'
import { assets } from '@/config/assets'

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
  display: flex;
  align-items: center;
  gap: 5px;
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
  color: var(--unactive_text);
  transition: color 0.3s ease;
  background: transparent;
  overflow: hidden;
}

.nav-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  right: 100%;
  bottom: 0;
  background: var(--button_gradient);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button>* {
  position: relative;
  z-index: 1;
}

.nav-button:hover::before,
.nav-button.active::before {
  left: 0;
  right: 0;
}

.nav-button:hover>* {
  animation: popIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-button:hover,
.nav-button.active {
  color: var(--active_text);
}

.nav-button i {
  font-size: 1.2rem;
}

.nav-button span {
  font-size: 0.95rem;
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

@keyframes popIn {
  0% {
    transform: translateY(5px);
    opacity: 0.5;
  }

  50% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.ai-strategy-button {
  position: relative;
  overflow: hidden;
}

.ai-strategy-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--galaxy-bg);
  background-size: cover;
  background-position: center;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ai-strategy-button.active::after {
  opacity: 0.8;
}

.ai-strategy-button i {
  background: var(--gradient_purple_icon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.ai-strategy-button span:not(.notification-dot) {
  background: var(--gradient_purple_text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.download-app-btn {
  width: 100%;
  margin-top: 10px;
}

.download-app-btn :deep(i) {
  margin-right: 8px;
}

.download-app-btn :deep(span) {
  font-size: 0.95rem;
}
</style>
