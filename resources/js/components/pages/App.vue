<template>
  <div>
    <template v-if="!userIsSignedIn">
      <login v-if="!registrationActive"/>
      <register v-else/>
    </template>
    <router-view v-else id="app-container"></router-view>
  </div>
</template>

<script>
import Login from 'ORGANISM/Login'
import Register from 'ORGANISM/Register'

export default {
  name: 'App',
  components: {
    Login,
    Register,
  },
  computed: {
    userIsSignedIn() {
      return this.$store.state.token !== '';
    },
    registrationActive() {
      return this.$store.state.registrationActive;
    },
  },
  created() {
    if (this.$store.state.token !== '') {
      axios.defaults.headers.common['Authorization'] = 'bearer ' + this.$store.state.token;
      axios.get('/api/auth/user', this.$store.state.token)
      .then(response => this.$store.commit('SET_USER', response.data.user))
      .catch(error => this.$store.commit('SET_TOKEN'));
    }
  },
  mounted() {
    Echo.join('online')
    .here((users) => {
      console.warn('USERS', users);
    })
    .joining((user) => {
      console.warn('JOINING USER', user);
    })
    .leaving((user) => {
      console.warn('LEAVING USER', user);
    })
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Spartan:300,400,500,700&display=swap');

html, body, #app {
  font-family: $font-family, sans-serif;
}
</style>
