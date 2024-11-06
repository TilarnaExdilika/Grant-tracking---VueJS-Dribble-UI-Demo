import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isLoading = ref(false)
  const isDarkMode = ref(false)

  function setLoading(value: boolean) {
    isLoading.value = value
  }

  function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isLoading,
    isDarkMode,
    setLoading,
    toggleDarkMode,
  }
})
