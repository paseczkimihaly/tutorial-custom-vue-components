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
        async addSnackbar() {
            let id = await this.$store.dispatch("addSnackbar", {
                title: "New snackbar...",
                message: "Hello world, and hello moon, and hi",
			});
			let success = Math.random() > 0.5 ? true : false;
			setTimeout(() => {
				console.log('update');
				this.$store.commit('updateSnackbar',{
					id,
					title:success ? 'Success!': 'Error',
					type:success ? 'success' : 'fail',
					loading:false
				})
			}, 2000);
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
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.site{
    padding: 50px;
	width:100vw;
	height: 100vh;
	background:$secondary;
}
</style>
