<template>
  <div class="financial-chart">
    <div class="chart-wrapper">
      <div class="chart-info">
        <div class="info-group">
          <div class="total">{{ data.total }}</div>
          <div class="average">{{ data.average }} average</div>
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

      <!-- Chart -->
      <div class="chart-container">
        <div class="chart-columns">
          <div class="column">
            <div class="quarter-label">LQ</div>
            <div class="blocks">
              <div class="block total-quarter">1.23</div>
              <div class="block foundation" style="margin-left: 15px; margin-top: -30px">0.95</div>
            </div>
          </div>

          <div class="column">
            <div class="quarter-label">Q3</div>
            <div class="blocks">
              <div class="block foundation" style="margin-left: -10px">0.32</div>
              <div class="block losses" style="margin-left: 10px">-0.41</div>
              <div class="block total-quarter" style="margin-left: 25px">2.38</div>
            </div>
          </div>
        </div>
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
</script>

<style scoped>
.financial-chart {
  padding: 20px;
  background: #2A2A2A;
  border-radius: 12px;
}

.chart-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
}

.chart-info {
  min-width: 200px;
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

.chart-container {
  position: relative;
  height: 70px;
  flex-grow: 1;
}

.chart-columns {
  display: flex;
  gap: 150px;
  height: 100%;
  align-items: flex-end;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.blocks {
  position: relative;
  height: 100%;
}

.block {
  position: absolute;
  width: 40px;
  padding: 6px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.block.total-quarter {
  height: 45px;
  background: rgba(83, 123, 234, 0.9);
}

.block.foundation {
  height: 35px;
  background: rgba(75, 192, 192, 0.9);
}

.block.losses {
  height: 30px;
  background: rgba(75, 75, 75, 0.9);
}

.quarter-label {
  font-size: 11px;
  position: absolute;
  top: -20px;
  color: var(--unactive_text);
}

/* LQ Column */
.column:first-child .quarter-label {
  left: 20px;
}

/* Q3 Column */
.column:last-child .quarter-label {
  left: 65px;
}

.column:first-child .block.total-quarter {
  left: 0;
}

.column:first-child .block.foundation {
  left: 35px;
  top: 5px;
}

/* Q3 Column */
.column:last-child .block.foundation {
  left: -15px;
  top: 0;
}

.column:last-child .block.losses {
  left: 20px;
  top: 0;
}

.column:last-child .block.total-quarter {
  left: 55px;
}
</style>
