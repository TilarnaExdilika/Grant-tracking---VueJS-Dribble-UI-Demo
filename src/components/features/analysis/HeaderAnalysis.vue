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
          <span v-for="q in ['Q1', 'Q2', 'Q3', 'Q4']" :key="q" class="quarter" :class="{ active: quarter === q }"
            @click="selectQuarter(q)">
            {{ q }}
          </span>
        </div>
      </div>

      <span class="divider hide-mobile">/</span>

      <div class="program-toggle">
        <span>Infeasible programs</span>
        <ToggleSwitch v-model="showInfeasible" />
      </div>
      <div class="avatar-stack">
        <div v-for="member in teamMembers.slice(0, visibleMembers)" :key="member.id" class="avatar-wrapper"
          :title="member.name">
          <img :src="member.avatar" :alt="member.name" class="avatar">
        </div>
        <div v-if="remainingMembers > 0" class="avatar-wrapper remaining">
          <span>+{{ remainingMembers }}</span>
        </div>
      </div>
      <BorderButton :active="true" :size="0.8">
        <i class="fas fa-plus"></i>
      </BorderButton>
    </div>
  </div>
</template>

<script>
import ToggleSwitch from '@/components/common/ToggleSwitch.vue'
import BorderButton from '@/components/common/BorderButton.vue'
import { assets } from '@/config/assets'
import users from '@/data/users.json'

export default {
  name: 'HeaderAnalysis',
  components: {
    ToggleSwitch,
    BorderButton
  },
  data() {
    return {
      quarter: 'Q3',
      showInfeasible: false,
      assets,
      teamMembers: users.teamMembers,
      visibleMembers: 3
    }
  },
  computed: {
    remainingMembers() {
      return Math.max(0, this.teamMembers.length - this.visibleMembers)
    }
  },
  methods: {
    selectQuarter(q) {
      this.quarter = q;
      this.$emit('quarter-changed', q);
    }
  }
}
</script>

<style scoped>
.header-analysis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--unactive_text);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: flex-end;
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
  position: relative;
  transition: color 0.3s ease;
}

.quarter::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--button_gradient);
  transition: width 0.3s ease;
  border-radius: 2px;
}

.quarter:hover {
  color: var(--active_text);
}

.quarter.active {
  color: var(--active_text);
}

.quarter.active::after {
  width: 80%;
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
    justify-content: flex-end;
  }
}

.avatar-stack {
  display: flex;
  align-items: center;
}

.avatar-wrapper {
  margin-left: -8px;
  border: 2px solid var(--border);
  border-radius: 8px;
  transition: transform 0.3s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}

.avatar-wrapper::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background: var(--border);
  color: var(--active_text);
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 8px;
}

.avatar-wrapper:hover::after {
  opacity: 1;
  visibility: visible;
}

.avatar-wrapper::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--border);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  margin-bottom: 4px;
}

.avatar-wrapper:hover::before {
  opacity: 1;
  visibility: visible;
}

.avatar-wrapper:first-child {
  margin-left: 0;
}

.avatar-wrapper:hover {
  transform: translateY(-4px);
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 32px;
  height: 32px;
  object-fit: cover;
  display: block;
}

.remaining {
  width: 32px;
  height: 32px;
  background: var(--button_gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--active_text);
}

@media screen and (max-width: 768px) {
  .avatar-stack {
    margin-left: 12px;
  }

  .avatar-wrapper {
    margin-left: -6px;
  }

  .avatar,
  .remaining {
    width: 28px;
    height: 28px;
  }

  .remaining {
    font-size: 11px;
  }
}
</style>
