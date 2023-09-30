<template>
  <button type="button" class="btn btn-outline-secondary">{{ text }}</button>
</template>
<script>
export default {
  name: 'ButtonCancel',
  props: {
    text: {
      type: String,
    }
  }
}
</script>