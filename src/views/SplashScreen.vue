<template>
  <div class="splash-screen">
    <div class="content-wrapper">
      <transition name="fade">
        <div v-if="currentStep === 'title'" class="title">
          {{ splashConfig.title }}
        </div>
      </transition>
      <transition name="fade">
        <div v-if="currentStep === 'content'" class="content">
          <img :src="splashConfig.logoPath" :height="splashConfig.logoHeight" class="logo">
          <div class="credit-section">
            <div class="credit-content">
              <div class="social-links">
                <a v-for="link in splashConfig.socialLinks" :key="link.text" :href="link.url" class="social-link">
                  <i :class="'fas fa-' + link.icon"></i>
                  <span>{{ link.text }}</span>
                </a>
              </div>
              <div class="credit-info">
                <div class="credit-text">
                  <span>{{ splashConfig.uiCredit }}</span>
                  <span class="credit-name">{{ splashConfig.uiCreditName }}</span>
                </div>
                <img :src="splashConfig.uiCreditImagePath" class="credit-image" alt="Credit">
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { SplashConfig } from '@/config/splashConfig'
import { useSplashAnimation } from '@/composables/useSplashAnimation'

const { currentStep, startAnimation } = useSplashAnimation()
const splashConfig = SplashConfig

onMounted(() => {
  startAnimation()
})
</script>

<style scoped>
.splash-screen {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--backgroundMain);
}

.content-wrapper {
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title,
.content {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  color: var(--active_text);
  font-size: 2.5rem;
  font-weight: 300;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.logo {
  max-width: 200px;
  height: auto;
}

.credit-section {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.credit-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.social-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.credit-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--active_text);
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--unactive_text);
}

.social-link i {
  font-size: 1.6rem;
  width: 30px;
}

.credit-text {
  color: var(--active_text);
  font-size: 1.2rem;
}

.credit-name {
  font-weight: bold;
  margin-left: 0.5rem;
}

.credit-image {
  max-width: 300px;
  height: auto;
  border-radius: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -30%);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translate(-50%, -50%);
}
</style>
