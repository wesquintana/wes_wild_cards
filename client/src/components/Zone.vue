<template>
  <div class="Zone">
    <div class="card" style="width: 8rem; height: 11.2rem;">
      <cardsticker
        v-for="card in lobby.deck.cards"
        :key="card._id"
        :cardData="lobby.deck.card"
      ></cardsticker>
    </div>
  </div>
</template>
<script>
export default {
  name: "Zone",
  data() {
    return {};
  },
  props: ["lobby", "zoneData"],
  methods: {}
};
</script>
<style></style>
