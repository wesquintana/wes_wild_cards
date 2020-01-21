<template>
  <div class="lobby container-fluid">
    <div class="row">
      <div class="col-10">
        <div class="row">
          <div class="col-12 public-play">
            <div class="row">
              <div class="col-2 deck-area">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-10 card-zone">
                <div class="row card-row">
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row card-row">
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row card-row">
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div
                      class="card"
                      draggable
                      @dragstart="pickupCard()"
                      style="width: 7.5rem; height: 10.5rem;"
                    >
                      <div class="card-body">
                        <h5 class="card-title mt-2">New Card</h5>
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <i class="fas fa-plus" id="add-card"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <i class="fas fa-plus" id="add-card"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-1">
                <div
                  class="card"
                  draggable
                  @dragstart="pickupCard()"
                  style="width: 7.5rem; height: 10.5rem;"
                >
                  <div class="card-body">
                    <h5 class="card-title mt-2">New Card</h5>
                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
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
      <div class="col-2 play-menu">
        <button class="btn btn-danger btn-lg">Leave Game</button>
        <button class="btn btn-primary btn-lg">Rules</button>
        <button class="btn btn-success btn-lg">Edit Card</button>
        <button class="btn btn-warning btn-lg">Users</button>
      </div>
    </div>
  </div>
</template>
<script>
import Zone from "../components/Zone";
export default {
  name: "lobby",
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
</style>
