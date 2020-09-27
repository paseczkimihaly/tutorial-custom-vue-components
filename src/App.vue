<template>
    <Snackbars />
    <div class="site">
        <button @click="addSnackbar()">Add</button>
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
html,
body {
    padding: 0;
    margin: 0;
}

*{
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.site{
    padding: 50px;
	width:100vw;
	height: 100vh;
	background:$background;
}
</style>
