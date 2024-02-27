<template>
  <Header />
    <div class="main-content">
      <router-view />
    </div>
  <Footer />
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  },
}
</script>
<style>
.main-content {
  min-height: calc(100vh - 100px);
}
</style>
