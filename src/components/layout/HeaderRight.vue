<template>
  <div class="right-header">
    <button class="create-grant-btn">
      <i class="fas fa-cloud-upload-alt"></i>
      Create grant
    </button>

    <button class="icon-btn">
      <i class="fas fa-bell"></i>
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
  padding: 3px;
  background-color: var(--backgroundSecondary);
  display: flex;
  align-items: center;
  gap: 15px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.create-grant-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: var(--button_gradient);
  color: var(--active_text);
  cursor: pointer;
  transition: all 0.3s ease;
}

.create-grant-btn:hover {
  opacity: 0.9;
}

.create-grant-btn i {
  font-size: 1.2rem;
}

.icon-btn {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: none;
  padding: 1.8px;
  background: var(--border_gradient);
  cursor: pointer;
  transition: all 0.3s ease;
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
  color: var(--active_text);
}

.notification-dot {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
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
}

.avatar-btn:hover {
  border-color: var(--active_text);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
