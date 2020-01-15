<template>
  <div class="profile container">
    <div class="row">
      <div class="col-3 border border-primary">
        <img :src="'https://robohash.org/'+profile.name+'.png'" />
      </div>
      <div class="col-9 border border-secondary">{{profile.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getResourceById", {
      name: "profile",
      id: this.$route.params.profileId
    });
  },
  methods: {},
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};
</script>
<style>
</style>