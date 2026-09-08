import '@styles/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// UTILS
import { getImg } from './utils/assets'
import env from './utils/detectEnv'

// COMPONENTS
import AppImage from '@/components/AppImage.vue'

// EARLY EXEC
// Restore scroll at start (update when Vue Router)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

// CREATE APP
const app = createApp(App)

app.use(createPinia())

app.config.globalProperties.$getImg = getImg
app.config.globalProperties.$env = env

app.component('AppImage', AppImage)

app.mount('#app')
