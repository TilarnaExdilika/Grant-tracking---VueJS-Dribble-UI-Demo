<template>
  <div class="financial-chart">
    <div class="chart-info">
      <div class="info-group">
        <div class="total animate-slide">{{ data.total }}</div>
        <div class="average animate-slide">{{ data.average }}</div>
      </div>
      <div class="legend">
        <div v-for="[key, item] in Object.entries(data.legend)" :key="key" class="legend-item animate-slide">
          <div class="dot" :style="{ background: item.color }"></div>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <StripedContainer class="chart-container">

    </StripedContainer>
  </div>
</template>

<script setup lang="ts">
import type { BalanceChartData } from '@/types/chart'
import StripedContainer from './StripedContainer.vue'

const props = defineProps<{
  data: BalanceChartData
}>()


</script>

<style scoped>
.financial-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
}

.chart-container {
  flex: 1;
  height: 100%;
}

.info-group {
  margin-bottom: 15px;
}

.total {
  font-size: 24px;
  font-weight: 500;
  color: var(--active_text);
}

.average {
  font-size: 14px;
  opacity: 0.7;
  color: var(--unactive_text);
}

.legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--unactive_text);
  cursor: pointer;
  transition: transform 0.2s ease;
}

.legend-item:hover {
  transform: translateX(5px);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.animate-slide {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideIn 0.5s ease-out forwards;
}

.total {
  animation-delay: 0.1s;
}

.average {
  animation-delay: 0.2s;
}

.legend-item:nth-child(1) {
  animation-delay: 0.3s;
}

.legend-item:nth-child(2) {
  animation-delay: 0.4s;
}

.legend-item:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
