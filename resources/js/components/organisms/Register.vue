<template>
  <div class="register">
    <modal>
      <div slot="header">Registration</div>
      <div class="content" slot="content">
        <v-input
          :placeholder="'Your Username'"
          @change="errors.username = ''"
          :error="errors.username"
          :icon="'account_box'"
          v-model="username"
          :limit="255"
          outlined
        />
        <v-input
          :placeholder="'Your E-Mail'"
          @change="errors.email = ''"
          :error="errors.email"
          v-model="email"
          :type="'email'"
          :icon="'mail'"
          outlined
        />
        <v-input
          :placeholder="'Your Password'"
          @change="errors.password = ''"
          :error="errors.password"
          v-model="password"
          :type="'password'"
          :icon="'vpn_key'"
          outlined
        />
      </div>
      <div slot="actions">
        <btn inlined @click="$store.state.registrationActive = false">Cancel</btn>
        <btn :disabled="username  === '' || email === '' || password === ''" @click="register">Register</btn>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      errors: {
        email: '',
        username: '',
        password: '',
      },
      password: '',
      username: '',
      email: '',
    };
  },
  methods: {
    register() {
      if (Object.values(this.errors).every(error => error === '')) {
        axios.post('/api/auth/register', {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then(response => this.$store.state.registrationActive = true)
        .catch(error => {
          const errors = error.response.data.errors;
          if (errors.email) {
            this.errors.email = errors.email[0];
          }
          if (errors.password) {
            this.errors.password = errors.password[0];
          }
          if (errors.username) {
            this.errors.username = errors.username[0];
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
