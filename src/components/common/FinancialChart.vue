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
      <svg width="100%" height="100%" viewBox="13 0 400 300" preserveAspectRatio="xMidYMid meet">
        <!-- Cột cho LQ -->
        <g>
          <!-- Cột total LQ (đầu tiên) -->
          <rect class="total-quarter-bar" x="40" :y="291 - getLQHeight()" width="60" :height="getLQHeight()" rx="8"
            ry="8" />
          <text x="70" :y="280 - getLQHeight()" class="column-label" dominant-baseline="middle">LQ</text>
          <rect class="data-container" x="43" :y="291 - getLQHeight() + 3" width="54" height="24" rx="4" ry="4" />
          <text class="data-text" x="70" :y="291 - getLQHeight() + 20" text-anchor="middle">
            {{ data.quarters.LQ.totalByQuarter }}
          </text>

          <!-- Cột foundation (thứ hai) -->
          <rect class="foundation-bar" x="110" :y="291 - getLQFoundationHeight()" width="60"
            :height="getLQFoundationHeight()" rx="8" ry="8" />
          <rect class="data-container" x="113" :y="291 - getLQFoundationHeight() + 3" width="54" height="24" rx="4"
            ry="4" />
          <text class="data-text" x="140" :y="291 - getLQFoundationHeight() + 20" text-anchor="middle">
            {{ data.quarters.LQ.foundations }}
          </text>

          <!-- Cột corporation (thứ ba) -->
          <rect class="corporation-bar" x="180" :y="291 - getLQCorporationHeight()" width="60"
            :height="getLQCorporationHeight()" rx="8" ry="8" />
          <rect class="data-container" x="183" :y="291 - getLQCorporationHeight() + 3" width="54" height="24" rx="4"
            ry="4" />
          <text class="data-text" x="210" :y="291 - getLQCorporationHeight() + 20" text-anchor="middle">
            {{ data.quarters.LQ.corporations }}
          </text>

          <!-- Cột losses (cuối cùng) -->
          <rect class="losses-bar" x="250" :y="291 - getLQLossesHeight()" width="60" :height="getLQLossesHeight()"
            rx="8" ry="8" />
          <rect class="data-container" x="253" :y="291 - getLQLossesHeight() + 3" width="54" height="24" rx="4"
            ry="4" />
          <text class="data-text" x="280" :y="291 - getLQLossesHeight() + 20" text-anchor="middle">
            {{ data.quarters.LQ.losses }}
          </text>
        </g>

        <!-- Giữ nguyên cột Q3 -->
        <g>
          <rect class="total-quarter-bar" x="320" :y="291 - getQ3Height()" width="60" :height="getQ3Height()" rx="8"
            ry="8" />
          <text x="350" :y="280 - getQ3Height()" class="column-label" dominant-baseline="middle">Q3</text>
          <rect class="data-container" x="323" :y="291 - getQ3Height() + 3" width="54" height="24" rx="4" ry="4" />
          <text class="data-text" x="350" :y="291 - getQ3Height() + 20" text-anchor="middle">
            {{ data.quarters.Q3.totalByQuarter }}
          </text>
        </g>
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
  return props.data.quarters.LQ.totalByQuarter * 70
}

const getQ3Height = () => {
  return props.data.quarters.Q3.totalByQuarter * 70
}

const getLQFoundationHeight = () => {
  return Math.abs(props.data.quarters.LQ.foundations * 70)
}

const getLQCorporationHeight = () => {
  return Math.abs(props.data.quarters.LQ.corporations * 70)
}

const getLQLossesHeight = () => {
  return Math.abs(props.data.quarters.LQ.losses * 70)
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
  stroke: var(--green);
  stroke-opacity: 0.9;
  stroke-width: 3px;
}

.corporation-bar {
  fill: var(--cyan);
  stroke: var(--cyan);
  stroke-opacity: 0.9;
  stroke-width: 3px;
}

.losses-bar {
  fill: var(--darkBlue);
  stroke: var(--darkBlue);
  stroke-opacity: 0.9;
  stroke-width: 3px;
}

.column-label {
  fill: var(--active_text);
  text-anchor: middle;
  font-size: 14px;
  font-weight: 500;
}

.data-container {
  fill: var(--backgroundMain);
  fill-opacity: 0.2;
}

.data-text {
  fill: var(--active_text);
  font-size: 14px;
  font-weight: 500;
}
</style>
