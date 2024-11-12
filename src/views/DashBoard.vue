<template>
  <div class="dashboard">
    <HeaderBar />
    <BaseContent>
      <component :is="currentPage" />
    </BaseContent>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/layout/HeaderBar.vue'
import BaseContent from '@/components/layout/BaseContent.vue'
import PageOverview from '@/components/features/PageOverview.vue'
import PageAnalysis from '@/components/features/analysis/PageAnalysis.vue'
import PageAffiliates from '@/components/features/PageAffiliates.vue'
import PageClient from '@/components/features/PageClient.vue'
import PageAIStrategy from '@/components/features/PageAIStrategy.vue'
import { useNavigationStore } from '@/stores/navigation'
import { computed } from 'vue'

const navigation = useNavigationStore()

const currentPage = computed(() => {
  switch (navigation.currentTab) {
    case 'overview':
      return PageOverview
    case 'analysis':
      return PageAnalysis
    case 'affiliates':
      return PageAffiliates
    case 'clients':
      return PageClient
    case 'ai-strategy':
      return PageAIStrategy
    default:
      return PageOverview
  }
})
</script>

<style scoped>
.dashboard {
  height: 100vh;
  padding: 2px 10px 0 10px;
  background-color: var(--backgroundMain);
  display: flex;
  flex-direction: column;
}
</style>
