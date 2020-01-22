<template>
  <div class="player-hand">
    <div class="scroll-x">
      <div class="d-flex flex-direction-row" style="width: 100%; height: 100%;">
        <div
          v-if="activeCard._id"
          class="drop-zone"
          @click="moveCard"
          dropzone="zone"
          @dragover.prevent
          @drop="moveCard"
        ></div>
        <card-sticker-two
          class="col-2"
          v-for="(card, index) in handData.cards"
          :key="card._id"
          :cardId="handData.cards[index]"
        ></card-sticker-two>
      </div>
    </div>
  </div>
</template>
<script>
import CardStickerTwo from "../components/CardSticker2";
export default {
  name: "playerHand",
  data() {
    return {};
  },
  components: {
    CardStickerTwo
  },
  props: ["handData"],
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
        this.handData.cards.unshift(card._id);
        this.$store.dispatch("saveLobby", this.$store.state.lobby);
      }
    }
  },
  computed: {
    activeCard() {
      return this.$store.state.activeCard;
    }
  }
};
</script>
<style>
.scroll-x {
  overflow-x: auto;
  white-space: nowrap;
  flex-wrap: nowrap;
  width: 81.5vw;
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
</style>
