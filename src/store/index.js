import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    device_info: [
      { device_name: "Unknown" },
      { gpu_manufacturer: "Unknown" },
      { driver_version: "Unknown" },
      { ip_address: "Unknown" },
      { plaform: "Unknown" },
    ],
    device_id: "0000",
    users: [],
    isHost: false,
    hosting_url: "",
    connection_status: false,
    chat_history: [],
    // chat_history: [
    //   {
    //     msgs: [
    //       "Hey I am aundre and I like",
    //       "deez nutz",
    //       "sdlkf",
    //       "sdlkfsa",
    //       "How about you?",
    //       "How about you?s",
    //     ],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Bk-201",
    //   },
    //   {
    //     msgs: [
    //       "Hey wassup, how have you been?",
    //       "sdlkf",
    //       "sdlkfsa",
    //       "How about you?",
    //       "How about you?s",
    //     ],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Ari♥",
    //   },
    //   {
    //     msgs: [
    //       "Hey wassup, how have you been?",
    //       "sdlkf",
    //       "sdlkfsa",
    //       "How about you?",
    //       "How about you?s",
    //     ],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Ari♥",
    //   },
    //   {
    //     msgs: ["Hmm"],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Sireen♥",
    //   },
    //   {
    //     msgs: ["Choke me like you hate me"],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "CORPSE",
    //   },
    //   {
    //     msgs: [
    //       "Hey I am aundre and I like",
    //       "deez nutz",
    //       "sdlkf",
    //       "sdlkfsa",
    //       "How about you?",
    //       "How about you?s",
    //     ],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Bk-201",
    //   },
    //   {
    //     msgs: [
    //       "Hey wassup, how have you been?",
    //       "sdlkf",
    //       "sdlkfsa",
    //       "How about you?",
    //       "How about you?s",
    //     ],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Ari♥",
    //   },
    //   {
    //     msgs: [
    //       "Hey wassup, how have you been?",
    //       "sdlkf",
    //       "sdlkfsa",
    //       "How about you?",
    //       "How about you?s",
    //     ],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Ari♥",
    //   },
    //   {
    //     msgs: ["Hmm"],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "Sireen♥",
    //   },
    //   {
    //     msgs: ["Choke me like you hate me"],
    //     time: new Date().toLocaleString().split(",")[1],
    //     username: "CORPSE",
    //   },
    // ],
  },

  getters: {
    getDeviceInfo: (state) => {
      return state.device_info;
    },

    getRAM: (state) => {
      return state.ram;
    },

    getUsers: (state) => {
      return state.users;
    },

    getHostURL: (state) => {
      return state.hosting_url;
    },

    getDeviceID: (state) => {
      return state.device_id;
    },

    getConnectionStatus: (state) => {
      return state.connection_status;
    },

    isHost: (state) => {
      return state.isHost;
    },

    getCrackedPswd: (state) => {
      return state.cracked_password;
    },

    getChatHistory: (state) => {
      return state.chat_history;
    },
  },

  mutations: {
    initDeviceInfo: (state, device_info) => {
      state.device_info = device_info;
    },

    updateRAM: (state, updatedRAM) => {
      state.ram = updatedRAM;
    },

    updateUsers: (state, user) => {
      state.users = user;
    },

    updateHostURL: (state, host_url) => {
      state.hosting_url = host_url;
    },

    setDeviceID: (state, device_id) => {
      state.device_id = device_id;
    },

    setConnectionStatus: (state, status) => {
      state.connection_status = status;
    },

    setAsHost: (state, isHost) => {
      state.isHost = isHost;
    },

    updateCrackedPswd: (state, pswd) => {
      state.cracked_password = pswd;
    },

    updateChatHistory: (state, chat) => {
      state.chat_history = chat;
    },
  },
});
