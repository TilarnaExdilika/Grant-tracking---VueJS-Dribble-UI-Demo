import { defineStore } from 'pinia'
import { ref } from 'vue'

export type NavigationTab = 'overview' | 'analysis' | 'affiliates' | 'clients' | 'ai-strategy'

export const useNavigationStore = defineStore('navigation', () => {
  const currentTab = ref<NavigationTab>('overview')

  function setCurrentTab(tab: NavigationTab) {
    currentTab.value = tab
  }

  return {
    currentTab,
    setCurrentTab,
  }
})
