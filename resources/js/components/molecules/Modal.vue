<template>
  <div
    class="modal-container"
    @click="$emit('close')"
  >
    <div class="modal">
      <div class="modal-header">
        <slot name="header"/>
      </div>
      <div class="modal-content">
        <slot name="content"/>
      </div>
      <div class="modal-actions">
        <slot name="actions"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
}
</script>

<style lang="scss" scoped>
.modal {
  flex-grow: 0;
  display: flex;
  flex-shrink: 0;
  max-width: 98%;
  cursor: default;
  font-size: 24px;
  min-width: 280px;
  min-height: 280px;
  overflow-y: auto;
  padding: 8px 24px;
  border-radius: 4px;
  pointer-events: auto;
  flex-direction: column;
  box-sizing: border-box;
  background-color: $modal-background-color;
  box-shadow: 7px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0,0,0,.12);

  &-container {
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100%;
    display: flex;
    cursor: pointer;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.55);
  }

  &-header {
    padding-top: 22px;
    padding-bottom: 9px;
    letter-spacing: 1.2px;

    &.border {
      padding-bottom: 8px;
      border-bottom: 1px solid red;
    }
  }

  &-content {
    font-size: .75em;
    font-weight: 200;
    padding-top: 7px;
    padding-bottom: 22px;
    letter-spacing: 1.5px;
    color: rgba($color: $primary-font-color, $alpha: .7);
  }

  &-actions {}
}
</style>
