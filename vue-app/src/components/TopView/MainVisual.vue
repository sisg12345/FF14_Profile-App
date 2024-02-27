<template>
  <!-- カルーセル -->
  <Carousel
    :id="'main_visual_carousel'"
    :images="images"
  />
</template>
<script>
import { reactive } from 'vue'
// NOTICE: ビルド対象に加えるためにインポートする
import img1 from '@/assets/images/topView/FF14_tori-cafe-11_1920x600.jpg'
import img2 from '@/assets/images/topView/FF14_tori-cafe-9_1920x600.jpg'
import img3 from '@/assets/images/topView/FF14_tori-cafe-10_1920x600.jpg'

export default {
  name: 'MainVisual',
  setup() {
    // 画像一覧
    const images = reactive([
      img1,
      img2,
      img3,
    ])

    return {
      images,
    }
  },
}
</script>