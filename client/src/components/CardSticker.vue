<template>
  <div
    class="card-sticker"
    data-toggle="modal"
    data-target="#cardDetailsModal"
    @click="setActiveCard"
  >
    <div class="card" style="width: 7.5rem; height: 10.5rem;">
      <div class="card-body" id="card-sticker-body">
        <p class="card-title text-wrap mb-0">{{ cardData.name }}</p>
        <img :src="cardData.imgFace" id="card-face-img" />
        <p
          class="card-text text-left text-wrap text-align-bottom"
          id="card-content-ptag"
        >{{ cardData.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSticker",
  mounted() {},
  props: ["cardData"],
  methods: {
    setActiveCard() {
      this.$store.dispatch("setActiveCard", this.cardData);
    }
  }
};
</script>

<style scoped>
#card-sticker-body {
  padding: 0.25rem;
}

#card-face-img {
  max-height: 60%;
  max-width: 60%;
}
#card-content-ptag {
  position: absolute;
  bottom: 0;
  max-height: 3rem;
  max-width: 7rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 70%;
}
</style>