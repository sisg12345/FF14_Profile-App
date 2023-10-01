<template>
  <!-- カルーセル -->
  <Carousel
    :id="'main_visual_carousel'"
    :images="[
      '/src/assets/images/topView/FF14_tori-cafe-1_1920x600.jpg',
      '/src/assets/images/topView/FF14_tori-cafe-2_1920x600.jpg',
      '/src/assets/images/topView/FF14_tori-cafe-3_1920x600.jpg',
    ]"
  />
</template>
<script>
export default {
  name: 'MainVisual',
}
</script>