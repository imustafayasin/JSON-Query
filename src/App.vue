<template lang="pug">
.grid
  .g-col-6.border  Col 1
  .g-col-6.border Col 2

  .g-col-6.border Col 3
  .g-col-6.border Col 4
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grid {
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    height: 100%;
    display: grid;
    place-items: center;
  }
}
</style>
