<template>
  <BorderContainer :size="1">
    <div class="content">
      <TitleContainer iconTitle="fas fa-chart-pie" title="Grant amount ratio" symbol="%"
        iconButton="fas fa-chevron-right" describe="Track and report on specific grant ratio" />
      <BorderCoverContainer class="content-wrapper">
        <PieChart :data="pieChartData" />
      </BorderCoverContainer>
    </div>
  </BorderContainer>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/common/BorderContainer.vue'
import TitleContainer from '@/components/common/TitleContainer.vue'
import BorderCoverContainer from '@/components/common/BorderCoverContainer.vue'
import PieChart from '@/components/common/PieChart.vue'
import type { PieChartData } from '@/types/chart'
import chartData from '@/data/pieChart.json'

const pieChartData: PieChartData = chartData
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
