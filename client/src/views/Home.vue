<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-12">
        <h2>My Decks</h2>
        <div class="row scroll-x justify-content-between">
          <div class="col-3" v-for="userDeck in userDecks" :key="userDeck._id">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{ userDeck.title }}</h5>
                <p class="card-text">{{ userDeck.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h2>Public Decks</h2>
        <div class="row">
          <div class="col-3" v-for="publicDeck in publicDecks" :key="publicDeck._id">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">{{ publicDeck.title }}</h5>
                <p class="card-text">{{ publicDeck.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getUserDecks", this.$store.state.user._id);
    this.$store.dispatch("getPublicDecks");
  },
  data() {
    return {};
  },
  computed: {
    userDecks() {
      return this.$store.state.userDecks;
    },
    publicDecks() {
      return this.$store.state.publicDecks;
    }
  }
};
</script>

<style>
scroll-x {
  overflow-x: auto;
  white-space: nowrap;
  flex-wrap: nowrap;
}

.scroll-x::-webkit-scrollbar {
  height: 8px;
}

.scroll-x::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.7);
  border-radius: 4px;
}

.scroll-x::-webkit-scrollbar-thumb:hover {
  background-color: rgba(100, 100, 100, 0.9);
}
</style>