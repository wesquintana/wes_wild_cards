<template>
  <div v-if="zoneData" class="Zone">
    <div class="card" style="width: 8rem; height: 11.2rem;">
      <div
        v-if="activeCard._id"
        class="drop-zone"
        @click="moveCard"
        dropzone="zone"
        @dragover.prevent
        @drop="moveCard"
      ></div>
      <card-sticker-two :cardId="zoneData.cards[0]"></card-sticker-two>
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
  computed: {
    activeCard() {
      return this.$store.state.activeCard;
    }
  },
  methods: {
    moveCard() {
      let card = this.$store.state.activeCard;
      if (card._id) {
        this.$store.dispatch("setActiveCard", {});
        this.$store.state.lobby.zones.forEach(z => {
          let found = z.cards.findIndex(c => c == card._id);
          if (found != -1) {
            z.cards.splice(found, 1);
          }
        });
        this.zoneData.cards.unshift(card._id);
        this.$store.dispatch("saveLobby", this.$store.state.lobby);
      }
    }
  }
};
</script>
<style>
.drop-zone {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  position: absolute;
  background-color: rgba(255, 0, 0, 0.3);
}
.Zone {
  position: relative;
}
</style>
