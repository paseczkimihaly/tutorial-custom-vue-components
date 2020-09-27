<template>
  <div>
    <button @click="addSnackbar()">Add</button>
    <Snackbars />
  </div>
</template>

<script>
import Snackbars from "@/components/Snackbars";
export default {
  name: "App",
  components: {
    Snackbars,
  },
  methods: {
    addSnackbar() {
      this.$store.dispatch("addSnackbar", {
        title: "New snackbar",
        message: "Hello world",
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
