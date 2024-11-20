<template>
  <div class="financial-chart">
    <div class="chart-info">
      <div class="info-group">
        <div class="total">{{ data.total }}</div>
        <div class="average">{{ data.average }}</div>
      </div>
      <div class="legend">
        <div class="legend-item">
          <div class="dot foundation"></div>
          <span>Foundation</span>
        </div>
        <div class="legend-item">
          <div class="dot corporation"></div>
          <span>Corporation</span>
        </div>
        <div class="legend-item">
          <div class="dot total-quarter"></div>
          <span>Total by Quarter</span>
        </div>
        <div class="legend-item">
          <div class="dot losses"></div>
          <span>Losses</span>
        </div>
      </div>
    </div>

    <StripedContainer class="chart-container">
      <!-- Phần chart mới sẽ được thêm vào đây -->
    </StripedContainer>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { ChartData } from '@/types/chart'
import StripedContainer from './StripedContainer.vue'

defineProps<{
  data: ChartData
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
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.foundation {
  background: var(--purple);
}

.corporation {
  background: var(--cyan);
}

.total-quarter {
  background: var(--green);
}

.losses {
  background: var(--darkBlue);
}

.total-quarter-bar {
  fill: var(--green);
  opacity: 0.8;
}

.foundation-bar {
  fill: var(--purple);
  opacity: 0.8;
}

.losses-bar {
  fill: var(--darkBlue);
  opacity: 0.8;
}

rect {
  transition: all 0.3s ease;
}

rect:hover {
  opacity: 1;
  transform: scaleY(1.05);
}
</style>
