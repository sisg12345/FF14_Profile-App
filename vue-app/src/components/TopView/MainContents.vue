<template>
  <div class=" bg-light">
    <section id="about">
      <div class="container">
        <!-- 上段 -->
        <div class="row mb-4">
          <div class="col-md-8 mb-3">
            <h3 class="my-3">お店について</h3>
            <p>✨店主: 基本とり</p>
            <p>✨営業日: 気まぐれ不定期営業</p>
            <p>✨ルール: 基本なしなんでもOK  ダンス 演奏 可</p>
            <p>✨店長コメント: <strong>お金ください！！！💰</strong>></p>
          </div>
          <div class="col-md-4">
            <img src="https://placehold.jp/500x500.png" alt="" class="img-fluid">
          </div>
        </div>
        <!-- / 上段 -->
        <!-- 下段 -->
        <div class="row">
          <div class="col-md-6">
            <!-- カード -->
            <div class="card mb-3">
              <img src="https://placehold.jp/700x300.png" alt="" class="img-fluid">
              <div class="card-body d-flex justify-content-between">
                <strong class="col-9 card-title">1号店: Yojimbo鯖 ミスト拡張街17区トップスマスト17号室</strong>
                <ButtonNormal
                  class="col-3 m-1"
                  :text="'詳しく見る'"
                />
              </div>
            </div>
            <!-- / カード -->
          </div>
          <div class="col-md-6">
            <!-- カード -->
            <div class="card mb-3">
              <img src="https://placehold.jp/700x300.png" alt="" class="img-fluid">
              <div class="card-body d-flex justify-content-between">
                <strong class="col-9 card-title">2号店: Yojimbo鯖 ゴブレットビュート28区28番地</strong>
                <ButtonNormal
                  class="col-3 m-1"
                  :text="'詳しく見る'"
                />
              </div>
            </div>
            <!-- / カード -->
          </div>
        </div>
        <!-- / 下段 -->
      </div>
    </section>
  </div> 
</template>
<script>
export default {
  name: 'MainContents'
}
</script>