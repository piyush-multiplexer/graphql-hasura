<template>
  <div>
    <h1>Employees</h1>
    <button @click="isAdd = !isAdd">Add New Employee</button>
    <AddEmployee
      v-if="isAdd"
      style="margin-top: 16px"
      @saveEmployee="afterSaveEmployee"
    ></AddEmployee>
    <div class="row" v-for="(emp, index) in employee" :key="index">
      <div class="column left">
        <ul>
          <li>Name: {{ emp.name }}</li>
          <li>Email: {{ emp.email }}</li>
        </ul>
      </div>
      <div style="margin-top: 25px" class="column right">
        <button @click="deleteEmp(emp)">Delete</button>
      </div>
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
    deleteEmp(obj) {
      console.log(obj);
      this.$apollo
        .mutate({
          mutation: gql`
            mutation RemoveEmp($id: uuid!) {
              delete_employee(where: { id: { _eq: $id } }) {
                returning {
                  id
                }
              }
            }
          `,
          variables: { id: obj.id },
        })
        .then(() => {
          alert("Employee Successfully Removed");
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
        updateQuery: function (previousResult, { subscriptionData }) {
          this.employee = subscriptionData.data.employee;
        },
      },
    },
  },
};
</script>
