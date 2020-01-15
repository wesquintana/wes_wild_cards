<template>
  <div class="new-deck">
    <div
      class="card"
      style="width: 10rem; height: 14rem;"
      data-toggle="modal"
      data-target="#newDeckModal"
    >
      <div
        class="modal fade"
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
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title mt-2">New Deck</h5>
        <div class="d-flex justify-content-center align-items-center">
          <i class="fas fa-plus" id="add-deck"></i>
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