<template>
  <!-- カルーセル -->
  <Carousel
    :id="'main_visual_carousel'"
    :images="[
      'https://picsum.photos/1920/450',
      'https://picsum.photos/1920/450',
      'https://picsum.photos/1920/450',
    ]"
  />
</template>
<script>
export default {
  name: 'MainVisual',
}
</script>