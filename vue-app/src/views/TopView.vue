<template>
  <main>
    <!-- ニュース -->
    <div class="py-2">
      <NewsSection />
    </div>
    <!-- カルーセル -->
    <div class="py-1">
      <Carousel />
    </div>
    <!-- メインコンテンツ -->
    <div class="py-2">
      <MainContents />
    </div>
  </main>
</template>
<script>
import Carousel from '../components/TopView/Carousel.vue'
import MainContents from '../components/TopView/MainContents.vue'
import NewsSection from '../components/TopView/NewsSection.vue'

export default {
  name: 'Top',
  components: {
    Carousel,
    MainContents,
    NewsSection,
  },
}
</script>