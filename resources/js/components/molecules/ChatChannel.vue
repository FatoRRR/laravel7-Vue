<template>
  <div class="chat-channels">
    <div
      @click="setActive(channel, index)"
      class="chat-channel"
      :class="{'active': index === activeChannel}"
      v-for="(channel, index) in chats" :key="index"
    >
      <div class="chat-channel-name">{{ channel.name }}</div>
      <div class="chat-channel-last-message">{{ channel.messages[0].message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatChannel',
  computed: {
    chats() {
      return this.$store.state.chats;
    },
  },
  data() {
    return {
      activeChannel: null,
      channels: [],
    }
  },
  methods: {
    setActive(chat, index) {
      this.activeChannel = index;
      this.$store.commit('SET_ACTIVE_CHAT', chat);
    }
  },
  created() {
    this.$store.dispatch('GET_CHAT_CHANNELS');
  },
}
</script>

<style lang="scss" scoped>
.chat {

  &-channel {
    height: 56px;
    padding: 14px;
    display: flex;
    font-size: 16px;
    cursor: pointer;
    overflow: scroll;
    margin-bottom: 4px;
    box-sizing: border-box;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;


    &.active,
    &:hover {
      background-color: rgba(0, 0, 0, 0.014);
    }

    &-name {
      font-size: 1em;
    }
    &-last-message {
      height: 14px;
      overflow: hidden;
      font-size: 0.7em;
      word-break: break-all;
      word-wrap: break-word;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}
</style>
