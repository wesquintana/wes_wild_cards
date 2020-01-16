<template>
  <div class="container-fluid deck-details">
    <div class="row">
      <div class="col-12 pt-5">
        <h2 class="text-left">Cards</h2>
        <div class="row scroll-x">
          <!-- plug in spot to create a card -->
          <!-- <new-card class="col-2"></new-card> -->
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
export default {
  name: "deckDetails",
  components: {
    cardSticker
  },
  mounted() {
    // this.$store.dispatch("getActiveDeck", this.$route.params.id);
  },
  computed: {
    activeDeck() {
      return this.$store.state.activeDeck;
    }
  }
};
</script>

<style>
</style>