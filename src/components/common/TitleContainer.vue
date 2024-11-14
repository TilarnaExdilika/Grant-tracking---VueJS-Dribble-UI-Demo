<template>
  <div class="title-container">
    <div class="title-row">
      <div class="title-left">
        <i v-if="iconTitle" :class="iconTitle" class="title-icon"></i>
        <span v-if="title" class="title-text">{{ title }}</span>
        <span v-if="symbol" class="title-symbol">/ {{ symbol }}</span>
      </div>
      <BorderButton v-if="iconButton" :active="true" :size="0.86">
        <i :class="iconButton"></i>
      </BorderButton>
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
  iconButton: {
    type: String,
    required: false
  },
  describe: {
    type: String,
    required: false
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
</style>
