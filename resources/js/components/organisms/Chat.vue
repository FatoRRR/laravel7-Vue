<template>
  <div class="chat-container">
    <div v-if="Object.keys(activeChat).length" class="chat-content">
      <div class="messages">
        <div
          class="message"
          :class="{'own': message.from.user.id === user.id}"
          v-for="(message, index) in activeChat.messages" :key="index"
        >
          {{message.message}}
          <div>

          </div>
        </div>
      </div>
      <v-input
        outlined
        v-model="message"
        :placeholder="'Send Message'"
        @enter="sendMessage"
      />
    </div>
    <div class="no-chat" v-else>
      Chat auswählen
    </div>

  </div>
</template>

<script>
export default {
  name: 'Chat',
  watch: {
    message() {
      if (this.message !== '') {
      Echo.private(`private-Channel-${this.activeChat.id}`)
      .whisper('typing', {
        user: this.user,
        channel: this.activeChat.id,
      });
      }
    },
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    activeChat() {
      return this.$store.state.activeChat;
    },
  },
  methods: {
    sendMessage() {
      if (this.message !== '') {
        this.$store.dispatch('STORE_MESSAGE', {
          channel: this.activeChat,
          message: this.message,
        });
        this.message = '';
      }
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.chat {

  &-container {
    display: flex;
    align-items: center;
    justify-content: center;

    .no-chat {
      font-size: 3em;
      letter-spacing: 6px;
      text-transform: uppercase;
    }
  }

  &-content {
    height: 100%;
    display: flex;
    font-size: 16px;
    padding-left: 20px;
    flex-direction: column;
    justify-content: space-between;
  }

  .messages {
    flex-direction: column;
    overflow: scroll;
    display: flex;

    .message {
      padding: 7px;
      font-size: .88em;
      width: fit-content;
      border-radius: 4px;
      margin-bottom: 18px;
      background-color: rgba(0, 0, 0, .13);

      &.own {
        margin-left: auto;
      }
    }
  }

  .input {
    width: 100%;
    margin-bottom: 0px;
  }
}
</style>


