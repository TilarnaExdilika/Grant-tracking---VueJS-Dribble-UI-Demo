<template>
  <BorderContainer :size="1">
    <div class="pledged-content">
      <TitleContainer iconTitle="fas fa-chart-pie" title="Pledged Card" symbol="24h" iconButton="fas fa-chevron-right"
        describe="Total pledged amount tracking" />
    </div>
  </BorderContainer>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/common/BorderContainer.vue'
import TitleContainer from '@/components/common/TitleContainer.vue'
</script>

<style scoped>
.pledged-content {
  padding: 6px;
}
</style>
