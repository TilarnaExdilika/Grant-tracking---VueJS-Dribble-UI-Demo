<template>
  <div>
    <HeaderAnalysis />
  </div>
</template>

<script>
import HeaderAnalysis from './analysis/HeaderAnalysis.vue'

export default {
  name: 'PageAnalysis',
  components: {
    HeaderAnalysis
  }
}
</script>

<style scoped>
div {
  background-color: var(--background);
}
</style>
