import '@styles/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// UTILS
import { getImg } from './utils/assets'
import env from './utils/detectEnv'

// COMPONENTS
import AppImage from '@/components/AppImage.vue'

const app = createApp(App)

app.use(createPinia())

app.config.globalProperties.$getImg = getImg
app.config.globalProperties.$env = env

app.component('AppImage', AppImage)

app.mount('#app')
