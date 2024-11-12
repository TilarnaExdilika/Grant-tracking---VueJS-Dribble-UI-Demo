import { ref } from 'vue'

export type NavigationTab = 'overview' | 'analysis' | 'affiliates' | 'clients' | 'ai-strategy'

export function useNavigation() {
  const currentTab = ref<NavigationTab>('overview')

  const setCurrentTab = (tab: NavigationTab) => {
    currentTab.value = tab
  }

  return {
    currentTab,
    setCurrentTab,
  }
}
