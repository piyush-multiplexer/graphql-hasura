<template>
  <div>
    <h1>Employees</h1>
    <button @click="isAdd = !isAdd">Add New Employee</button>
    <AddEmployee
      v-if="isAdd"
      style="margin-top: 16px"
      @saveEmployee="afterSaveEmployee"
    ></AddEmployee>
    <div v-for="(emp, index) in employee" :key="index">
      <ul>
        <li>Name: {{ emp.name }}</li>
        <li>Email: {{ emp.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import AddEmployee from "../components/AddEmployee.vue";

export default {
  name: "Employees",
  components: { AddEmployee },
  data() {
    return { isAdd: false };
  },
  methods: {
    afterSaveEmployee(obj) {
      this.isAdd = false;
      console.log("main", obj);
    },
  },
  apollo: {
    employee: gql`
      query {
        employee {
          id
          name
          email
        }
      }
    `,
  },
};
</script>
