<template>
  <!-- カルーセル外枠 -->
  <div
    :id="id"
    class="carousel slide"
    data-ride="carousel"
  >
    <!-- インジゲーター -->
    <ol class="carousel-indicators">
      <template 
        v-for="index in images.length" :key="index"
      >
        <li
          :data-target="`#${id}`"
          :data-slide-to="index"
          :class="(index-1) === 0 ? 'active' : ''"
        />
      </template>
    </ol>
    <!-- / インジゲーター -->
    <!-- カルーセル内枠 -->
    <div class="carousel-inner">
      <template
        v-for="(image, index) in images" :key="index"
      >
        <div
          class="carousel-item"
          :class="index === 0 ? 'active' : ''"
        >
          <img :src="image" alt="" class="img-fluid w-100">  
        </div>
      </template>
    </div>
    <!-- / カルーセル内枠 -->
    <!-- コントローラー -->
    <a class="carousel-control-prev" :href="`#${id}`" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">前に戻る</span>
    </a>
    <a class="carousel-control-next" :href="`#${id}`" role="button" data-slide="next">
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
  props: {
    id: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  }
}
</script>