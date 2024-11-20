<template>
  <div class="financial-chart">
    <div class="chart-info">
      <div class="info-group">
        <div class="total">{{ data.total }}</div>
        <div class="average">{{ data.average }} average</div>
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
      <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
        <!-- Cột cho LQ -->
        <rect class="total-quarter-bar" x="80" :y="291 - getLQHeight()" width="60" :height="getLQHeight()" rx="8"
          ry="8" />
        <text x="110" :y="281 - getLQHeight()" class="column-label" dominant-baseline="middle">LQ</text>

        <!-- Cột cho Q3 -->
        <rect class="total-quarter-bar" x="240" :y="291 - getQ3Height()" width="60" :height="getQ3Height()" rx="8"
          ry="8" />
        <text x="270" :y="281 - getQ3Height()" class="column-label" dominant-baseline="middle">Q3</text>
      </svg>
    </StripedContainer>
  </div>
</template>

<script setup lang="ts">
import type { FinancialChartData } from '@/types/chart'
import StripedContainer from './StripedContainer.vue'

const props = defineProps<{
  data: FinancialChartData
}>()

const getLQHeight = () => {
  return props.data.quarters.LQ.totalByQuarter * 100
}

const getQ3Height = () => {
  return props.data.quarters.Q3.totalByQuarter * 100
}
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
  background: var(--green);
}

.corporation {
  background: var(--cyan);
}

.total-quarter {
  background: var(--purple);
}

.losses {
  background: var(--darkBlue);
}

.total-quarter-bar {
  fill: var(--purple);
  stroke: var(--purple);
  stroke-opacity: 0.9;
  stroke-width: 3px;
}

.foundation-bar {
  fill: var(--green);
}

.losses-bar {
  fill: var(--darkBlue);
}

.column-label {
  fill: var(--active_text);
  text-anchor: middle;
  font-size: 14px;
  font-weight: 500;
}
</style>
