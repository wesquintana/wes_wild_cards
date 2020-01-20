<template>
  <div class="lobby container-fluid">
    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="col-12 public-play">
            <span v-for="Zone in 18 :key=Lobby.key ">{{ Zone }}</span>
          </div>
          <div class="col-12 hand-area">
            <div class="row scroll-x">
              <!-- plug in spot to create a card -->
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div class="d-flex justify-content-center align-items-center">
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- plug in all cards in deck -->
              <!--  -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-2 play-menu"></div>
    </div>
  </div>
</template>
<script>
import Zone from "../components/Zone";
export default {
  name: "Lobby",
  components: {
    Zone
  },
  data() {
    return {};
  },
  methods: {}
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
.play-menu {
  background-color: grey;
  height: 93.1vh;
}
</style>