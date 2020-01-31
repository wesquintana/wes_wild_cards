<template>
  <div class="lobby container-fluid">
    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="col-12 public-play">
            <div class="row">
              <div class="col-2 deck-area">
                <zone :zoneData="drawPile"></zone>
              </div>
              <div class="col-10 card-zone">
                <div class="row card-row">
                  <zone v-for="zone in zones" :key="zone.position" :zoneData="zone" class="col-2"></zone>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 hand-area">
            <div class="row">
              <player-hand :zoneData="playerOneHand"></player-hand>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2 play-menu">
        <button class="btn btn-danger btn-lg">Leave Game</button>

        <rules v-if="lobby!=undefined" class="btn btn-primary btn-lg" :deckData="deck">Rules</rules>
        <button class="btn btn-success btn-lg">
          Reset Game
          <!-- NOTE Does Nothing -->
        </button>
        <button class="btn btn-warning btn-lg">Users</button>
      </div>
    </div>
  </div>
</template>
<script>
import VueDragDrop, { Drag, Drop } from "vue-drag-drop";
import Zone from "../components/Zone";
import CardSticker from "../components/CardSticker";
import PlayerHand from "../components/PlayerHand";
import Rules from "../components/Rules";
export default {
  name: "lobby",
  components: {
    Drag,
    Drop,
    Zone,
    PlayerHand,
    Rules
  },
  props: [],

  data() {
    return {
      over: false,
      Cards: []
    };
  },
  mounted() {
    this.$store.dispatch("getLobbyById", this.$route.params.id);
  },
  computed: {
    lobby() {
      if (this.$store.state.lobby._id) {
        return this.$store.state.lobby;
      }
    },
    zones() {
      if (this.$store.state.lobby._id) {
        return this.lobby.zones.slice(3);
      }
    },
    drawPile() {
      if (this.$store.state.lobby._id) {
        return this.$store.state.lobby.zones[2];
      }
    },
    playerOneHand() {
      if (this.$store.state.lobby._id) {
        return this.$store.state.lobby.zones[1];
      }
    },
    deck() {
      return this.lobby.deck;
    }
  },
  methods: {
    handleDrop(data) {
      this.over = false;
      alert(`this work?`);
    },
    shuffle(deck) {
      let m = deck.length,
        t,
        i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = deck[m];
        deck[m] = deck[i];
        deck[i] = t;
      }
      console.log(deck);

      this.$store.dispatch("shuffle", deck);
    }
  }
};
</script>
<style>
.public-play {
  width: 100%;
  height: 63.1vh;
  background-image: url("../assets/felt.jpg");
  background-size: 250px;
}
.hand-area {
  width: 100%;
  height: 30vh;

  border-top: solid 10px black;

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/felt.jpg");
  background-size: 250px;
}
.deck-area {
  height: 63.1vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-zone {
  height: 63.1vh;
}
.card-row {
  margin-top: 1.5rem;
}
.play-menu {
  background-color: grey;
  height: 93.1vh;
  display: flex;
  flex-direction: column;
}
.btn {
  margin-top: 1rem;
}
.drop {
  height: 100px;
  width: 100px;
}
</style>
