<template>
  <BorderContainer :size="1">
    <div class="content">
      <TitleContainer iconTitle="fas fa-scale-balanced" title="Grant requested vs. grant declined" symbol="$M"
        iconButton1="fas fa-chevron-right" iconButton2="fas fa-ellipsis" iconButton3="fas fa-list-check"
        describe="Help grantors evaluate the demand for their grant programs" />
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
.content {
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
