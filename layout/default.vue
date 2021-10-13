<template>
  <div class="container">
    <main>
      <nuxt class="page" />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: "Nuxt3 with GraphQL",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");
body {
  margin: 0;
  background: #efefe6;
  color: #003c3c;
  font-family: Quicksand, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
