<template>
  <div id="Appbar">
    <div id="searchbar">
      <fa-icon class="search" :icon="['fas', 'search']"></fa-icon>
      <input type="text" v-model="search" placeholder="Server Address" />
      <button :disabled="disabled" @click="connect()">
        <fa-icon
          class="connect"
          :title="title"
          :icon="['fab', 'connectdevelop']"
          ref="connect"
        ></fa-icon>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    search: "http://localhost:5000/",
    disabled: false,
    title: "",
  }),

  methods: {
    async connect() {
      // Try connecting to distributed server
      try {
        const res = await axios.get(this.search + "connect/" + "IPhone");
        this.$store.commit("updateUsers", res.data.users);

        res.data.users.forEach((user) => {
          if (user.device_name == "You") {
            this.$store.commit("setDeviceID", user.device_id);
            this.$store.commit("setAsHost", user.host);
          }
        });

        this.$store.commit("setConnectionStatus", true);
      } catch (err) {
        console.log(err);
        this.$store.commit("setConnectionStatus", false);
      }
    },
  },

  computed: {
    getDeviceInfo: function () {
      return this.$store.getters.getDeviceInfo;
    },

    getConnectionStatus() {
      return this.$store.getters.getConnectionStatus;
    },
  },

  watch: {
    search(val) {
      this.$store.commit("updateHostURL", val); // updating the hosting url

      if (val.length > 8) {
        this.$refs.connect.classList.add("active");
        this.disabled = false;
        this.title = "Connect to server";
      } else {
        this.$refs.connect.classList.remove("active");
        this.disabled = true;
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
#Appbar {
  width: 100vw;
  height: 55px;
  background: rgb(59, 59, 59);
  margin-bottom: 5px;
}

#searchbar {
  margin-left: 50px;
  width: 85%;
  height: calc(100% - 6px);
  padding: 3px;
  position: relative;
  display: flex;
  align-items: center;
}

/* svg search icon */
#searchbar .search {
  position: absolute;
  top: 50%;
  color: white;
  font-size: 20px;
  left: 15px;
  transform: translateY(-50%);
}

#searchbar input {
  height: inherit;
  width: calc(100% - 30px);
  color: white;
  border: 1px solid #161B1F;
  background: #161B1F;
  font-family: "Risque";
  font-size: 20px;
  border-radius: 5px;
  outline: none;
  text-indent: 50px;
}

#searchbar button {
  background: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
}

#searchbar .connect {
  color: white;
  font-size: 25px;
  margin: auto;
  opacity: 0;
  transition: 0.4s ease-in;
}

#searchbar .connect.active {
  opacity: 1;
}

#searchbar .connect:hover {
  font-size: 28px;
  color: #84FFA6;
}
</style>