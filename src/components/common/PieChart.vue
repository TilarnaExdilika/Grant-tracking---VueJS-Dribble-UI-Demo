<template>
  <div class="financial-chart">
    <div class="chart-info">
      <div class="info-group">
        <div class="total animate-slide">
          {{ data.areas.length }} areas <span class="increment">(+1)</span>
        </div>
      </div>
      <div class="legend">
        <div v-for="(area, index) in data.areas" :key="index" class="legend-item animate-slide">
          <div class="dot" :style="{ background: area.color }"></div>
          <span>{{ area.name }}</span>
        </div>
      </div>
    </div>

    <div class="pie-chart">
      <svg width="200" height="200" viewBox="0 0 300 300">
        <g transform="translate(150, 150)">
          <circle class="center-container" r="45" cx="0" cy="0" />

          <path v-for="(segment, index) in segments" :key="index" :d="segment.path" :fill="segment.color"
            class="segment" @mouseenter="highlightSegment(index)" @mouseleave="resetSegment()">
          </path>
          <g v-for="(segment, index) in segments" :key="'text-' + index">
            <rect class="value-container" :x="segment.labelX - 15" :y="segment.labelY - 12" width="30" height="24"
              rx="4" />
            <text :x="segment.labelX" :y="segment.labelY" class="segment-value" fill="white" dominant-baseline="middle">
              {{ segment.value }}
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PieChartData } from '@/types/chart'

const props = defineProps<{
  data: PieChartData
}>()

const segments = computed(() => {
  const radius = 120
  const offset = 2
  let startAngle = 1.5 * Math.PI

  return props.data.areas.map(area => {
    const percentage = area.value / props.data.total
    const angle = percentage * 2 * Math.PI
    const endAngle = startAngle + angle

    const labelRadius = radius * 0.7
    const labelAngle = startAngle + (angle / 2)
    const labelX = labelRadius * Math.cos(labelAngle)
    const labelY = labelRadius * Math.sin(labelAngle)

    const centerX = offset * Math.cos((startAngle + endAngle) / 2)
    const centerY = offset * Math.sin((startAngle + endAngle) / 2)
    const x1 = radius * Math.cos(startAngle) + centerX
    const y1 = radius * Math.sin(startAngle) + centerY
    const x2 = radius * Math.cos(endAngle) + centerX
    const y2 = radius * Math.sin(endAngle) + centerY

    const largeArcFlag = percentage > 0.5 ? 1 : 0
    const path = `M ${centerX} ${centerY}
                  L ${x1} ${y1}
                  A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
                  Z`

    const segment = {
      path,
      color: area.color,
      value: area.value,
      labelX,
      labelY
    }

    startAngle = endAngle
    return segment
  })
})

const highlightSegment = (index: number) => {
  const segments = document.querySelectorAll('.segment')
  segments[index].setAttribute('transform', 'scale(1.05)')
}

const resetSegment = () => {
  const segments = document.querySelectorAll('.segment')
  segments.forEach(segment => {
    segment.setAttribute('transform', 'scale(1)')
  })
}
</script>

<style scoped>
.financial-chart {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  box-sizing: border-box;
}

.pie-chart {
  flex-shrink: 0;
  width: 200px;
  height: 200px;
}

.segment {
  transition: all 0.3s ease;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.2));
}

.segment:hover {
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.3));
}

.info-group {
  margin-bottom: 15px;
}

.total {
  font-size: 24px;
  font-weight: 500;
  color: var(--active_text);
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

.value {
  margin-left: auto;
  font-weight: 500;
  color: var(--active_text);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.pie-segment {
  fill: none;
  stroke-width: 60;
  transform-origin: center;
  opacity: 0;
  animation: drawSegment 1.5s ease-out forwards;
}

.segment-value {
  font-size: 14px;
  font-weight: bold;
  text-anchor: middle;
  pointer-events: none;
}

@keyframes drawSegment {
  from {
    opacity: 0;
    stroke-dashoffset: 1005;
  }

  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
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

.legend-item {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.legend-item:hover {
  transform: translateX(5px);
}

.increment {
  color: var(--unactive_text);
}

.center-container {
  fill: var(--backgroundMain);
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
}

.center-text {
  fill: var(--active_text);
  font-size: 24px;
  font-weight: 500;
  text-anchor: middle;
}

.value-container {
  fill: var(--backgroundMain);
  opacity: 0.2;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.2));
}
</style>
