<template>
  <main role="main">
    <!-- ニュース -->
    <div class="py-2">
      <News />
    </div>
    <!-- カルーセル -->
    <div class="py-1">
      <MainVisual />
    </div>
    <!-- メインコンテンツ -->
    <div class="py-2">
      <MainContents />
    </div>
  </main>
</template>
<script>
import MainContents from '../components/TopView/MainContents.vue'
import MainVisual from '../components/TopView/MainVisual.vue'
import News from '../components/TopView/News.vue'

export default {
  name: 'Top',
  components: {
    MainContents,
    MainVisual,
    News,
  },
}
</script>