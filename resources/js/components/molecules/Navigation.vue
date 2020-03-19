<template>
  <div class="navigation-container">
    <div class="navigation">
      <icon @click="toggleNavigation" class="menu-icon" :icon="'menu'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {

    }
  },
  methods: {
    toggleNavigation() {

    },
  },
}
</script>

<style lang="scss" scoped>
$height: 56px;

.navigation {
  top: 0px;
  left: 0px;
  width: 100vw;
  padding: 7px;
  display: flex;
  height: $height;
  position: fixed;
  align-items: center;
  box-sizing: border-box;
  background-color: $navigation-background-color;

  &-container {
    height: $height;
  }

  .menu-icon {
    font-size: 26px;
  }
}
</style>
