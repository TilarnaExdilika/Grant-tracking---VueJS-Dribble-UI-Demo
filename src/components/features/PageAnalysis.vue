<template>
  <div class="page-analysis">
    <transition name="slide-fade">
      <HeaderAnalysis v-if="isVisible" />
    </transition>
    <div class="div" style="height: 30px"></div>
    <transition name="slide-fade">
      <div class="cards-container" v-if="isVisible">
        <CardPledged />
        <CardGrant />
        <CardCommit />
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="cards-container" v-if="isVisible">
        <CardEvaluate size="1.54" />
        <CardRedistribution size="1.54" />
      </div>
    </transition>
    <div class="div" style="height: 200px"></div>
  </div>
</template>

<script>
import HeaderAnalysis from './analysis/HeaderAnalysis.vue'
import CardPledged from './analysis/CardPledged.vue'
import CardGrant from './analysis/CardGrant.vue'
import CardCommit from './analysis/CardCommit.vue'
import CardEvaluate from './analysis/CardEvaluate.vue'
import CardRedistribution from './analysis/CardRedistribution.vue'
export default {
  name: 'PageAnalysis',
  components: {
    HeaderAnalysis,
    CardPledged,
    CardGrant,
    CardCommit,
    CardEvaluate,
    CardRedistribution
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

.page-analysis {
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.page-analysis::-webkit-scrollbar {
  display: none;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding-bottom: 40px;
}
</style>
