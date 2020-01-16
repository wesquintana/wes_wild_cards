<template>
  <div class="deck-sticker">
    <div class="card mb-2" style="width: 10rem; height: 14rem;">
      <div class="card-body">
        <h5 class="card-title text-wrap">{{ deckData.title }}</h5>
        <p class="card-text text-left text-wrap">{{ deckData.description }}</p>
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