<template>
  <section id="news">
    <div class="container news-area-height overflow-auto">
      <div class="row">
        <div class="col-md-2">
          <h3>News</h3>
        </div>
        <div class="col-md-10">
          <dl
            class="row"
            v-for="(info, index) in information"
            :key="index"
          >
            <dt class="col-3">{{ info.date }}</dt>
            <dt class="col-9">{{ info.content }}</dt>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'News',
  setup() {
    const information = [
      {date: '2023/09/29', content: '初リリース' },
    ]

    return {
      information,
    }
  },
}
</script>
<style scoped>
.news-area-height {
  max-height: 105px;
}
</style>>