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
      <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(150, 150)">
          <circle class="center-container animate-fade-in" r="45" cx="0" cy="0" />

          <path v-for="(segment, index) in segments" :key="index" :d="segment.path" :fill="segment.color"
            class="segment animate-draw" :style="{ 'animation-delay': `${index * 0.2}s` }"
            @mouseenter="highlightSegment(index)" @mouseleave="resetSegment()">
          </path>
          <g v-for="(segment, index) in segments" :key="'text-' + index" class="animate-fade-in"
            :style="{ 'animation-delay': `${(index * 0.2) + 0.5}s` }">
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
  const radius = window.innerWidth <= 480 ? 90 : window.innerWidth <= 768 ? 100 : 120
  const offset = window.innerWidth <= 768 ? 1.5 : 2
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
  const angle = (index * 2 * Math.PI / segments.length) + Math.PI / 2
  const translateX = Math.cos(angle) * 15
  const translateY = Math.sin(angle) * 15

  segments[index].setAttribute('transform',
    `translate(${translateX}, ${translateY})
     scale(1.03)`
  )
}

const resetSegment = () => {
  const segments = document.querySelectorAll('.segment')
  segments.forEach(segment =>
    segment.setAttribute('transform', 'translate(0, 0) scale(1)')
  )
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
  flex-shrink: 1;
  width: 200px;
  height: 200px;
  min-width: 100px;
}

.chart-info {
  flex: 1;
  min-width: 150px;
}

/* Thêm media queries cho màn hình nhỏ */
@media screen and (max-width: 768px) {
  .financial-chart {
    padding: 10px;
    gap: 10px;
  }

  .pie-chart {
    width: 150px;
    height: 150px;
  }
}

@media screen and (max-width: 480px) {
  .pie-chart {
    width: 120px;
    height: 120px;
  }
}

.segment {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
  cursor: pointer;
}

.segment:hover {
  filter: brightness(1.05) drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
}

.info-group {
  margin-bottom: 15px;
}

.total {
  font-size: 24px;
  font-weight: 500;
  color: var(--active_text);
  animation-delay: 0.1s;
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
  animation-delay: 0.3s;
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

.legend-item:nth-child(5) {
  animation-delay: 0.7s;
}

.legend-item:nth-child(6) {
  animation-delay: 0.8s;
}

.legend-item:nth-child(7) {
  animation-delay: 0.9s;
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

.animate-draw {
  animation: drawSegment 1s ease-out forwards;
  opacity: 0;
  transform-origin: center;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes drawSegment {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
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

.segment {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.segment:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.value-container {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.segment-value {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.legend-item {
  animation: slideIn 0.5s ease-out forwards;
  animation-delay: calc(0.3s + (var(--index, 0) * 0.1s));
  opacity: 0;
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
