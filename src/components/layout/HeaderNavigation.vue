<template>
  <div class="navigation fade-in">
    <BorderButton :active="navigation.currentTab === 'overview'" @click="navigation.setCurrentTab('overview')">
      <i class="fas fa-home"></i>
      <span> Overview</span>
    </BorderButton>
    <BorderButton :active="navigation.currentTab === 'analysis'" @click="navigation.setCurrentTab('analysis')">
      <i class="fas fa-chart-bar"></i>
      <span> Analysis</span>
    </BorderButton>
    <BorderButton :active="navigation.currentTab === 'affiliates'" @click="navigation.setCurrentTab('affiliates')">
      <i class="fas fa-handshake"></i>
      <span> Affiliates</span>
    </BorderButton>
    <BorderButton :active="navigation.currentTab === 'clients'" @click="navigation.setCurrentTab('clients')">
      <i class="fas fa-users"></i>
      <span> Clients</span>
    </BorderButton>
    <BorderButton class="ai-strategy-button" :active="navigation.currentTab === 'ai-strategy'"
      @click="navigation.setCurrentTab('ai-strategy')" :style="{ '--galaxy-bg': `url(${assets.images.ai_bg})` }">
      <i class="fas fa-robot"></i>
      <span> AI Strategy</span>
    </BorderButton>
  </div>
</template>

<script setup lang="ts">
import BorderButton from '@/components/common/BorderButton.vue'
import { useNavigationStore } from '@/stores/navigation'
import { assets } from '@/config/assets'

const navigation = useNavigationStore()
</script>

<style scoped>
.navigation {
  border-radius: 12px;
  padding: 4px;
  background-color: var(--backgroundSecondary);
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.ai-strategy-button) {
  position: relative;
  overflow: hidden;
}

:deep(.ai-strategy-button i) {
  position: relative;
  z-index: 1;
  background: var(--gradient_purple_icon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

:deep(.ai-strategy-button span) {
  position: relative;
  z-index: 1;
  background: var(--gradient_purple_text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

:deep(.ai-strategy-button.active i) {
  background: var(--gradient_purple_icon);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

:deep(.ai-strategy-button.active span) {
  background: var(--gradient_purple_text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

:deep(.ai-strategy-button::after) {
  content: '';
  position: absolute;
  top: 1.8px;
  left: 1.8px;
  right: 1.8px;
  bottom: 1.8px;
  background-image: var(--galaxy-bg);
  background-size: cover;
  background-position: center;
  opacity: 0.7;
  border-radius: 6px;
  z-index: 0;
}

:deep(.ai-strategy-button.active::after) {
  opacity: 0.8;
}

:deep(.ai-strategy-button *) {
  position: relative;
  z-index: 1;
}
</style>
