<template>
  <div class="new-card">
    <div
      class="card"
      style="width: 7.5rem; height: 10.5rem;"
      data-toggle="modal"
      data-target="#newCardModal"
    >
      <div class="card-body">
        <h5 class="card-title mt-2">New Card</h5>
        <div class="d-flex justify-content-center align-items-center">
          <i class="fas fa-plus" id="add-card"></i>
        </div>
      </div>
    </div>
    <!-- modal code -->
    <div
      class="modal fade container-fluid"
      data-backdrop="static"
      id="newCardModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="newCardModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog full-width-modal row" role="document">
        <div class="modal-content col">
          <div class="row">
            <div class="col modal-header">
              <h5 class="modal-title" id="newCardModalLabel">Create a Card</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                @click="flipped=false"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
          <div class="row modal-body">
            <div class="col-6" style="text-align: -webkit-center;">
              <div class="card mb-4" v-if="!flipped" style="width: 20rem; height: 28rem;">
                <div class="card-body d-inline-flex justify-content-between">
                  <h5 class="card-title text-wrap">{{ displayedNewCard.name }}</h5>
                  <h5 class="card-title text-wrap">{{ displayedNewCard.category }}</h5>
                </div>
                <div class="card-body image-centering">
                  <!-- card face image (top half of card) -->
                  <img
                    :src="displayedNewCard.imgFace"
                    id="card-face-img"
                    placeholder
                    style="max-width: 100%; max-height:100
                  %"
                  />
                </div>
                <div class="card-body">
                  <p class="card-text text-left text-wrap">{{ displayedNewCard.content }}</p>
                </div>
              </div>
              <div
                class="card mb-4"
                style="width: 20rem; height: 28rem;"
                v-else
                :style="'background-image: url('+displayedNewCard.imgBack+'); background-size: cover'"
              ></div>
            </div>
            <div class="col-6">
              <!-- Form code -->
              <form @submit.prevent="addCard">
                <div class="form-group text-left">
                  <label for="newCardName">Card Name</label>
                  <input
                    v-model="newCard.name"
                    type="text"
                    class="form-control"
                    id="newCardTitle"
                    placeholder="Name your card"
                    required
                  />
                </div>
                <div class="form-group text-left">
                  <label for="newCardCategory">Card Category</label>
                  <input
                    v-model="newCard.category"
                    type="text"
                    class="form-control"
                    id="newCardCategory"
                    placeholder="Category..."
                  />
                </div>
                <div class="form-group text-left">
                  <label for="newCardContent">Card Content</label>
                  <textarea
                    v-model="newCard.content"
                    class="form-control"
                    id="newCardContent"
                    placeholder="Share some details about your Card..."
                    required
                    style="resize:none;"
                  ></textarea>
                </div>
                <div class="form-group text-left">
                  <input
                    v-model="newCard.imgFace"
                    type="text"
                    class="form-control"
                    id="cardImgFace"
                    placeholder="Place Card Face Image URL Here..."
                  />
                  <label class="form-group-label" for="cardImgFace">Choose file, optional</label>
                </div>
                <div class="form-group text-left">
                  <input
                    v-model="newCard.imgBack"
                    type="text"
                    class="form-control"
                    id="cardImgBack"
                    placeholder="Place Card Back Image URL Here..."
                  />
                  <label class="form-group-label" for="cardImgBack">Choose file, optional</label>
                </div>

                <div class="modal-footer d-flex justify-content-between">
                  <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                  <button
                    type="submit"
                    class="btn btn-primary d-flex justify-content-left"
                  >Create card!</button>
                  <button class="btn btn-info" @click="flipped=!flipped" type="button">Flip</button>
                </div>
              </form>
            </div>
            <!-- end Form code -->
          </div>
        </div>
      </div>
    </div>
    <!-- end modal code -->
  </div>
</template>

<script>
export default {
  name: "NewCard",
  mounted() {},
  data() {
    return {
      newCard: {
        name: "",
        authorId: this.$store.state.user._id,
        content: "",
        category: "",
        imgFace: "",
        imgBack: ""
      },
      flipped: false
    };
  },
  computed: {
    displayedNewCard() {
      return this.newCard;
    }
  },
  methods: {
    addCard() {
      // $("newCardModal").modal("hide");
      let card = { ...this.newCard };
      this.$store.dispatch("addCard", {
        id: this.$route.params.id,
        data: card
      });
      this.newCard.name = "";
      this.newCard.content = "";
      this.newCard.category = "";
      this.newCard.imgBack = "";
      this.newCard.imgFace = "";
    },
    flip() {
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style>
.card {
  cursor: pointer;
}
.full-width-modal {
  max-width: 1000px;
}
.image-centering {
  align-self: center;
}
#card-face-img {
  border-radius: 1em;
}
</style>