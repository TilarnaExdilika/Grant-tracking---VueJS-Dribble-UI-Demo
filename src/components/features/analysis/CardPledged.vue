<template>
  <BorderContainer :size="1">
    <div class="content">
      <TitleContainer iconTitle="fas fa-briefcase" title="Total pledged" symbol="$B" iconButton1="fas fa-chevron-right"
        describe="Refers to the aggregate sum of commitments" />
      <BorderCoverContainer class="content-wrapper">
        <FinancialChart :data="chartData" />
      </BorderCoverContainer>
    </div>
  </BorderContainer>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/common/BorderContainer.vue'
import TitleContainer from '@/components/common/TitleContainer.vue'
import BorderCoverContainer from '@/components/common/BorderCoverContainer.vue'
import FinancialChart from '@/components/common/FinancialChart.vue'
import type { FinancialChartData } from '@/types/chart'
import financialChartData from '@/data/financialChart.json'

const chartData: FinancialChartData = financialChartData
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
