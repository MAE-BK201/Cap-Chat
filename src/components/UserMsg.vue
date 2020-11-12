<template>
  <div id="msg-container">
    <div id="avatar"></div>
    <div class="container">
      <div class="row">
        <span class="username"> {{ username }} </span>
        <span class="time-sent">{{ time }}</span>
      </div>

      <div class="msgs-container">
        <span class="msgs" v-for="msg in msgs" :key="msg">
          {{ msg }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["userId", "msgs", "time", "username"],
};
</script>

<style scoped>
#msg-container {
  color: white;
  padding: 7px;
  display: flex;
  align-items: flex-start;
  height: fit-content;
  margin-bottom: 5px;
}

#msg-container:hover {
  background: #424242;
}

#avatar {
  border-radius: 50%;
  width: 53px;
  height: 53px;
  background: url("../assets/doggo.jpg") no-repeat white;
  background-size: contain;
  margin-right: 16px;
}

.container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.username {
  color: crimson;
  margin-right: 20px;
}

.row {
  position: absolute;
  top: 0px;
}

.msgs {
  display: block;
  /* background: white; */
  text-align: left;
}

.msgs-container {
  padding: 10px;
  padding-left: 0px;
  position: relative;
  top: 10px;
}

.time-sent {
  color: grey;
  font-size: 14px;
}
</style>