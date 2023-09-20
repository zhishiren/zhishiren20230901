import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

app.use(ElementPlus)
app.mount('#app')

// // 以下代码是原始配置，以上是加入elementplus
// import { createApp } from 'vue';  
// import App from './App.vue'
// const app = createApp(App);  
// app.mount('#app');
// createApp(App).mount('#app')
