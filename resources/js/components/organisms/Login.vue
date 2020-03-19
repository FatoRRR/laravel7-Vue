<template>
  <div class="login">
    <modal>
      <div slot="header">Sign In</div>
      <div @keypress.enter="login" class="content" slot="content">
        <v-input
          :placeholder="'Your E-Mail'"
          @change="errors.email = ''; errors.error = ''"
          :error="errors.email"
          v-model="email"
          :type="'email'"
          :icon="'mail'"
          autofocus
          outlined
        />
        <v-input
          :placeholder="'Your Password'"
          @change="errors.password = ''; errors.error = ''"
          :error="errors.password"
          v-model="password"
          :type="'password'"
          :icon="'vpn_key'"
          outlined
        />
      </div>
      <div class="actions" slot="actions">
        <btn @click="login">Login</btn>
        <btn @click="$store.state.registrationActive = true" inlined>Or Register Here</btn>
        <span class="error">{{ errors.error }}</span>
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
      keepUserSignedIn: false,
      errors: {
        error: '',
        email: '',
        password: '',
      },
      password: '',
      email: '',
    };
  },
  methods: {
    login() {
      if (Object.values(this.errors).every(error => error === '')) {
        axios.post('/api/auth/login', {
            email: this.email,
            password: this.password,
        })
        .then(response => {
            Echo.connector.options.auth.headers.Authorization = response.headers.authorization;
            if (this.keepUserSignedIn) {
              localStorage.setItem('token', response.headers.authorization);
              axios.defaults.headers.common['Authorization'] = response.headers.authorization;
            }

            this.$store.commit('SET_USER', response.data.user);
            this.$store.state.token = response.data.user.token;
        })
        .catch(error => {
          if (error.response.data.errors) {
            const errors = error.response.data.errors;
            if (errors.email) {
              this.errors.email = errors.email[0];
            }
            if (errors.password) {
              this.errors.password = errors.password[0];
            }
          } else if (error.response.data.error) {
            this.errors.error = 'Please check your credentials';
          }
        });
      }
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
.error {
  margin-top: 9px;
  font-size: .5em;
  display: flex;
  color: red;
  height: 12px;
}
</style>
