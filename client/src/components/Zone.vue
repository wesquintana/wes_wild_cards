<template>
  <div class="Zone">
    <div class="card" style="width: 8rem; height: 11.2rem;">
      <card-sticker-two
        :v-for="card in zoneData.zones[2].cards"
        :key="card"
        :cardData="card"
      ></card-sticker-two>
    </div>
  </div>
</template>
<script>
import CardStickerTwo from "../components/CardSticker2";
export default {
  name: "Zone",
  data() {
    return {};
  },
  props: ["zoneData"],
  components: {
    CardStickerTwo
  },
  methods: {}
};
</script>
<style></style>
