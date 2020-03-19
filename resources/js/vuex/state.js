export default {
  token: localStorage.getItem('token') || '',
  registrationActive: false,
  user: undefined,
  onlineUsers: [],
  activeChat: {},
  chats: {},
}
