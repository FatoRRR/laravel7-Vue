<template>
  <div class="login">
    <modal>
      <div slot="header">Sign In</div>
      <div class="content" slot="content">
        <v-input
          :placeholder="'Your E-Mail'"
          @change="emailError = ''"
          :error="emailError"
          v-model="email"
          :type="'email'"
          :icon="'mail'"
          outlined
        />
        <v-input
          :placeholder="'Your Password'"
          @change="passwordError = ''"
          :error="passwordError"
          v-model="password"
          :type="'password'"
          :icon="'vpn_key'"
          outlined
        />
      </div>
      <div slot="actions">
        <span class="error">{{ error }}</span>
        <btn @click="login">Login</btn>
        <btn inlined>Or Register Here</btn>
        <div class="checkbox">
          <input id="keep-logged-in" type="checkbox" v-model="keepUserSignedIn">
          <label for="keep-logged-in">Keep Me Logged In</label>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      displayContent: false,
      keepUserSignedIn: false,
      error: '',
      emailError: '',
      passwordError: '',
      password: '',
      email: '',
    };
  },
  methods: {
      login() {
          axios.post('/api/auth/login', {
              email: this.email,
              password: this.password,
          })
          .then(response => {
              if (this.keepUserSignedIn) {
                localStorage.setItem('token', response.headers.authorization);
                axios.defaults.headers.common['Authorization'] = response.headers.authorization;
              }
              console.warn('RESPONSE', response.data);

              // this.$store.commit('UPDATE_USER', response.data.user);
          })
          .catch(error => {
            if (error.response.data.errors) {
              const errors = error.response.data.errors;
              if (errors.email) {
                this.emailError = errors.email[0];
              }
              if (errors.password) {
                this.passwordError = errors.password[0];
              }
            } else if (error.response.data.error) {
              this.error = 'Please check your credentials';
            }
          });
      },
      toggleStayLoggedIn() {
          this.keepUserSignedIn = !this.keepUserSignedIn;
      },
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.checkbox label {
  font-size: .5em;
}
</style>
