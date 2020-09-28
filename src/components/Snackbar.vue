<template>
    <div class="snackbar" :class="snackbar.type">
        <div class="content">
            <div class="timer" v-if="timer"></div>
            <div class="title">
                {{ snackbar.title }}
            </div>
            <div class="message">
                {{ snackbar.message }}
            </div>
        </div>
        <div class="buttons">
            <transition name="button">
                <div class="button clear" v-if="!snackbar.loading" key="delete" @click="removeSnack(snackbar.id)">
                    <span class="material-icons">
                        clear
                    </span>
                </div>
            </transition>
            <transition name="button">
                <div class="button" v-if="snackbar.loading" key="loading">
                    <div class="load">
                        <span class="material-icons">
                            hourglass_bottom
                        </span>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "Snackbar",
    props: {
        snackbar: Object
    },
    data(){
        return {
            timer:null
        }
    },
    created(){
        if(!this.snackbar.loading){
            this.attachTimer()
        }
    },
    
    watch:{
        isLoading(value){
            if(!value && !this.timer){
                this.attachTimer();
            }
        }
    },
    computed:{
        isLoading(){
            return this.snackbar.loading
        }
    },
    methods: {
        removeSnack(id) {
            console.log(id);
            this.$store.commit('removeSnackbar', id)
        },
        attachTimer(){
            this.timer = setTimeout(() => {
                this.removeSnack(this.snackbar.id)
            }, 5000);
        }
    },
    beforeUnmount(){
        clearTimeout(this.timer);
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
    margin-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    pointer-events: all;
    margin-top: 20px;
    position: relative;
    transition: all 0.2s;
    position:relative;

    .timer{
        width:100%;
        height: 100%;
        background:rgba(black,0.05);
        mix-blend-mode: multiply;
        position:absolute;
        bottom:0px;
        left:0px;
        z-index: 2;
        animation:load 9.2s both;

        @keyframes load{
            from{
                width:0%;
            }
            to{
                width:100%;
            }
        }
    }

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
        // position:relative;
        // left:100%;
        animation: buttonIn 0.2s 0.1s both;

        @keyframes buttonIn {
            from{
                transform: translateX(-12px) scale(1.2);
                opacity:0;
            }
            to{
                transform: translateX(-12px) scale(0.9);
                opacity:1;

            }
        }

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

            .load {
                animation: shake-bottom 2s linear infinite alternate ;
                display:flex;
                justify-content: center;
                align-items: center;
            }

        }
    }
}
.button-enter-active,
.button-leave-active {
    transition: all 0.3s;
}

.button-enter-from,
.button-leave-to {
    position:absolute;
    opacity: 0;
    transform: scale(0.8);
}
</style>
