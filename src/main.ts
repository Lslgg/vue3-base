import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import { i18n } from './plugins/i18n'
import store from './store'
import BlankLayout from './layouts/blankLayout.vue'
import DefaultLayout from './layouts/defaultLayout.vue'
import 'ant-design-vue/dist/antd.less'
import './less/app.less'
import './index.css'
const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(router)
app.mount('#app')
app.component('LayoutBlank', BlankLayout)
app.component('LayoutDefault', DefaultLayout)
