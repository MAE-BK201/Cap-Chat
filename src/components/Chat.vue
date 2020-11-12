<template>
  <div id="Chat">
    <div id="container">
      <Appbar />
      <EmojiPanel
        class="EmojiPanel"
        v-show="isEmojiTrayShowing"
        :msgCallback="changeMsg"
      ></EmojiPanel>

      <div id="chat_log">
        <div
          class="msg-container"
          v-for="item in this.$store.getters.getChatHistory"
          :key="item.id"
        >
          <UserMsg
            :userId="item.userId"
            :username="item.username"
            :msgs="item.msgs"
            :time="item.time"
          ></UserMsg>
        </div>
      </div>

      <div id="send">
        <div>
          <fa-icon
            id="emoji"
            title="Emoji"
            @click="toggleEmojiDrawer"
            :icon="['fas', 'smile']"
          ></fa-icon>
          <input
            type="text"
            multiple
            @keypress.shift.enter.exact="hey"
            v-model="msg"
            @keypress.enter.exact="send"
            placeholder="Send a message"
          />
          <fa-icon id="plus" title="Add" :icon="['fa', 'plus']"></fa-icon>
          <fa-icon
            id="saveChat"
            title="Save chat"
            :icon="['fa', 'file-download']"
          ></fa-icon>
          <fa-icon
            id="sendbtn"
            title="Send"
            :icon="['fas', 'paper-plane']"
            @click="send"
          >
          </fa-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserMsg from "./UserMsg";
import EmojiPanel from "./EmojiPanel";
import Appbar from "./Appbar";

import "../icons";
import _ from "lodash";
import { deflateSync } from "zlib";

export default {
  data: () => ({
    msg: "",
    listening: undefined,
    isEmojiTrayShowing: false,
  }),

  components: {
    UserMsg,
    EmojiPanel,
    Appbar,
  },

  methods: {
    async send() {
      const msg = this.encodeMsg();
      await axios.get(
        this.$store.getters.getHostURL +
          "chat/" +
          this.$store.getters.getDeviceID +
          "/" +
          msg +
          "/" +
          new Date().toLocaleString().split(",")[1]
      );
      this.msg = "";
    },

    encodeMsg() {
      var msg = deflateSync(this.msg).toString("base64");
      return msg;
    },

    changeMsg(emoji) {
      this.msg += emoji;
    },

    toggleEmojiDrawer() {
      this.isEmojiTrayShowing = !this.isEmojiTrayShowing;
    },

    listenForMsgs() {
      // try {
      this.listening = setInterval(async () => {
        console.log("listening for msgs");
        console.log(this.$store.getters.getConnectionStatus);
        if (this.$store.getters.getConnectionStatus) {
          const { data } = await axios.get(
            this.$store.getters.getHostURL + "chat"
          );
          if (!_.isEqual(data, this.$store.getters.getChatHistory)) {
            this.$store.commit("updateChatHistory", data);
          }
        }
      }, 2000);
      // } catch (error) {
      //   error;
      // }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.listenForMsgs();
    });
  },

  beforeDestroy() {
    clearInterval(this.listening);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-scrollbar-track {
  background: rgb(73, 73, 73);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(37, 37, 37);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 37, 37);
}

#Chat {
  height: calc(100% - 70px);
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;
}

#container {
  position: relative;
}

#container .EmojiPanel {
  position: fixed;
  width: 220px;
  bottom: 65px;
  z-index: 1;
}

#send {
  display: flex;
  justify-content: center;
  width: 100vw;
  position: fixed;
  padding: 15px 0px;
  padding-top: 0px;
  height: fit-content;
  bottom: 0px;
}

#send svg:hover {
  /* color:rgb(255, 255, 255); */
  font-size: 20px;
}

#send div {
  position: relative;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#emoji {
  color: rgb(133, 133, 133);
  position: absolute;
  font-size: 23px;
  left: 10px;
  transition: 0.3s ease-in;
}

#emoji:hover {
  color: rgb(255, 255, 22);
}

#send input {
  width: 100%;
  letter-spacing: 2px;
  padding-right: 105px;
  height: 50px;
  font-size: 15px;
  color: rgb(207, 207, 207);
  padding-left: 50px;
  border-radius: 10px;
  outline: none;
  border: none;
  background: rgb(59, 59, 59);
}

#sendbtn {
  color: rgb(133, 133, 133);
  position: absolute;
  font-size: 18px;
  left: calc(100% - 33px);
  transform: rotate(55deg);
  transition: 0.3s ease-in;
}

#sendbtn:hover {
  color: rgb(164, 255, 122);
}

#saveChat {
  color: rgb(133, 133, 133);
  position: absolute;
  font-size: 18px;
  left: calc(100% - 64px);
  transition: 0.3s ease-in;
}

#saveChat:hover {
  color: rgb(94, 94, 245);
}

#plus {
  color: rgb(133, 133, 133);
  position: absolute;
  font-size: 18px;
  left: calc(100% - 95px);
  transition: 0.3s ease-in;
}

#plus:hover {
  color: white;
}
</style>