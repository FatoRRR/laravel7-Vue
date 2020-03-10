<template>
  <div
    class="button"
    :class="[inlined ? 'inlined' : outlined ? 'outlined' : '']"
    @click="$emit('click')"
  >
    <icon class="icon" :icon="icon"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: {
      type: String,
      default: '',
    },
    inlined: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
  line-height: 36px;
  cursor: pointer;
  min-width: 64px;
  font-size: .875rem;
  position: relative;
  border-radius: 4px;
  align-items: center;
  letter-spacing: .9px;
  display: inline-flex;
  padding: 0 16px 0 16px;
  box-sizing: border-box;
  justify-content: center;
  text-transform: uppercase;
  color: $primary-font-color;
  background-color: $button-primary-color;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12);
  transition: all .22s ease;

  &:hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12);
    background-color: rgba($color: $button-primary-color, $alpha: .87);
  }

  &.inlined {
    box-shadow: unset;
    background-color: transparent;
    transition: background-color .22s ease;

    &:hover {
      background-color: rgba($color: $button-primary-color, $alpha: .27);
    }
  }

  &.outlined {
    box-shadow: unset;
    background-color: transparent;
    border: 1px solid $button-primary-color;
    transition: background-color .22s ease;

    &:hover {
      background-color: rgba($color: $button-primary-color, $alpha: .12);
    }
  }

  .icon {
    margin-right: 8px;
  }
}
</style>
