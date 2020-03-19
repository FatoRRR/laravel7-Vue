<template>
  <div class="home-container">
    <!-- <navigation/> -->
    <Chat/>
    <!-- {{ user }} -->
  </div>
</template>

<script>
import Navigation from 'MOLECULE/Navigation'
import Chat from 'TEMPLATE/ChatOverview'

export default {
  name: 'Home',
  components: {
    Chat,
    Navigation,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    Echo.join('online')
    .here((users) => {
      console.warn('USERS', users);
      users.forEach(user => {
        this.$store.dispatch('ADD_ONLINE_USERS', user);
      });
    })
    .joining((user) => {
      console.warn('JOINING', user);
      this.$store.dispatch('ADD_ONLINE_USERS', user);
    })
    .leaving((user) => {
      console.warn('LEAVING USER', user);
      this.$store.dispatch('REMOVE_ONLINE_USERS', user);
    })
  },
}
</script>

<style lang="scss" scoped>
.home {

  &-container {
    height: 100%;
    padding: 14px;
    box-sizing: border-box;
  }
}
</style>
