<template>
  <!-- ヘッダー -->
  <header class="sticky-top">
    <!-- ナビゲーションバー -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- ロゴ -->
        <a class="navbar-brand" href="#">TORI CAFE</a>
        <!-- ドロップダウン -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- TODO: 今後実装予定 -->
        <!-- ナビゲーションメニュー -->
        <!-- <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">TOP<span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div> -->
      </div>
      <!-- / ナビゲーションメニュー -->
    </nav>
    <!-- / ナビゲーションバー -->
  </header>
  <!-- / ヘッダー -->
</template>
<script>
export default {
  name: 'Header',
}
</script>