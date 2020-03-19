export default {
  SET_USER(state, user = undefined) {
    state.user = user;
  },
  SET_TOKEN(state, token = '') {
    localStorage.setItem('token', token);
    state.token = token;
  },
  SET_ONLINE_USERS(state, users) {
    state.onlineUsers = users;
  },
  SET_CHAT_CHANNELS(state, channels) {
    state.chats = [];
    state.chats = {};
    channels.forEach(channel => {
      state.chats[channel.id] = channel;
    });
  },
  SET_ACTIVE_CHAT(state, chat) {
    state.activeChat = chat;
  },
}
