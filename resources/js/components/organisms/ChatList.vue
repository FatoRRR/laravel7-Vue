<template>
  <div class="chat-list">
    <!-- {{ chatChannels }} -->
    <v-input
      :type="'search'"
      :icon="'search'"
      :placeholder="'Search Contacts'"
    />
    <chat-channels/>
  </div>
</template>

<script>
import ChatChannels from 'MOLECULE/ChatChannel'

export default {
  name: 'ChatList',
  components: {
    ChatChannels
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    onlineUsers() {
      return this.$store.state.onlineUsers;
    },
  },
  methods: {
    // startWhispering() {
    //   window.Echo.private(`Channel-${this.channel.id}`).whisper('typing', {
    //     user: this.user,
    //     channel: this.channel.id,
    //   });
    // },
  },
}
</script>

<style lang="scss" scoped>
.chat-list {
  .input {
    width: 100%;
  }
}
</style>
