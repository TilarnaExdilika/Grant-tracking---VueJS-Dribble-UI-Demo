<template>
  <div class="financial-chart">
    <div class="chart-info">
      <div class="info-group">
        <div class="total animate-slide">{{ data.total }}</div>
        <div class="average animate-slide">{{ data.average }} average</div>
      </div>
      <div class="legend">
        <div class="legend-item animate-slide">
          <div class="dot foundation"></div>
          <span>Foundation</span>
        </div>
        <div class="legend-item animate-slide">
          <div class="dot corporation"></div>
          <span>Corporation</span>
        </div>
        <div class="legend-item animate-slide">
          <div class="dot total-quarter"></div>
          <span>Total by Quarter</span>
        </div>
        <div class="legend-item animate-slide">
          <div class="dot losses"></div>
          <span>Losses</span>
        </div>
      </div>
    </div>

    <StripedContainer class="chart-container">
      <svg width="100%" height="100%" viewBox="13 0 400 300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <clipPath id="chart-mask">
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>

        <g clip-path="url(#chart-mask)">
          <g class="chart-column">
            <rect class="total-quarter-bar" x="40" :y="291 - getLQHeight()" width="60" :height="getLQHeight()" rx="8"
              ry="8" />
            <text x="70" :y="280 - getLQHeight()" class="column-label" dominant-baseline="middle">LQ</text>
            <rect class="data-container" x="43" :y="291 - getLQHeight() + 3" width="54" height="24" rx="4" ry="4" />
            <text class="data-text" x="70" :y="291 - getLQHeight() + 20" text-anchor="middle">
              {{ data.quarters.LQ.totalByQuarter }}
            </text>

            <rect class="foundation-bar" x="110" :y="291 - getLQHeight() - getLQFoundationHeight()" width="60"
              :height="getLQFoundationHeight()" rx="8" ry="8" />
            <rect class="data-container" x="113" :y="291 - getLQHeight() - getLQFoundationHeight() + 3" width="54"
              height="24" rx="4" ry="4" />
            <text class="data-text" x="140" :y="291 - getLQHeight() - getLQFoundationHeight() + 20"
              text-anchor="middle">
              {{ data.quarters.LQ.foundations }}
            </text>

            <rect class="corporation-bar" x="180"
              :y="291 - getLQHeight() - getLQFoundationHeight() - getLQCorporationHeight()" width="60"
              :height="getLQCorporationHeight()" rx="8" ry="8" />
            <rect class="data-container" x="183"
              :y="291 - getLQHeight() - getLQFoundationHeight() - getLQCorporationHeight() + 3" width="54" height="24"
              rx="4" ry="4" />
            <text class="data-text" x="210"
              :y="291 - getLQHeight() - getLQFoundationHeight() - getLQCorporationHeight() + 20" text-anchor="middle">
              {{ data.quarters.LQ.corporations }}
            </text>

            <rect class="losses-bar" x="250"
              :y="291 - getLQHeight() - getLQFoundationHeight() - getLQCorporationHeight()" width="60"
              :height="getLQLossesHeight()" rx="8" ry="8" />
            <rect class="data-container" x="253"
              :y="291 - getLQHeight() - getLQFoundationHeight() - getLQCorporationHeight() + 3" width="54" height="24"
              rx="4" ry="4" />
            <text class="data-text" x="280"
              :y="291 - getLQHeight() - getLQFoundationHeight() - getLQCorporationHeight() + 20" text-anchor="middle">
              {{ data.quarters.LQ.losses }}
            </text>
          </g>

          <g class="chart-column">
            <rect class="total-quarter-bar" x="320" :y="291 - getQ3Height()" width="60" :height="getQ3Height()" rx="8"
              ry="8" />
            <text x="350" :y="280 - getQ3Height()" class="column-label" dominant-baseline="middle">Q3</text>
            <rect class="data-container" x="323" :y="291 - getQ3Height() + 3" width="54" height="24" rx="4" ry="4" />
            <text class="data-text" x="350" :y="291 - getQ3Height() + 20" text-anchor="middle">
              {{ data.quarters.Q3.totalByQuarter }}
            </text>
          </g>
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

const MIN_HEIGHT = 30

const getMaxValue = () => {
  const values = [
    props.data.quarters.LQ.totalByQuarter,
    Math.abs(props.data.quarters.LQ.foundations),
    Math.abs(props.data.quarters.LQ.corporations),
    Math.abs(props.data.quarters.LQ.losses),
    props.data.quarters.Q3.totalByQuarter
  ]
  return Math.max(...values)
}

const getScale = () => {
  const maxValue = getMaxValue()
  return maxValue > 2 ? 230 / maxValue : 100
}

const getLQHeight = () => {
  const height = props.data.quarters.LQ.totalByQuarter * getScale()
  return Math.max(height, MIN_HEIGHT)
}

const getQ3Height = () => {
  const height = props.data.quarters.Q3.totalByQuarter * getScale()
  return Math.max(height, MIN_HEIGHT)
}

const getLQFoundationHeight = () => {
  const height = Math.abs(props.data.quarters.LQ.foundations) * getScale()
  return Math.max(height, MIN_HEIGHT)
}

const getLQCorporationHeight = () => {
  const height = Math.abs(props.data.quarters.LQ.corporations) * getScale()
  return Math.max(height, MIN_HEIGHT)
}

const getLQLossesHeight = () => {
  const height = Math.abs(props.data.quarters.LQ.losses) * getScale()
  return Math.max(height, MIN_HEIGHT)
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
  transition: all 2.0s ease-out;
}

.foundation-bar {
  fill: var(--green);
  stroke: var(--green);
  stroke-opacity: 0.9;
  stroke-width: 3px;
  transition: all 2.0s ease-out;
}

.corporation-bar {
  fill: var(--cyan);
  stroke: var(--cyan);
  stroke-opacity: 0.9;
  stroke-width: 3px;
  transition: all 2.0s ease-out;
}

.losses-bar {
  fill: var(--darkBlue);
  stroke: var(--darkBlue);
  stroke-opacity: 0.9;
  stroke-width: 3px;
  transition: all 2.0s ease-out;
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
  transition: all 2.0s ease-out;
}

.data-text {
  fill: var(--active_text);
  font-size: 16px;
  font-weight: 500;
  transition: all 2.0s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.chart-column {
  animation: slideUp 0.8s ease-out forwards;
}

.total-quarter-bar,
.foundation-bar,
.corporation-bar,
.losses-bar {
  transform-origin: 50% 100%;
  transform: scaleY(0);
  animation: growUp 1s ease-out forwards;
}

.total-quarter-bar {
  animation-delay: 0.1s;
}

.foundation-bar {
  animation-delay: 0.3s;
}

.corporation-bar {
  animation-delay: 0.5s;
}

.losses-bar {
  animation-delay: 0.7s;
}

@keyframes growUp {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}

.data-container,
.data-text,
.column-label {
  opacity: 0;
  animation: fadeIn 0.5s ease-out forwards;
  animation-delay: 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
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

.legend-item:nth-child(4) {
  animation-delay: 0.6s;
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

/* Thêm hover effect cho legend items */
.legend-item {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.legend-item:hover {
  transform: translateX(5px);
}
</style>
