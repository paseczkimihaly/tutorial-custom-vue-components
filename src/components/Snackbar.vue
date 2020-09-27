<template>
    <div class="snackbar" :class="snackbar.type">
        <div class="content">
            <div class="title">
                {{ snackbar.title }}
            </div>
            <div class="message">
                {{ snackbar.message }}
            </div>
        </div>
        <div class="buttons">
            <div class="button clear" v-if="!snackbar.loading" @click="removeSnack(snackbar.id)">
                <span class="material-icons">
                    clear
                </span>
            </div>
            <div class="button load" v-if="snackbar.loading">
                <div class="load">
                    <span class="material-icons">
                        bubble_chart
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Snackbar",
    props: {
        snackbar: Object
    },
    methods: {
        removeSnack(id) {
            console.log(id);
            this.$store.commit('removeSnackbar', id)
        }
    }
};
</script>

<style lang="scss" scoped>
.snackbars {
    width: 100%;
    height: 100%;

    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    pointer-events: none;

    padding: 50px;
    z-index: 99;
}

.snackbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: all;
    margin-top: 20px;
    position: relative;
    transition: all 0.2s;

    &:after {
        transition: all 0.2s;
        width: 100px;
        height: 7px;
        background: $error;
        position: absolute;
        top: -7px;
        left: 2px;
        content: '';
        clip-path: polygon(0 0, 1% 0, 100% 100%, 1% 100%);

    }

    &.success {
        &:after {
            height: 0px;
            top: 0px;
        }

        .content {
            background: $success;
            color: $black;
        }

        .buttons {
            .button {
                background: white;
            }
        }
    }

    &.fail {
        &:after {
            height: 0px;
            top: 0px;
        }

        .content {
            background: $error;
            color: $secondary;
        }

        .buttons {
            .button {
                background: white;
            }
        }
    }

    .content {
        min-width: 300px;
        padding: 10px 20px;
        clip-path: polygon(0 0, calc(100% - 10px) 0%, 100% 10px, 100% 100%, 10px 100%, 0% calc(100% - 10px));

        background: $secondary;
        padding-right: 40px;
        transition: all 0.2s;

        .title {
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .message {
            margin-left: 5px;
            font-size: 12px;
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        user-select: none;
        clip-path: polygon(0 0, calc(100% - 10px) 0%, 100% 10px, 100% 100%, 10px 100%, 0% calc(100% - 10px));
        
        transition: all 0.2s;
        transform: translateX(-12px) scale(0.9);

        .button {
            height: 100%;
            width: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: $error;
            transition: all 0.2s;

            &.clear {

                &:hover {
                    background: $secondary;
                    cursor: pointer;
                    color: $error;
                }
            }

            &.load {
                animation: spinner 5s linear 2s infinite alternate;
            }

        }
    }
}
</style>
