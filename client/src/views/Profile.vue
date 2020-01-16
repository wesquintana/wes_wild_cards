<template>
  <div class="profile container">
    <div class="row">
      <div class="col-3">
        <!-- injecting a card for profile image and name -->
        <div class="card d-flex align-items-center" style="width: 15rem; height: 21rem;">
          <img id="profile-image" :src="profile.imgURL" />
          <div class="card-body">
            <h5 class="card-title">{{profile.name}}</h5>
          </div>
          <!-- edit profile button -->
          <div class="card-body" v-if="user._id==profile.userId">
            <button class="btn btn-primary" v-if="editing" @click="startEditing">Edit Profile</button>
            <button v-else class="btn btn-success" @click="submitEdits">Done</button>
          </div>
        </div>
        <!-- end of card code -->
      </div>
      <div class="col-9 border">
        <div class="row">
          <div class="col d-inline-flex mt-3">
            <h3 class="text-left" v-if="!editing">User Name:&nbsp;</h3>
            <h3 class="text-left">{{profile.name}}</h3>
          </div>
        </div>
        <div class="row">
          <div class="col d-inline-flex mt-3">
            <h4 class="text-left">About Me:&nbsp;&nbsp;</h4>
            <h4 class="text-left" v-if="editing">{{profile.description}}</h4>
            <textarea v-else name id cols="60" rows="5" v-model="profile.description"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col d-inline-flex mt-3">
            <h4 class="text-left" v-if="!editing">Image URL:&nbsp;</h4>
            <input v-if="!editing" type="text" v-model="profile.imgURL" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <deck-sticker
        class="col-2 mt-5"
        v-for="profileDeck in profileDecks"
        :key="profileDeck._id"
        :deckData="profileDeck"
      ></deck-sticker>
    </div>
  </div>
</template>
<script>
import deckSticker from "../components/DeckSticker";
export default {
  name: "Profile",
  components: {
    deckSticker
  },
  data() {
    return {
      editing: true
    };
  },
  mounted() {
    this.$store.dispatch("getProfileById", this.$route.params.profileId);
    // this.$store.dispatch("getPublicDecksByUserId", this.profile.userId);
  },
  methods: {
    startEditing() {
      this.editing = !this.editing;
    },
    submitEdits() {
      this.$store.dispatch("editProfile", {
        id: this.deckData._id,
        description: this.deckData.rules
      });
      this.editing = !this.editing;
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    user() {
      return this.$store.state.user;
    },
    profileDecks() {
      return this.$store.state.profileDecks;
    }
  }
};
</script>
<style>
#profile-image {
  max-width: 200px;
  max-height: 300px;
}
</style>