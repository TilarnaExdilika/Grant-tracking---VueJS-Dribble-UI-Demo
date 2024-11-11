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
    <div class="toggle-buttons">
      <button class="toggle-button">
        <i class="icon-woman"></i>
      </button>
      <button class="toggle-button">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
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

.toggle-buttons {
  display: flex;
  flex-direction: column;
  gap: 0px;
  animation: fadeInLeft 0.5s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
  transform: scale(0.8);
}

.toggle-button {
  background: transparent;
  border: none;
  color: var(--unactive_text);
  cursor: pointer;
  padding: 1px;
  font-size: 0.6rem;
  transition: color 0.3s ease;
}

.toggle-button:hover {
  color: var(--active_text);
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
