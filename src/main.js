import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import en from './locales/en.json'
import sv from './locales/sv.json'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars, faForward, faCaretDown, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faForward, faCaretDown, faPhone, faEnvelope)
const savedLang = localStorage.getItem('lang') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: { en, sv },
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(i18n)

app.mount('#app')
