<template>
  <div class="bg-light">
    <section id="about">
      <div class="container">
        <!-- 上段 -->
        <div class="row mb-4">
          <div class="col-md-8 mb-3">
            <h3 class="my-3">お店について</h3>
            <p>🔥店主: 基本とり頭</p>
            <p>🔥営業日: 気まぐれ不定期営業</p>
            <p>🔥ルール: 基本なしなんでもOK  ダンス 演奏 可</p>
            <p>🔥店長コメント: <strong>お金ください！！！💰</strong></p>
          </div>
          <div class="col-md-4">
            <img src="/src/assets/images/topView/FF14_tori-cafe-8_300x300.jpg" alt="" class="img-fluid w-100">
          </div>
        </div>
        <!-- / 上段 -->
        <!-- 下段 -->
        <div class="row">
          <div class="col-md-6">
            <!-- カード1 -->
            <div class="card mb-3">
              <img src="/src/assets/images/topView/FF14_tori-cafe-4_800x450.jpg" alt="" class="img-fluid">
              <div class="card-body d-flex justify-content-between">
                <strong class="col-8 col-md-7 card-title">1号店</strong>
                <Button
                  class="col-4 col-md-5 m-1 h-100"
                  :text="'詳しく見る'"
                  @click="refModal1.showModal()"
                />
              </div>
            </div>
            <!-- / カード1 -->
          </div>
          <div class="col-md-6">
            <!-- カード2 -->
            <div class="card mb-3">
              <img src="/src/assets/images/topView/FF14_tori-cafe-6_800x450.jpg" alt="" class="img-fluid">
              <div class="card-body d-flex justify-content-between">
                  <strong class="col-8 col-md-7 card-title">2号店</strong>
                <Button
                  class="col-4 col-md-5 m-1 h-100"
                  :text="'詳しく見る'"
                  @click="refModal2.showModal()"
                />
              </div>
            </div>
            <!-- / カード2 -->
          </div>
        </div>
        <!-- / 下段 -->
      </div>
    </section>
  </div>
  <!-- モーダル1 -->
  <Modal
    ref="refModal1"
    :id="'refModal1'"
  >
    <!-- モダールヘッダー -->
    <template #header>
      1号店
    </template>
    <!-- / モダールヘッダー -->
    <!-- モダールボディー -->
    <template #body>
      <p class="text-center">
        <img src="/src/assets/images/topView/FF14_tori-cafe-5_800x450.jpg" alt="" class="img-fluid">
      </p>
      <p>🔥特徴: ガールズバー風</p>
      <p>🔥場所: Yojimbo鯖 ミスト拡張街17区トップスマスト17号室</p>
    </template> 
    <!-- / モダールボディー -->
  </Modal>
  <!-- モーダル2 -->
  <Modal
    ref="refModal2"
    :id="'refModal2'"
    :title="'2号店'"
  >
    <!-- モダールヘッダー -->
    <template #header>
      2号店
    </template>
    <!-- / モダールヘッダー -->
    <!-- モダールボディー -->
    <template #body>
      <p class="text-center">
        <img src="/src/assets/images/topView/FF14_tori-cafe-7_800x450.jpg" alt="" class="img-fluid">
      </p>
      <p>🔥特徴: 演奏、ダンスのステージ完備</p>
      <p>🔥場所: Yojimbo鯖 ゴブレットビュート28区28番地</p>
    </template> 
    <!-- / モダールボディー -->
  </Modal>
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  name: 'MainContents',
  setup() {
    // モーダル1のref参照
    const refModal1 = ref(null)
    // モーダル2のref参照
    const refModal2 = ref(null)
    
    return {
      refModal1,
      refModal2,
    }
  }
}
</script>