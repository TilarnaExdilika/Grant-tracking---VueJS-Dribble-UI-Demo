<template>
  <div class="header-analysis">
    <div class="left-section">
      <h1>Financial analysis</h1>
    </div>

    <div class="right-section">
      <div class="responsive-group">
        <div class="year-selector">
          <span>2024</span>
          <div class="mini-toggle-buttons">
            <button class="mini-toggle-button">
              <i class="fa-solid fa-chevron-up"></i>
            </button>
            <button class="mini-toggle-button">
              <i class="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>

        <span class="divider">/</span>

        <div class="quarter-selector">
          <span class="quarter" :class="{ active: quarter === 'Q1' }">Q1</span>
          <span class="quarter" :class="{ active: quarter === 'Q2' }">Q2</span>
          <span class="quarter" :class="{ active: quarter === 'Q3' }">Q3</span>
          <span class="quarter" :class="{ active: quarter === 'Q4' }">Q4</span>
        </div>
      </div>

      <span class="divider hide-mobile">/</span>

      <div class="program-toggle">
        <span>Infeasible programs</span>
        <ToggleSwitch v-model="showInfeasible" />
      </div>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '@/components/common/ToggleSwitch.vue'

export default {
  name: 'HeaderAnalysis',
  components: {
    ToggleSwitch
  },
  data() {
    return {
      quarter: 'Q3',
      showInfeasible: false
    }
  }
}
</script>

<style scoped>
.header-analysis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: var(--unactive_text);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.responsive-group {
  display: flex;
  align-items: center;
  gap: 24px;
}

.year-selector {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: var(--unactive_text);
}

.quarter-selector {
  display: flex;
  gap: 8px;
}

.quarter {
  cursor: pointer;
  color: var(--unactive_text);
  padding: 4px 8px;
}

.quarter.active {
  color: var(--active_text);
}

.program-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--unactive_text);
}

h1 {
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  color: var(--active_text);
}

.divider {
  color: var(--unactive_text);
}

.mini-toggle-buttons {
  display: flex;
  flex-direction: column;
  gap: -1px;
  transform: scale(0.65);
  margin-top: -1px;
  position: relative;
  top: 1px;
}

.mini-toggle-button {
  background: transparent;
  border: none;
  color: var(--unactive_text);
  cursor: pointer;
  padding: 0px;
  font-size: 0.7rem;
  transition: color 0.3s ease;
  line-height: 1.2;
}

.mini-toggle-button:hover {
  color: var(--active_text);
}

@media screen and (max-width: 768px) {
  .right-section {
    gap: 12px;
  }

  .responsive-group {
    gap: 12px;
  }

  .hide-mobile {
    display: none;
  }

  .quarter {
    padding: 2px 4px;
  }
}

@media screen and (max-width: 480px) {
  .header-analysis {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .right-section {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
