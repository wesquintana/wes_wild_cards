<template>
  <div class="card-details">
    <div
      class="modal fade"
      data-backdrop
      id="cardDetailsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="newCardModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newCardModalLabel">Create a Card</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <!-- Form code -->
          <form @submit.prevent="addCard">
            <div class="modal-body">
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
            </div>
            <div class="modal-footer d-flex justify-content-center">
              <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
              <button type="submit" class="btn btn-primary d-flex justify-content-left">Create card!</button>
            </div>
          </form>
          <!-- end Form code -->
        </div>
      </div>
    </div>
  </div>
</template>