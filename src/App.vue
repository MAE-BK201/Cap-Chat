<template>
  <div id="app">
    <Chat />
  </div>
</template>

<script>
import Chat from "./components/Chat";

export default {
  name: "App",
  components: {
    Chat,
  },
};
</script>

<style>
* {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #262626;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
