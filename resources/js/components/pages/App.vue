<template>
  <div>
    <login v-if="!userIsSignedIn"/>
    <router-view v-else id="app-container"></router-view>
  </div>
</template>

<script>
import Login from 'ORGANISM/Login'

export default {
  name: 'App',
  components: {
    Login
  },
  computed: {
    userIsSignedIn() {
      return false;
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Spartan:300,400,500,700&display=swap');

html, body, #app {
  font-family: $font-family, sans-serif;
}
</style>
