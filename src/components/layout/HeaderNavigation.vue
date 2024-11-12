<template>
  <div class="right-header">
    <BorderButton :active="currentTab === 'overview'" @click="setCurrentTab('overview')">
      <i class="fas fa-home"></i>
      <span> Overview</span>
    </BorderButton>
    <BorderButton :active="currentTab === 'analysis'" @click="setCurrentTab('analysis')">
      <i class="fas fa-chart-bar"></i>
      <span> Analysis</span>
    </BorderButton>
    <BorderButton :active="currentTab === 'affiliates'" @click="setCurrentTab('affiliates')">
      <i class="fas fa-handshake"></i>
      <span> Affiliates</span>
    </BorderButton>
    <BorderButton :active="currentTab === 'clients'" @click="setCurrentTab('clients')">
      <i class="fas fa-users"></i>
      <span> Clients</span>
    </BorderButton>
    <BorderButton :active="currentTab === 'ai-strategy'" @click="setCurrentTab('ai-strategy')">
      <i class="fas fa-robot"></i>
      <span> AI Strategy</span>
    </BorderButton>
  </div>
</template>

<script setup lang="ts">
import BorderButton from '@/components/common/BorderButton.vue'
import { useNavigation } from '@/composables/useNavigation'

const { currentTab, setCurrentTab } = useNavigation()
</script>

<style scoped>
.right-header {
  border-radius: 12px;
  padding: 4px;
  background-color: var(--backgroundSecondary);
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}
</style>
