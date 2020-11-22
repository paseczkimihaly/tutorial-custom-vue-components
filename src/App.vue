<template>
    <Snackbars />
    <div class="site mainBg">
        <div class="main ">
            <div class="texts">
                <p class="title">Custom Vue Components</p>
                <p class="subtitle">[UNDER CONSTRUCTION] Create your own Vue components with VueX and CSS Sass</p>
            </div>
        </div>
        <div class="mainButtons buttonsBg">
            <div class="title">
                <p class="">BUTTONS</p>
                <p class="linetext">BUTTONS</p>
            </div>
            <div class="buttons">
                <custom-button class="bright" @click="addSnackbar()">Message</custom-button>
                <custom-button @click="addSnackbar(false)">Failed</custom-button>
                <custom-button class="green" @click="addSnackbar(true)">Successful</custom-button>
                <custom-button disabled @click="addSnackbar()">Disabled</custom-button>
                <custom-button loading @click="addSnackbar()">Loading</custom-button>
            </div>
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
        async addSnackbar(type) {
            let isAsync = type != null;
            let id = await this.$store.dispatch("addSnackbar", {
                title: type == undefined ? "Message" : "Async Snackbar",
                message: type == undefined ? "Hello world, and hello moon, and hi" : "Waiting for response...",
                loading: isAsync,
            });

            if(isAsync){

                let success = type;
                setTimeout(() => {
                    console.log('update');
                    this.$store.commit('updateSnackbar', {
                        id,
                        message: success ? 'Success!' : 'Error',
                        type: success ? 'success' : 'fail',
                        loading: false
                    })
                }, 4000);
            }
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

* {
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

.site {
    max-width: 100vw;

    .main {
        padding: 150px 200px;
        // height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .texts {
            // margin-bottom:150px;

            .title {

                font-size: 72px;
                text-transform: uppercase;
                font-weight: 950;
                filter: drop-shadow(-5px 5px 0px rgba($error, 1));
            }

            .subtitle {
                font-size: 24px;
                text-transform: uppercase;

            }
        }

    }

    .mainButtons {
        background-color: $background;
        border-top: 5px solid $error;
        padding: 100px 200px;

        .title {
            position: relative;
            height: 150px;
            p {
                position: absolute;
                top: 5px;
                    left: -5px;

                &.linetext {
                    top: 0px;
                    left:0px;
                }
            }

            font-size: 96px;
            font-weight: 900;
            margin-bottom: 50px;
        }

        .buttons {

            display: flex;
            justify-content: flex-start;
            align-items: flex-start;

            .wrapper {
                margin-right: 40px;
            }
        }

        // clip-path: polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);
    }
}
</style>
