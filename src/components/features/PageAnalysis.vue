<template>
  <div>
    <transition name="slide-fade">
      <HeaderAnalysis v-if="isVisible" />
    </transition>
    <transition name="slide-fade">
      <PledgedCard v-if="isVisible" />
    </transition>
  </div>
</template>

<script>
import HeaderAnalysis from './analysis/HeaderAnalysis.vue'
import PledgedCard from './analysis/PledgedCard.vue'

export default {
  name: 'PageAnalysis',
  components: {
    HeaderAnalysis,
    PledgedCard
  },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 100)
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
