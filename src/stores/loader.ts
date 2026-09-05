import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// TODO : quid du changement d'images en cas de resize de la page ou quoi ?

export const useLoaderStore = defineStore('loader', () => {
  const imagesToLoad = ref(0)
  const loadedImages = ref(0)

  const implementsImage = (): void => {
    imagesToLoad.value++
    console.log('image implemented')
  }

  const loadedImage = (): void => {
    loadedImages.value++
    console.log('image loaded')
  }

  const hasLoaded = computed((): boolean => {
    return loadedImages.value === imagesToLoad.value
  })

  const progress = computed((): number => {
    return (loadedImages.value / imagesToLoad.value) * 100
  })

  return { implementsImage, loadedImage, hasLoaded, progress }
})
