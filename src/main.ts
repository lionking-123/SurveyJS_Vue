import { createApp } from 'vue'
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import App from './App.vue'
import router from './router'
import { surveyCreatorPlugin } from "survey-creator-vue";
import { surveyPlugin } from 'survey-vue3-ui';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
  })
  
const app = createApp(App)
app.use(surveyPlugin)
app.use(surveyCreatorPlugin).use(router);
app.use(vuetify);
app.mount('#app')
