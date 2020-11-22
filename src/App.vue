<template>
    <Snackbars />
    <div class="site mainBg">
        <div class="navigation">
            <img class="logo" src="@/assets/logo.png" alt="">
            <div class="links">
                <router-link class="link active">Home</router-link>
                <router-link class="link">About</router-link>
                <router-link class="link">Modals</router-link>
                <router-link class="link">Forms</router-link>
            </div>
        </div>
        <div class="main ">
            <div class="texts">
                <p class="title">Custom Vue Components</p>
                <p class="subtitle">Create your own Vue components with VueX and CSS Sass <br> <b> [UNDER CONSTRUCTION]</b> </p>
            </div>
        </div>
        <div class="mainButtons buttonsBg">
            <div class="title">
                <p class="text" shadow-content="BUTTONS">BUTTONS</p>
            </div>
            <p class="subtitle">These button will simulate a normal or an async snackbar behaviour.</p>

            <div class="buttons">
                <custom-button class="bright" @click="addSnackbar()">Message</custom-button>
                <custom-button @click="addSnackbar(false)">Error</custom-button>
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
        async addSnackbar (type) {
            let isAsync = type != null;
            let id = await this.$store.dispatch("addSnackbar", {
                title: type == undefined ? "Message" : "Async Snackbar",
                message: type == undefined ? "Hello world, and hello moon, and hi" : "Waiting for response...",
                loading: isAsync,
            });

            if (isAsync) {

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
    background: $black;
    width: 100vw;
    height: 100vh;
}

.site {
    max-width: 100vw;

    .navigation {
        background: $primary;
        height: 70px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        user-select: none;

        padding: 0px 10vw;

        .logo {
            height: 30px;
            margin-right: 80px;
            filter: hue-rotate(200deg) saturate(2);
        }

        .links {
            width: 500px;
            height: 100%;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .link {
                display:table-cell;
                height: 100%;
                width:100%;
                text-align: center;
                vertical-align:middle;

                &.active{
                    background:$background;
                    color:$secondary;
                }

                &:hover {
                    background: $secondary;
                }
            }

        }

    }

    .main {
        padding: 150px 10vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        .texts {
            width: 100%;

            .title {

                font-size: 72px;
                text-transform: uppercase;
                font-weight: 950;
                filter: drop-shadow(-5px 5px 0px rgba($error, 1));
            }

            .subtitle {
                margin-top: 30px;
                font-size: 24px;
                line-height: 34px;
                text-transform: uppercase;

            }
        }

    }

    .mainButtons {
        background-color: $background;
        border-top: 5px solid $error;
        padding: 100px 10vw;
        padding-bottom: 50px;
        z-index: 1;

        .title {
            position: relative;
            width: 100%;
            font-size: 96px;
            font-weight: 900;

            .text {
                position: reltaive;
                top: 5px;
                left: -5px;
                display: block;

                // color:transparent;
                &:before {
                    content: attr(shadow-content);
                    position: absolute;
                    top: 3px;
                    left: -3px;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background-image: repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(255, 255, 255, .5) 4px, rgba(255, 255, 255, .5) 8px);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

            }

        }

        .subtitle {
            margin: 10px 0px;
            margin-bottom: 20px;
            color: $textSeconday;
        }

        .buttons {

            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            .wrapper {
                position: relative;
                left: -20px;
                margin-right: 20px;
                margin: 20px;
            }
        }
    }
}
</style>
