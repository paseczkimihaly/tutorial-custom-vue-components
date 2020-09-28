<template>
    <Snackbars />
    <div class="site mainBg">
        <div class="main ">
            <div class="texts">
                <p class="title">Custom Vue Components</p>
                <p class="subtitle">Create your own Vue components with VueX and CSS Sass</p>
            </div>
        </div>
        <div class="buttons buttonsBg">

            <custom-button @click="addSnackbar()">Add</custom-button>
        </div>
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
                loading:true,
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
    padding: 0;
    margin: 0;
}

#app {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
.site{
    max-width: 100vw;
    
    .main{
    padding:150px 200px;
        // height: 500px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .texts{
            // margin-bottom:150px;

            .title{
                font-size: 72px;
                text-transform: uppercase;
                font-weight: 950;
    	        filter: drop-shadow(-5px 5px 0px rgba($error,1));
            }
            .subtitle{
                font-size: 24px;
                text-transform: uppercase;
    
            }
        }


    }

    .buttons{
        padding:50px;
        height: 500px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
		background-color: $background;

        // clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
    }
}
</style>
