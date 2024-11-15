<template>
  <div class="title-container">
    <div class="title-row">
      <div class="title-left">
        <i v-if="iconTitle" :class="iconTitle" class="title-icon"></i>
        <span v-if="title" class="title-text">{{ title }}</span>
        <span v-if="symbol" class="title-symbol">/ {{ symbol }}</span>
      </div>
      <div class="title-right">
        <BorderButton v-if="iconButton3" :active="button3Active" :size="0.86">
          <i :class="iconButton3"></i>
        </BorderButton>
        <BorderButton v-if="iconButton2" :active="button2Active" :size="0.86">
          <i :class="iconButton2"></i>
        </BorderButton>
        <BorderButton v-if="iconButton1" :active="button1Active" :size="0.86">
          <i :class="iconButton1"></i>
        </BorderButton>
      </div>
    </div>
    <div v-if="describe" class="describe-row">
      {{ describe }}
    </div>
  </div>
</template>

<script setup lang="ts">
import BorderButton from './BorderButton.vue'

defineProps({
  iconTitle: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  symbol: {
    type: String,
    required: false
  },
  iconButton1: {
    type: String,
    required: false
  },
  iconButton2: {
    type: String,
    required: false
  },
  iconButton3: {
    type: String,
    required: false
  },
  describe: {
    type: String,
    required: false
  },
  button1Active: {
    type: Boolean,
    default: true
  },
  button2Active: {
    type: Boolean,
    default: false
  },
  button3Active: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.title-container {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding-left: 12px;
  padding-bottom: 12px;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  color: var(--unactive_text);
  font-size: 1.2rem;
}

.title-text {
  color: var(--active_text);
  font-size: 1.1rem;
}

.title-symbol {
  color: var(--unactive_text);
  font-size: 1.1rem;
}

.describe-row {
  color: var(--unactive_text);
  font-size: 1rem;
}

.title-right {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
