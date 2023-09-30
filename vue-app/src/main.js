import { createApp } from 'vue'
// import './style.css' // TODO: デフォルトスタイル定義無効無効, 削除するか検討する必要がある
import App from './App.vue'
import router from './router'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// jQuery
import jQuery from 'jquery'

// 共通コンポーネント
import Button from './components/common/Button.vue'
import ButtonCancel from './components/common/ButtonCancel.vue'
import Carousel from './components/common/Carousel.vue'
import Modal from './components/common/Modal.vue'

// jQuery
window.$ = window.jQuery = jQuery

createApp(App)
.component("Button", Button)
.component("ButtonCancel", ButtonCancel)
.component("Carousel", Carousel)
.component('Modal', Modal)
.use(router)
.mount('#app')
