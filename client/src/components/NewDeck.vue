<template>
  <div class="new-deck">
    <div
      class="card"
      style="width: 10rem; height: 14rem;"
      data-toggle="modal"
      data-target="#newDeckModal"
    >
      <div class="card-body">
        <h5 class="card-title mt-2">New Deck</h5>
        <div class="d-flex justify-content-center align-items-center">
          <i class="fas fa-plus" id="add-deck"></i>
        </div>
      </div>
    </div>
    <!-- modal code -->
    <div
      class="modal fade"
      data-backdrop="static"
      id="newDeckModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="newDeckModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newDeckModalLabel">Create a Deck</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Form code -->
          <form @submit.prevent="addDeck">
            <div class="modal-body">
              <div class="form-group text-left">
                <label for="newDeckTitle">Deck Title</label>
                <input
                  v-model="newDeck.title"
                  type="text"
                  class="form-control"
                  id="newDeckTitle"
                  placeholder="Name your deck"
                  required
                />
              </div>
              <div class="form-group text-left">
                <label for="newDeckDesc">Deck description</label>
                <textarea
                  v-model="newDeck.description"
                  class="form-control"
                  id="newDeckDesc"
                  placeholder="Share some details about your deck..."
                  required
                ></textarea>
              </div>
              <div class="form-group text-left">
                <input
                  v-model="newDeck.img"
                  type="text"
                  class="form-control"
                  id="deckImg"
                  placeholder="paste URL here..."
                />
                <label class="form-group-label" for="deckImg">Choose file, optional</label>
              </div>
              <!-- toggle switch for privacy setting -->
              <div class="custom-control custom-switch text-left mt-3">
                <!-- TODO look at how to set the toggle for isPrivate -->
                <input
                  v-model="newDeck.isPrivate"
                  type="checkbox"
                  class="custom-control-input"
                  id="privacySwitch"
                />
                <p>Privacy settings:</p>
                <label
                  v-if="this.newDeck.isPrivate"
                  class="custom-control-label"
                  for="privacySwitch"
                >Private</label>
                <label
                  v-else-if="!this.newDeck.isPrivate"
                  class="custom-control-label"
                  for="privacySwitch"
                >Public</label>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="submit" class="btn btn-primary d-flex justify-content-left">Create deck!</button>
            </div>
          </form>
          <!-- end Form code -->
        </div>
      </div>
    </div>
    <!-- end modal code -->
  </div>
</template>

<script>
export default {
  name: "NewDeck",
  mounted() {},
  data() {
    return {
      newDeck: {
        title: "",
        authorId: this.$store.state.user._id,
        description: "",
        category: "",
        rules: "Add rules to your deck",
        isPrivate: true,
        cards: [],
        img: "",
        name: "activeDeck" // can probably drop this
      }
    };
  },
  methods: {
    addDeck() {
      $("#newDeckModal").modal("hide");
      let deck = { ...this.newDeck };
      this.$store.dispatch("addDeck", deck);
      this.newDeck.title = "";
      this.newDeck.description = "";
      this.newDeck.rules = "Add rules to your deck";
      this.newDeck.isPrivate = true;
      this.newDeck.img = "";
    }
  }
};
</script>

<style>
.card {
  cursor: pointer;
}
</style>