import '@styles/main.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import { getImg } from './utils/assets'

const app = createApp(App)

app.use(createPinia())

app.config.globalProperties.$getImg = getImg

app.mount('#app')
