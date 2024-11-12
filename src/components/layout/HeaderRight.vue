<template>
  <div class="right-header">
    <button class="create-grant-btn">
      <i class="fas fa-folder-plus"></i>
      <span>Create grant</span>
    </button>

    <button class="icon-btn">
      <i class="fas fa-comments"></i>
      <span class="notification-dot"></span>
    </button>

    <button class="avatar-btn">
      <img :src="assets.images.avatar" alt="Avatar" class="avatar-img">
    </button>
  </div>
</template>

<script setup lang="ts">
import { assets } from '@/config/assets'
</script>

<style scoped>
.right-header {
  border-radius: 12px;
  padding: 4px;
  background-color: var(--backgroundSecondary);
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.create-grant-btn {
  position: relative;
  width: auto;
  height: 38px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background: var(--gradient_grey_border);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

.create-grant-btn::before {
  content: '';
  position: absolute;
  top: 1.8px;
  left: 1.8px;
  right: 1.8px;
  bottom: 1.8px;
  background: var(--gradient_grey_color);
  border-radius: 6px;
}

.create-grant-btn i {
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
  color: var(--active_text);
}

.create-grant-btn span {
  position: relative;
  z-index: 1;
  color: var(--active_text);
  font-size: 14px;
}

.icon-btn {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: none;
  background: var(--border_gradient);
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.icon-btn::before {
  content: '';
  position: absolute;
  top: 1.8px;
  left: 1.8px;
  right: 1.8px;
  bottom: 1.8px;
  background: var(--button_gradient);
  border-radius: 6px;
}

.icon-btn i {
  font-size: 1.2rem;
  position: relative;
  z-index: 1;
  color: var(--unactive_text);
  transition: color 0.3s ease;
}

.icon-btn:hover i {
  color: var(--active_text);
}

.notification-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--cyan);
  border: 2px solid var(--backgroundMain);
  z-index: 1;
}

.avatar-btn {
  width: 38px;
  height: 38px;
  padding: 0;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
