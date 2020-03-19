<template>
  <div class="chat-overview">
    <chat-list class="chat-list"/>
    <chat class="chat"/>
  </div>
</template>

<script>
import Chat from 'ORGANISM/Chat'
import ChatList from 'ORGANISM/ChatList'

export default {
  name: 'ChatOverview',
  components: {
    Chat,
    ChatList,
  }
}
</script>

<style lang="scss" scoped>
.chat-overview {
  display: flex;
  height: 100%;
  flex: 4;

  .chat {
    flex: 3;
  }

  .chat-list {
    flex: 1;
  }
}
</style>
