<template>
  <div class="home">
    <Employees />
  </div>
</template>

<script>
import Employees from "@/components/Employees.vue";

export default {
  name: "Home",
  components: {
    Employees,
  },
};
</script>
