<template>
  <div class="dashboard">
    <HeaderBar />
    <BaseContent>

    </BaseContent>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/layout/HeaderBar.vue'
import BaseContent from '@/components/layout/BaseContent.vue'
</script>

<style scoped>
.dashboard {
  height: 100vh;
  padding: 2px 10px 0 10px;
  background-color: var(--backgroundMain);
  display: flex;
  flex-direction: column;
}
</style>
