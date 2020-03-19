export default {
  LOGOUT({ commit }) {
    axios.post('/api/auth/logout')
    .then(response => {
      commit('SET_USER');
      commit('SET_TOKEN');
    });
  },
  GET_CHAT_CHANNELS({ commit, dispatch }) {
    axios.get('/api/user/chat/channels')
    .then(response => {
      response.data.forEach(chat => {
        Echo.channel(`private-Channel-${chat.id}`)
        .listen('NewMessage', ({ channel, message }) => {
          console.warn('NEW MESSAGE PAYLOAD', channel, message);
          dispatch('UPDATE_MESSAGE_IN', { channel, message });
        });
      });
      commit('SET_CHAT_CHANNELS', response.data);
    });
  },
  ADD_ONLINE_USERS({ state, commit }, user) {
    let currentOnlineUsers = state.onlineUsers;
    if (!currentOnlineUsers.includes(user)) {
      currentOnlineUsers.push(user);
    }

    commit('SET_ONLINE_USERS', currentOnlineUsers);
  },
  REMOVE_ONLINE_USERS({ state, commit }, user) {
    let currentOnlineUsers = state.onlineUsers;

    currentOnlineUsers = currentOnlineUsers.filter(onlineUser => onlineUser.id !== user.id);

    commit('SET_ONLINE_USERS', currentOnlineUsers);
  },
  STORE_MESSAGE({ dispatch }, { channel, message }) {
    axios.post('/api/user/chat/store/message', {
      channel,
      message,
    })
    .then(response => {
      dispatch('UPDATE_MESSAGE_IN', {
        channel,
        message: response.data
      });
    });
  },
  UPDATE_MESSAGE_IN({ state }, { channel, message }) {
    state.chats[channel.id].messages.push(message);
  },
}
