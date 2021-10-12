<template>
  <div class="hello">
    <h1>Employees</h1>

    <div v-for="(emp, index) in employee" :key="index">
      <ul>
        <li>Name: {{ emp.name }}</li>
        <li>Email: {{ emp.email }}</li>
      </ul>
    </div>
    {{ employee }}
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Employees",
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

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>
