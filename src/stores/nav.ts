import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', () => {
  const pageName = ref('Accueil')
  const activeMenu = ref(false)

  const toggleMenu = () => {
    activeMenu.value = !activeMenu.value
  }

  return { pageName, activeMenu, toggleMenu }
})
