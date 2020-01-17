<template>
  <div
    class="card-sticker"
    data-toggle="modal"
    data-target="#cardDetailsModal"
    @click="setActiveCard"
  >
    <div class="card" style="width: 7.5rem; height: 10.5rem;">
      <div class="card-body">
        <h5 class="card-title text-wrap">{{ cardData.name }}</h5>
        <p class="card-text text-left text-wrap">{{ cardData.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSticker",
  mounted() {},
  props: ["cardData"]
};
</script>

<style>
</style>