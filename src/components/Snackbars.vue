<template>
  <div>
    {{ getSnackbars }}
  </div>
</template>
<script>
export default {
  name: "Snackbars",
  computed: {
    getSnackbars() {
      return this.$store.getters.getSnacks;
    },
  },
};
</script>
<style lang="scss" scoped></style>
