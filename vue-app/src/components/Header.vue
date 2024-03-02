<template>
  <!-- ヘッダー -->
  <header id="header" class="sticky-top">
    <!-- ナビゲーションバー -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- ロゴ -->
        <router-link
          class="navbar-brand"
          to="/"
          @click="toPageTop"
        >
          TORI CAFE
        </router-link>
        <!-- ドロップダウン -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- ナビゲーションメニュー -->
        <div
           id="navbarCollapse"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link
                class="nav-link" 
                to="/"
                @click="toPageTop"
              >
                TOP
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!-- / ナビゲーションメニュー -->
    </nav>
    <!-- / ナビゲーションバー -->
  </header>
  <!-- / ヘッダー -->
</template>
<script>
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup() {
    // vue-routerを使用するための初期化
    const route = useRoute()
    const router = useRouter()
    
    /** 画面トップに遷移 */
    const toPageTop = () => {
      // 遷移先と遷移先が同じ場合はページ先頭に戻る
      if (route.path === router.referrer.path) {
        window.location.href = '#'
      }
    }

    return {
      toPageTop,
    }
  },
}
</script>