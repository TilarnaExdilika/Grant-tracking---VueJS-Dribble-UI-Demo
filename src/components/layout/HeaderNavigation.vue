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
    <BorderButton :active="navigation.currentTab === 'ai-strategy'" @click="navigation.setCurrentTab('ai-strategy')">
      <i class="fas fa-robot"></i>
      <span> AI Strategy</span>
    </BorderButton>
  </div>
</template>

<script setup lang="ts">
import BorderButton from '@/components/common/BorderButton.vue'
import { useNavigationStore } from '@/stores/navigation'

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
</style>
