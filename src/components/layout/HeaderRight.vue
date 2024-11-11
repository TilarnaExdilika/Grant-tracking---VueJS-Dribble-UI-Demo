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
  border: 1.8px solid var(--border);
  background: var(--button_gradient);
  color: var(--active_text);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

}

.icon-btn:hover {
  border-color: var(--active_text);
  opacity: 0.9;

}

.icon-btn i {
  font-size: 1.2rem;
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
