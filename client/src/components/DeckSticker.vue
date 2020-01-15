<template>
  <div class="deck-sticker">
    <div class="card" style="width: 10rem; height: 14rem;">
      <div class="card-body">
        <h5 class="card-title">{{ deckData.title }}</h5>
        <p class="card-text text-left">{{ deckData.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeckSticker",
  mounted() {},
  props: ["deckData"]
};
</script>

<style>
</style>