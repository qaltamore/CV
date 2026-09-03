import { reactive } from 'vue'

type EnvType = 'mob' | 'tab' | 'desk'

export type Env = {
  isMob: boolean
  isTab: boolean
  isDesk: boolean
  type: EnvType
}

const env: Env = reactive({
  isMob: false,
  isTab: false,
  isDesk: false,
  type: 'desk' as EnvType
})

// Update env detection
const updateEnv = (): void => {
  env.isMob = mobileQuery.matches
  env.isDesk = desktopQuery.matches
  env.isTab = !env.isMob && !env.isDesk

  env.type = env.isMob ? 'mob' : env.isTab ? 'tab' : 'desk'
}

// is Mobile matching ?
const mobileQuery: MediaQueryList = window.matchMedia('(max-width: 768px)')
const desktopQuery: MediaQueryList = window.matchMedia('(min-width: 1024px)')

// Init
updateEnv()

// Watcher
mobileQuery.addEventListener('change', updateEnv)
desktopQuery.addEventListener('change', updateEnv)

export default env
