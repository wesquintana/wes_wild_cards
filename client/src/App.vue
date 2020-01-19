<template>
  <div id="app">
    <div class="nav-styling border-bottom">
      <nav class="navbar navbar-dark bg-dark">
        <h2>
          <router-link class="navbar-brand" :to="{name:'home'}" href="#">Wild Card</router-link>
        </h2>
        <div class="dropdown profile-name">
          {{activeProfile.name}}
          <button
            class="btn btn-dark"
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
    </div>
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

.navbar {
  background-image: url("./assets/wood_panel.jpg");
}

.navbar-brand {
  color: #f5eaea;
}
.profile-name {
  color: #f5eaea;
  font-family: "Old Standard TT", serif;
}

.dropdown-item {
  color: #f5eaea;
}

.nav-styling {
  border-width: 0.2rem !important;
  border-color: black !important;
  filter: drop-shadow(0px 16px 10px black) !important;
}
</style>