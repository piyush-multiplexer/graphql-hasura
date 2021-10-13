<template>
  <div class="AddEmployee">
    <form class="form-inline">
      <label for="name">Name:</label>
      <input v-model="emp.name" placeholder="Enter name" />
      <label for="email">Email:</label>
      <input v-model="emp.email" placeholder="Enter email" />
      <button @click="saveEmployee">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddEmployee",
  data() {
    return {
      emp: { name: "", email: "" },
    };
  },
  methods: {
    saveEmployee() {
      this.$emit("saveEmployee", this.emp);
    },
  },
};
</script>
