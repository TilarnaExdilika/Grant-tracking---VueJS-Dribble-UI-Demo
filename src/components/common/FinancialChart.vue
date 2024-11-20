<template>
  <div class="financial-chart">
    <div class="chart-wrapper">
      <div class="chart-info">
        <div class="info-group">
          <div class="total">${{ data.total }}</div>
          <div class="average">${{ data.average }} average</div>
        </div>

        <div class="legend">
          <div class="legend-item">
            <span class="dot foundation"></span>
            <span>Foundations</span>
          </div>
          <div class="legend-item">
            <span class="dot corporation"></span>
            <span>Corporations</span>
          </div>
          <div class="legend-item">
            <span class="dot total-quarter"></span>
            <span>Total by quarter</span>
          </div>
          <div class="legend-item">
            <span class="dot losses"></span>
            <span>Total losses</span>
          </div>
        </div>
      </div>

      <div class="chart-container">
        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
          <!-- Grid lines -->
          <line x1="0" y1="100" x2="800" y2="100" stroke="#3d3e48" stroke-width="1" stroke-dasharray="4 4" />

          <!-- Quarters -->
          <g v-for="(quarter, index) in Object.keys(data.quarters)" :key="quarter">
            <g :transform="`translate(${index * 400}, 0)`">
              <!-- Total by quarter -->
              <rect :x="40" :y="100 - getBarHeight(data.quarters[quarter].totalByQuarter)" width="80"
                :height="getBarHeight(data.quarters[quarter].totalByQuarter)" class="total-quarter-bar" rx="4" />

              <!-- Foundations -->
              <rect :x="140" :y="100 - getBarHeight(data.quarters[quarter].foundations)" width="80"
                :height="getBarHeight(data.quarters[quarter].foundations)" class="foundation-bar" rx="4" />

              <!-- Losses if exists -->
              <rect v-if="data.quarters[quarter].losses" :x="240" y="100" width="80"
                :height="getBarHeight(Math.abs(data.quarters[quarter].losses || 0))" class="losses-bar" rx="4" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { ChartData } from '@/types/chart'

defineProps<{
  data: ChartData
}>()

const getBarHeight = (value: number): number => {
  const maxValue = 3.0
  return (value / maxValue) * 100
}
</script>

<style scoped>
.chart-wrapper {
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 20px;
}

.chart-info {
  min-width: 250px;
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

.chart-container {
  height: 200px;
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
