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
          <form>
            <div class="modal-body">
              <!-- Form code -->
              <div class="form-group text-left">
                <label for="newDeckTitle">Deck Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="newDeckTitle"
                  placeholder="Name your deck"
                />
              </div>
              <div class="form-group text-left">
                <label for="newDeckDesc">Deck description</label>
                <textarea
                  class="form-control"
                  id="newDeckDesc"
                  placeholder="Share some details about your deck..."
                ></textarea>
              </div>
              <div class="custom-file text-left">
                <input type="file" class="custom-file-input" id="deckImg" />
                <label class="custom-file-label" for="deckImg">Choose file, optional</label>
              </div>
              <!-- toggle switch for privacy setting -->
              <div class="custom-control custom-switch text-left mt-3">
                <input type="checkbox" class="custom-control-input" id="privacySwitch" />
                <label
                  class="custom-control-label"
                  for="privacySwitch"
                >Select this deck's privacy setting</label>
              </div>

              <!-- end Form code -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary d-flex justify-content-left">Create deck!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeckSticker",
  mounted() {},
  methods: {
    newDeck() {}
  }
};
</script>

<style>
.card {
  cursor: pointer;
}
</style>