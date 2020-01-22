<template>
  <div class="card-sticker-two" @click="setActiveCard" v-if="cardId">
    <div
      class="card"
      :class="{ active: activeCard == card }"
      style="width: 7.5rem; height: 10.5rem;"
    >
      <div class="card-body">
        <h5 class="card-title text-wrap">{{ card.name }}</h5>
        <!-- <p class="card-text text-left text-wrap">
          {{ lobby.deck.cards.content }}
        </p>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStickerTwo",
  mounted() {},
  props: ["cardId"],
  methods: {
    setActiveCard() {
      this.$store.dispatch("setActiveCard", this.card);
    }
  },
  computed: {
    card() {
      return this.$store.state.lobby.deck.cards.find(c => c._id == this.cardId);
    },
    activeCard() {
      return this.$store.state.activeCard;
    }
  }
};
</script>

<style>
.active {
  border: 3px solid red;
}
</style>
