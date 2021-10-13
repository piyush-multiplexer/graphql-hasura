<template>
  <div>
    <h1>Jobs</h1>

    <div v-for="(job, index) in jobs" :key="index">
      <ul>
        <li>{{ job.name }} ({{ job.Employees_aggregate.aggregate.count }})</li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Jobs",
  apollo: {
    jobs: gql`
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
  },
};
</script>
