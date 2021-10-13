<template>
  <div class="AddJob">
    <form class="form-inline">
      <label for="name">Name:</label>
      <input v-model="job.name" placeholder="Enter name" />
      <button @click="saveJob">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddJob",
  data() {
    return {
      job: { name: "" },
    };
  },
  methods: {
    saveJob() {
      this.$emit("saveJob", this.job);
    },
  },
};
</script>
