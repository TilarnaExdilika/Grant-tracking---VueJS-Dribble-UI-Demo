<template>
  <BorderContainer :size="1">
    <div class="content">
      <TitleContainer iconTitle="fas fa-file-signature" title="Committed and actual balance" symbol="$M"
        iconButton="fas fa-chevron-right" describe="Presents funds reserved for specific purposes" />
      <BorderCoverContainer class="content-wrapper">
        <BalanceChart :data="chartData" />
      </BorderCoverContainer>
    </div>
  </BorderContainer>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/common/BorderContainer.vue'
import TitleContainer from '@/components/common/TitleContainer.vue'
import BorderCoverContainer from '@/components/common/BorderCoverContainer.vue'
import BalanceChart from '@/components/common/BalanceChart.vue'
import type { BalanceChartData } from '@/types/chart'
import balanceChartData from '@/data/balanceChart.json'

const chartData: BalanceChartData = balanceChartData

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
