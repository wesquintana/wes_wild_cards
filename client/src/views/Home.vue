<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-12 pt-3">
        <div class="d-flex">
          <h2 class="text-left deck-header border rounded p-1">My Decks</h2>
        </div>
        <div class="row scroll-x">
          <new-deck class="col-2"></new-deck>
          <deck-sticker
            class="col-2"
            v-for="userDeck in userDecks"
            :key="userDeck._id"
            :deckData="userDeck"
          ></deck-sticker>
        </div>
      </div>
      <div class="col-12 pt-3">
        <div class="d-flex">
          <h2 class="text-left deck-header border rounded p-1">Public Decks</h2>
        </div>
        <div class="row">
          <deck-sticker
            class="col-2"
            v-for="publicDeck in publicDecks"
            :key="publicDeck._id"
            :deckData="publicDeck"
          ></deck-sticker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeckSticker from "@/components/DeckSticker.vue";
import NewDeck from "@/components/NewDeck.vue";
export default {
  name: "home",
  components: {
    DeckSticker,
    NewDeck
  },
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
  },
  methods: {
    newDeck() {}
  }
};
</script>

<style>
.scroll-x {
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

#add-deck {
  font-size: 6rem;
}

.home {
  background-image: url("../assets/felt.jpg");
  background-size: 250px;
}
/* Styles deck headers, overrides some Bootstrap styling */
.deck-header {
  background-color: #4d464690;
  color: #f5eaea;
  display: inline;
  border-color: #5b5656 !important;
  border-width: 0.2rem !important;
}
</style>