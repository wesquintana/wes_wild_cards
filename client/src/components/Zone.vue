<template>
  <div class="Zone">
    <div class="card" draggable @dragstart="pickupCard()" style="width: 8rem; height: 11.2rem;">
      <div class="card-body">
        <h5 class="card-title mt-2">New Card</h5>
        <div class="d-flex justify-content-center align-items-center">
          <i class="fas fa-plus" id="add-card"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Zone",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
</style>