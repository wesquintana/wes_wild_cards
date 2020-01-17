<template>
  <div class="rules">
    <div data-toggle="modal" data-target="#rulesModal">
      <h4>Rules</h4>
    </div>
    <div
      class="modal fade"
      id="rulesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLongTitle">Rules</h5>
            <button
              type="button"
              class="close"
              v-on:click="editing=true"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-if="editing">
            <div class="modal-body text-left">
              <p>{{deckData.rules}}</p>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                v-if=" this.$store.state.user._id === this.deckData.authorId"
                @click="startEditing"
              >Edit</button>
            </div>
          </div>
          <div v-if="!editing">
            <div class="modal-body">
              <form>
                <textarea
                  class="form-control"
                  name
                  id
                  cols="auto"
                  rows="10"
                  v-model="deckData.rules"
                ></textarea>
                <div class="modal-footer"></div>

                <button class="btn btn-success mb-3 float-right" @click="submitEdits">Done</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rules",
  props: ["deckData"],
  data() {
    return {
      editing: true
    };
  },
  methods: {
    startEditing() {
      this.editing = !this.editing;
    },
    submitEdits() {
      this.$store.dispatch("editDeck", {
        _id: this.deckData._id,
        rules: this.deckData.rules
      });
      this.editing = !this.editing;
    }
  }
};
</script>

<style>
</style>