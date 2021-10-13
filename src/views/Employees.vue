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
      this.$apollo
        .mutate({
          mutation: gql`
            mutation InsertEmp($name: String!, $email: String) {
              insert_employee(objects: { name: $name, email: $email }) {
                returning {
                  id
                }
              }
            }
          `,
          variables: {
            name: obj.name,
            email: obj.email,
          },
        })
        .then(() => {
          alert("Employee Added");
        });
    },
  },
  apollo: {
    employee: {
      query: gql`
        query {
          employee {
            id
            name
            email
          }
        }
      `,
      subscribeToMore: {
        document: gql`
          subscription {
            employee {
              id
              name
              email
            }
          }
        `,
        updateQuery: (previousResult, { subscriptionData }) => {
          console.log(previousResult, subscriptionData);
        },
      },
    },
  },
};
</script>
