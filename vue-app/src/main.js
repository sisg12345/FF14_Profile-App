import { createApp } from 'vue'
// import './style.css' // TODO: デフォルトスタイル定義無効無効, 削除するか検討する必要がある
import App from './App.vue'
import router from './router'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 共通コンポーネント
import ButtonNormal from './components/common/ButtonNormal.vue'

createApp(App)
.component("ButtonNormal", ButtonNormal)
.use(router)
.mount('#app')
