<template>
  <div class="edit-deck">
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#editDeckModal"
    >Edit</button>
    <div
      class="modal fade"
      id="editDeckModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editDeckModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editDeckModalLabel">Edit Deck</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="editDeck">
            <div class="modal-body">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
                </div>
                <input
                  v-model="deckData.title"
                  type="text"
                  class="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  required
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Description</span>
                </div>
                <input
                  v-model="deckData.description"
                  type="text"
                  class="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  required
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-default">Image URL (optional)</span>
                </div>
                <input
                  v-model="deckData.img"
                  type="text"
                  class="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div class="custom-control custom-switch text-left mt-3">
                <!-- TODO look at how to set the toggle for isPrivate -->
                <input
                  v-model="deckData.isPrivate"
                  type="checkbox"
                  class="custom-control-input"
                  id="privacySwitch"
                />
                <label
                  v-if="this.deckData.isPrivate"
                  class="custom-control-label"
                  for="privacySwitch"
                >Private</label>
                <label
                  v-else-if="!this.deckData.isPrivate"
                  class="custom-control-label"
                  for="privacySwitch"
                >Public</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editDeck",
  props: ["deckData"],
  methods: {
    editDeck() {
      this.$store.dispatch("editDeck", {
        _id: this.deckData._id,
        title: this.deckData.title,
        description: this.deckData.description,
        img: this.deckData.img,
        isPrivate: this.deckData.isPrivate
      });
      $("#editDeckModal").modal("hide");
    }
  }
};
</script>

<style>
</style>