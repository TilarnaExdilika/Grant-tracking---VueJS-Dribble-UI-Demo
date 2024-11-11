<template>
  <div class="left-header">
    <div class="logo-section">
      <img :src="assets.images.logo" alt="Logo" class="logo">
      <div class="brand-text">
        <span class="brand-main">Lumify</span>
        <span class="brand-separator">/</span>
        <span class="brand-sub">Nexus</span>
      </div>
    </div>
    <button class="creator-button">
      Creator
    </button>
  </div>
</template>

<script setup lang="ts">
import { assets } from '@/config/assets'
</script>

<style scoped>
.left-header {
  padding: 20px 0;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 50px;
  height: 50px;
  animation: fadeInLeft 0.5s ease forwards;
}

.brand-text {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1.2rem;
}

.brand-main {
  color: var(--active_text);
  font-weight: bold;
  animation: fadeInLeft 0.5s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.brand-separator,
.brand-sub {
  color: var(--unactive_text);
  font-weight: normal;
  animation: fadeInLeft 0.5s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
}

.creator-button {
  background-color: var(--button_color);
  color: var(--active_text);
  border: none;
  padding: 6px 15px;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeInLeft 0.5s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
}

.creator-button:hover {
  opacity: 0.9;
}

@keyframes fadeInLeft {
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
