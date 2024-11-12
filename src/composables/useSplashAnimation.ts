import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useSplashAnimation() {
  const currentStep = ref<'title' | 'content'>('title')
  const router = useRouter()

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const startAnimation = async () => {
    currentStep.value = 'title'
    await sleep(2500)

    currentStep.value = 'content'
    await sleep(3000)

    await sleep(500)

    router.replace('/dashboard')
  }

  return {
    currentStep,
    startAnimation,
  }
}
