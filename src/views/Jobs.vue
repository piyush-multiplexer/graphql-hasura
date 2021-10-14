<template>
  <div>
    <h1>Jobs</h1>
    <button @click="isAdd = !isAdd">Add New Job</button>
    <AddJob
      v-if="isAdd"
      style="margin-top: 16px"
      @saveJob="afterSaveJob"
    ></AddJob>
    <div class="row" v-for="(job, index) in jobs" :key="index">
      <div class="column left">
        <ul>
          <li>
            {{ job.name }} ({{ job.Employees_aggregate.aggregate.count }})
          </li>
        </ul>
      </div>
      <div style="margin-top: 25px" class="column right">
        <button @click="deleteJob(job)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import AddJob from "../components/AddJob.vue";

export default {
  name: "Jobs",
  components: { AddJob },
  data() {
    return { isAdd: false };
  },
  methods: {
    afterSaveJob(obj) {
      this.isAdd = false;
      this.$apollo
        .mutate({
          mutation: gql`
            mutation InsertJob($name: String!) {
              insert_jobs(objects: { name: $name }) {
                returning {
                  id
                }
              }
            }
          `,
          variables: {
            name: obj.name,
          },
        })
        .then(() => {
          alert("Job Added");
        });
    },
    deleteJob(obj) {
      console.log(obj);
      this.$apollo
        .mutate({
          mutation: gql`
            mutation RemoveJob($id: uuid!) {
              delete_jobs(where: { id: { _eq: $id } }) {
                returning {
                  id
                }
              }
            }
          `,
          variables: { id: obj.id },
        })
        .then(() => {
          alert("Job Successfully Removed");
        });
    },
  },
  apollo: {
    jobs: {
      query: gql`
        query {
          jobs {
            id
            name
            Employees_aggregate {
              aggregate {
                count
              }
            }
          }
        }
      `,
      subscribeToMore: {
        document: gql`
          subscription {
            jobs {
              id
              name
              Employees_aggregate {
                aggregate {
                  count
                }
              }
            }
          }
        `,
        updateQuery: function (previousResult, { subscriptionData }) {
          this.jobs = subscriptionData.data.jobs;
        },
      },
    },
  },
};
</script>
