import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'animate.css';
const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vuetify)
app.mount('#app') 