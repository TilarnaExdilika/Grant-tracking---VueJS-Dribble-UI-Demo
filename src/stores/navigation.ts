import { defineStore } from 'pinia'
import { ref } from 'vue'

export type NavigationTab = 'overview' | 'analysis' | 'affiliates' | 'clients' | 'ai-strategy'

export const useNavigationStore = defineStore('navigation', () => {
  const savedTab = localStorage.getItem('currentTab') as NavigationTab
  const currentTab = ref<NavigationTab>(savedTab || 'analysis')

  function setCurrentTab(tab: NavigationTab) {
    currentTab.value = tab
    localStorage.setItem('currentTab', tab)
  }

  return {
    currentTab,
    setCurrentTab,
  }
})
