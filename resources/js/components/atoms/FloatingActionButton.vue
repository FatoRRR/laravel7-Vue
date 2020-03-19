<template>
  <div @click="$emit('click')" class="fab">
    <icon :icon="icon"/>
  </div>
</template>

<script>
export default {
  name: 'FAB',
  props: {
    icon: {
      type: String,
      default: 'add',
    },
  },
}
</script>

<style lang="scss" scoped>
$size: 40px;

@media only screen and (min-width: 1200px) {
  $size: 56px;

  .fab {
    width: $size;
    height: $size;
  }
}

.fab {
  right: 0px;
  bottom: 0px;
  margin: 14px;
  width: $size;
  height: $size;
  display: flex;
  cursor: pointer;
  position: fixed;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: $primary-background-color;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0,0,0,.12);
}
</style>
