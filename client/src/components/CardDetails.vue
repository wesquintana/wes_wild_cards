<template>
  <div class="container-fluid card-details">
    <div class="row">
      <div class="col">
        <div class="row">
          <div
            class="modal fade"
            data-backdrop
            id="cardDetailsModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="cardDetailsModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog row"
              v-bind:class="{'full-width-modal': editing}"
              role="document"
            >
              <div class="modal-content col">
                <div class="row">
                  <div class="col">
                    <div class="modal-header text-center">
                      <h5 class="modal-title" id="activeCardModalLabel">{{ activeCard.name }}</h5>
                      <!--TODO create clear Active Card method -->
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
                </div>

                <!-- form code -->

                <!-- end Form code -->
                <div class="row">
                  <div v-bind:class="{col:!editing, 'col-6':editing}">
                    <div class="modal-body row">
                      <div class="col-10">
                        <!-- card code -->
                        <div class="card mb-4" style="width: 20rem; height: 28rem;" v-if="!flipped">
                          <div class="card-body d-inline-flex justify-content-between">
                            <h5 class="card-title text-wrap">{{ activeCard.name }}</h5>
                            <h5 class="card-title text-wrap">{{ activeCard.category }}</h5>
                          </div>
                          <div class="card-body">
                            <!-- card face image (top half of card) -->
                            <img :src="activeCard.imgFace" placeholder />
                          </div>
                          <div class="card-body">
                            <p class="card-text text-left text-wrap">{{ activeCard.content }}</p>
                          </div>
                        </div>
                        <div
                          class="card mb-4"
                          style="width: 20rem; height: 28rem;"
                          v-else
                          :style="'background-image: url('+activeCard.imgBack+'); background-size: cover'"
                        ></div>
                      </div>
                      <!-- column of buttons -->
                      <div class="col-2">
                        <button @click="flip">Flip Card</button>
                        <button>Copy Card</button>
                        <button @click="editing = !editing">Edit Card</button>
                        <button>Delete Card</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-6" v-if="editing">
                    <form @submit.prevent="editCard">
                      <div class="form-group text-left">
                        <label for="activeCardName">Card Name</label>
                        <input
                          v-model="activeCard.name"
                          type="text"
                          class="form-control"
                          id="activeCardTitle"
                          placeholder="Name your card"
                          required
                        />
                      </div>
                      <div class="form-group text-left">
                        <label for="activeCardCategory">Card Category</label>
                        <input
                          v-model="activeCard.category"
                          type="text"
                          class="form-control"
                          id="activeCardCategory"
                          placeholder="Category..."
                        />
                      </div>
                      <div class="form-group text-left">
                        <label for="activeCardContent">Card Content</label>
                        <textarea
                          v-model="activeCard.content"
                          class="form-control"
                          id="activeCardContent"
                          placeholder="Share some details about your Card..."
                          required
                        ></textarea>
                      </div>
                      <div class="form-group text-left">
                        <input
                          v-model="activeCard.imgFace"
                          type="text"
                          class="form-control"
                          id="cardImgFace"
                          placeholder="Place Card Face Image URL Here..."
                        />
                        <label class="form-group-label" for="cardImgFace">Choose file, optional</label>
                      </div>
                      <div class="form-group text-left">
                        <input
                          v-model="activeCard.imgBack"
                          type="text"
                          class="form-control"
                          id="cardImgBack"
                          placeholder="Place Card Back Image URL Here..."
                        />
                        <label class="form-group-label" for="cardImgBack">Choose file, optional</label>
                      </div>

                      <div class="modal-footer d-flex justify-content-center">
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                        <button
                          type="submit"
                          class="btn btn-primary d-flex justify-content-left"
                        >Save changes!</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardDetails",
  data() {
    return {
      flipped: false,
      editing: false
    };
  },
  computed: {
    activeCard() {
      return this.$store.state.activeCard;
    }
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    }
  }
};
</script>
<style scoped>
.full-width-modal {
  max-width: 1000px;
}
</style>