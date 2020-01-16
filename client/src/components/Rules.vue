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
            <h5 class="modal-title" id="exampleModalLongTitle">Rules</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p v-if="editing">{{deckData.rules}}</p>
            <textarea v-else name id cols="30" rows="10" v-model="deckData.rules"></textarea>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-primary"
              v-if="editing && this.$store.state.user._id === this.deckData.authorId"
              @click="startEditing"
            >Edit</button>
            <button v-else class="btn btn-success" @click="submitEdits">Done</button>
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
      this.$store.dispatch("editRules", {
        id: this.deckData._id,
        rules: this.deckData.rules
      });
      this.editing = !this.editing;
    }
  }
};
</script>

<style>
</style>