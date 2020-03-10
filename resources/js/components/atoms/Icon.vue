<template>
  <i v-if="icon !== ''" class="material-icons">
    <slot v-if="icon === ''"></slot>
    <template v-else>{{ icon }}</template>
  </i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
