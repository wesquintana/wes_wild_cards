<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-12">
        <h2>My Decks</h2>
        <div class="row">
          <div class="col-3" v-for="userDeck in userDecks" :key="userDeck._id">{{ userDeck }}</div>
        </div>
      </div>
      <div class="col-12">
        <h2>Public Decks</h2>
        <div class="row">
          <div class="col-3" v-for="publicDeck in publicDecks" :key="publicDeck._id">{{ userDeck }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getUserDecks");
    this.$store.dispatch("getPublicDecks");
  },
  data() {},
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
</style>