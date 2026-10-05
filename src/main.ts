import '@styles/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'

// UTILS
import { getImg } from './utils/assets'
import env from './utils/detectEnv'

// PLUGINS
import { i18n } from './trads'

// COMPONENTS
import AppImage from '@/components/AppImage.vue'

// CREATE APP
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.config.globalProperties.$getImg = getImg
app.config.globalProperties.$env = env

app.component('AppImage', AppImage)

app.mount('#app')
