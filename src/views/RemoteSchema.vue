<template>
  <div>
    <h1>Remote Schema</h1>
    {{ JSON.stringify(hello) }}
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "RemoteSchema",
  apollo: {
    hello: {
      query: gql`
        query {
          hello
        }
      `,
    },
  },
};
</script>
