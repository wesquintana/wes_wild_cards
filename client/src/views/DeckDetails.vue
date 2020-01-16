<template>
  <div class="container-fluid deck-details">
    <div class="row">
      <div class="col-3 text-left">
        <button
          v-if="this.$store.state.user._id === this.activeDeck.authorId"
          class="btn btn-primary"
        >Edit</button>
      </div>
      <div class="col-6">
        <h2 class="text-center">{{activeDeck.title}}</h2>
        <p>{{activeDeck.description}}</p>
      </div>
      <div class="col-3">
        <rules class="rules" :deckData="activeDeck">Rules</rules>
      </div>
      <div class="col-12">
        <h4 class="text-left">Cards</h4>
        <div class="row scroll-x">
          <!-- plug in spot to create a card -->
          <new-card class="col-2"></new-card>
          <!-- plug in all cards in deck -->
          <card-sticker
            class="col-2"
            v-for="card in activeDeck.cards"
            :key="card._id"
            :cardData="card"
          ></card-sticker>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardSticker from "../components/CardSticker";
import rules from "../components/Rules";
import newCard from "../components/NewCard";
export default {
  name: "deckDetails",
  components: {
    cardSticker,
    rules,
    newCard
  },
  mounted() {
    this.$store.dispatch("getDeckById", this.$route.params.id);
  },
  computed: {
    activeDeck() {
      return this.$store.state.activeDeck;
    }
  }
};
</script>

<style>
.rules:hover {
  cursor: pointer;
}
#add-card {
  font-size: 4rem;
}
</style>