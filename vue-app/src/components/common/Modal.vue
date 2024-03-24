<template>
  <!-- モーダル -->
  <div
    :id="id"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-lg modal-dialog-centered"
      role="document"
    >
      <div class="modal-content">
        <!-- モーダルヘッダー -->
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="header" />
            </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- / モーダルヘッダー -->
        <!-- モーダルボディー -->
        <div class="modal-body">
          <slot name="body" />
        </div>
        <!-- / モーダルボディー -->
        <!-- モーダルフッター -->
          <div class="modal-footer">
            <slot name="footer">
              <ButtonCancel
                data-dismiss="modal"
                :text="'閉じる'"
              />
            </slot>
          </div>
        <!-- / モーダルフッター -->
      </div>
    </div>
  </div>
  <!-- / モーダル -->
</template>
<script>
export default {
  name: 'Modal',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    /** モーダルを表示 */
    const showModal = () => {
      $(`#${props.id}`).modal('show')
    }
    /**　モーダルを非表示　*/
    const hideModal =() => {
      $(`#${props.id}`).modal('hide')
    }

    return {
      showModal,
      hideModal,
    }
  }
}
</script>