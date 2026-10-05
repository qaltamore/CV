import { createRouter, createWebHistory } from 'vue-router'
import { useNavStore } from '@/stores/nav.ts'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { pageName: 'Accueil' }
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('@/views/CVView.vue'), // lazy load (only if visited)
      meta: { pageName: 'CV' }
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('@/views/ExperiencesView.vue'), // lazy load (only if visited)
      meta: { pageName: 'Expériences' }
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  const navStore = useNavStore()
  navStore.pageName = to.meta.pageName as string
})

export default router
