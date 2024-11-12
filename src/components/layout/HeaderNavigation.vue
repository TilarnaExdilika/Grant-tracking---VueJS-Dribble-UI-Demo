<template>
  <div class="right-header">
    <BorderButton>
      <i class="fas fa-home"></i>
      <span> Overview</span>
    </BorderButton>
    <BorderButton active>
      <i class="fas fa-chart-bar"></i>
      <span> Analysis</span>
    </BorderButton>
    <BorderButton>
      <i class="fas fa-handshake"></i>
      <span> Affiliates</span>
    </BorderButton>
    <BorderButton>
      <i class="fas fa-users"></i>
      <span> Clients</span>
    </BorderButton>
    <BorderButton has-notification>
      <i class="fas fa-robot"></i>
      <span> AI Strategy</span>
    </BorderButton>
  </div>
</template>

<script setup lang="ts">
import BorderButton from '@/components/common/BorderButton.vue'
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
