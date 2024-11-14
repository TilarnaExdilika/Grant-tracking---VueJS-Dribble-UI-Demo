<template>
  <BorderContainer :size="1">
    <div class="pledged-content">
      <TitleContainer iconTitle="fas fa-chart-pie" title="Pledged Card" symbol="24h" iconButton="fas fa-chevron-right"
        describe="Total pledged amount tracking" />
      <BorderCoverContainer class="content-wrapper">
        <!-- Nội dung sẽ được thêm vào đây -->
      </BorderCoverContainer>
    </div>
  </BorderContainer>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/common/BorderContainer.vue'
import TitleContainer from '@/components/common/TitleContainer.vue'
import BorderCoverContainer from '@/components/common/BorderCoverContainer.vue'
</script>

<style scoped>
.pledged-content {
  padding: 2px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.content-wrapper {
  flex: 1;
  width: 100%;
  box-sizing: border-box;
}
</style>
