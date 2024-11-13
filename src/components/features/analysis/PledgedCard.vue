<template>
  <BorderContainer :size="1">
    <div class="pledged-content">
      <h3>Pledged Card</h3>
    </div>
  </BorderContainer>
</template>

<script setup lang="ts">
import BorderContainer from '@/components/common/BorderContainer.vue'
</script>

<style scoped>
.pledged-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

h3 {
  margin: 0;
}
</style>
