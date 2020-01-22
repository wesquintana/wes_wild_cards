<template>
  <div
    class="card-sticker-two"
    data-toggle="modal"
    data-target="#cardDetailsModal"
    @click="setActiveCard"
  >
    <div class="card" style="width: 7.5rem; height: 10.5rem;">
      <div class="card-body">
        <h5 class="card-title text-wrap">{{ cardData }}</h5>
        <!-- <p class="card-text text-left text-wrap">
          {{ lobby.deck.cards.content }}
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStickerTwo",
  mounted() {},
  props: ["cardData"],
  methods: {
    setActiveCard() {
      this.$store.dispatch("setActiveCard", this.cardData);
    }
  }
};
</script>

<style></style>
