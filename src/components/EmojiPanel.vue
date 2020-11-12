<template>
  <div id="emoji-panel">
    <button
      class="emoji"
      v-for="emoji in emojis.slice(300, 1007)"
      @click="addEmoji(emoji)"
      :key="emoji"
    >
      {{ emoji }}
    </button>
  </div>
</template>

<script>
const emojis = require("emojis-list");

export default {
  props: ["msgCallback"],

  methods: {
    addEmoji(emoji) {
      this.msgCallback(emoji);
    },
  },

  computed: {
    emojis() {
      return emojis;
    },
  },

  mounted() {
    setTimeout(() => {
      this.$el.classList.add("active");
    }, 2000);
  },

  beforeDestroy() {
    this.$el.classList.remove("active");
  },
};
</script>

<style scoped>
#emoji-panel {
  display: flex;
  height: 0px;
  flex-flow: row wrap;
  overflow-y: scroll;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s ease-in;
  border: 1px solid white;
  border-bottom: none;
  background: #262626;
}

#emoji-panel.active {
  height: 200px;
}

.emoji {
  overflow-x: hidden;
  min-height: 30px;
  background: transparent;
  font-size: 20px;
  width: 30px;
  outline: none;
  border: none;
  margin: 2px;
}

.emoji:hover {
  background: grey;
}
</style>