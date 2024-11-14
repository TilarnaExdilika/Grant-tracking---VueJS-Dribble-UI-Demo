<template>
  <BorderContainer :size="1">
    <div class="pledged-content">
      <TitleContainer iconTitle="fas fa-chart-pie" title="Grant amount ratio" symbol="%"
        iconButton="fas fa-chevron-right" describe="Refers to the aggregate sum of commitments" />
      <BorderCoverContainer class="content-wrapper">
        <!-- content -->
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
