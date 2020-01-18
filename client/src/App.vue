<template>
  <div id="app">
    <nav class="navbar navbar-light bg-light">
      <router-link class="navbar-brand" :to="{name:'home'}" href="#">Navbar</router-link>
      <div class="dropdown">
        {{activeProfile.name}}
        <button
          class="btn btn-light"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" v-if="user.hasOwnProperty('email')" @click="logout">Log Out</a>
          <a class="dropdown-item" v-else @click="login">Log In</a>
          <a class="dropdown-item" v-if="!user.hasOwnProperty('email')" @click="register">Register</a>
          <router-link
            :to="{name: 'profile', params: {profileId: this.activeProfile._id}}"
            class="dropdown-item"
            v-if="user.hasOwnProperty('email')"
          >Profile</router-link>
        </div>
      </div>
    </nav>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NotificationService from "./utils/NotificationService.js";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getPersonalProfileByUserId", this.user._id);
  },
  methods: {
    async login() {
      let loginInfo = await NotificationService.inputData(
        "Enter Your Login Info"
      );
      if (loginInfo) {
        this.$store.dispatch("login", loginInfo);
      }
    },
    async logout() {
      this.$store.dispatch("logout");
    },
    async register() {
      let registerInfo = await NotificationService.registerData(
        "Create Your Profile"
      );
      if (registerInfo) {
        this.$store.dispatch("register", registerInfo);
      }
    }
  },

  computed: {
    activeProfile() {
      return this.$store.state.activeProfile;
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Abril Fatface", cursive;
}

p {
  font-family: "Old Standard TT", serif;
}
</style>