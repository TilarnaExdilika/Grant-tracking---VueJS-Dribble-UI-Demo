import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useSplashAnimation() {
  const currentStep = ref<'title' | 'content'>('title')
  const router = useRouter()

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const startAnimation = async () => {
    // Hiện title
    currentStep.value = 'title'
    await sleep(2500)

    // Chuyển sang content
    currentStep.value = 'content'
    await sleep(3000)

    // Đợi animation fade out hoàn tất
    await sleep(500)

    // Chuyển trang
    router.replace('/dashboard')
  }

  return {
    currentStep,
    startAnimation,
  }
}
