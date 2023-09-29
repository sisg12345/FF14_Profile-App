<template>
  <!-- カルーセル外枠 -->
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <!-- インジゲーター -->
    <ol class="carousel-indicators">
      <li data-target="#carousel" data-slide-to="0" class="active"></li>
      <li data-target="#carousel" data-slide-to="1"></li>
      <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
    <!-- / インジゲーター -->
    <!-- カルーセル内枠 -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <!-- <img class="d-block w-100" src="https://placehold.jp/30/dd6699/ffffff/300x150.png?text=placeholder+image"> -->
        <img src="https://placehold.jp/1750x500.png" alt="" class="img-fluid">
      </div>
      <div class="carousel-item">
        <img src="https://placehold.jp/1750x500.png" alt="" class="img-fluid">
      </div>
      <div class="carousel-item">
        <img src="https://placehold.jp/1750x500.png" alt="" class="img-fluid">
      </div>
    </div>
    <!-- / カルーセル内枠 -->
    <!-- コントローラー -->
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">前に戻る</span>
    </a>
    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">次に送る</span>
    </a>
    <!-- / コントローラー -->
  </div>
  <!-- / カルーセル -->
</template>
<script>
export default {
  name: 'Carousel',
}
</script>