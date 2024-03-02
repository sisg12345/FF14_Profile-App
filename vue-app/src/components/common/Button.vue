<template>
  <button
    type="button"
    class="btn btn-outline-primary"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
    }
  }
}
</script>