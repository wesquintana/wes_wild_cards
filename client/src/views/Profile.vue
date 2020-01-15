<template>
  <div class="profile container">
    <div class="row">
      <div class="col-3 border border-primary">
        <img :src="'https://robohash.org/'+profile.name+'.png'" />
        <input
          v-if="!editing"
          type="text"
          :placeholder="'https://robohash.org/'+profile.name+'.png'"
        />
        <button class="btn btn-primary" v-if="editing" @click="startEditing">Edit Profile</button>
        <button v-else class="btn btn-success" @click="submitEdits">Done</button>
      </div>
      <div class="col-9 border border-secondary">
        <h4 class="text-left">{{profile.name}}</h4>
        <p v-if="editing">{{profile.description}}</p>
        <textarea v-else name id cols="30" rows="10" v-model="profile.description"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      editing: true
    };
  },
  mounted() {
    this.$store.dispatch("getResourceById", {
      name: "profile",
      id: this.$route.params.profileId
    });
  },
  methods: {
    startEditing() {
      this.editing = !this.editing;
    },
    submitEdits() {
      this.editing = !this.editing;
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>
<style>
</style>