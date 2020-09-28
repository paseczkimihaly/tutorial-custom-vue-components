<template>
    <div class="wrapper" :class="{loading,disabled}">
        <div class="border"></div>
        <div class="button">
            <span v-if="loading" class="material-icons loader">
                hourglass_bottom
            </span>
            <slot v-else class="text">Button</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Button",
    props:{
        loading:Boolean,
        disabled:Boolean
    },
    computed: {

    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    // width: 150px;
    min-width: 170px;
    height: 50px;
    cursor: pointer;
    transition: all 0.2s;

    &.bright{
        .button{
            background:$secondary;
            color:$error;
        }
        .border{
            background:$secondary;
            border-color: $secondary;
        }
        &:hover{
            &:after, &:before{
                background:$error;
            }
            .border{
                background:rgba($secondary,1);
                border-color:transparent;
            }
        }
    }

    &.green{
        .button{
            background:$success;
            color:$background;
        }
        .border{
            background:$success;
            border-color: $success;
        }
        &:hover{
            &:after, &:before{
                background:$secondary;
            }
            .border{
                background:rgba($success,1);
                border-color:transparent;
            }
        }
    }

    &.loading, &.disabled{
        pointer-events: none;
        &:after, &:before{
            background:transparent;
        }
    }
    &.disabled{
        filter: hue-rotate(40deg) contrast(0.5) saturate(0.2);
    }

    .loader{
        animation: spinner 3s infinite linear;
    }

    &:hover {
        filter: drop-shadow(-5px 5px 0px rgba($black, 1));
        transform: translate(2px, -2px);
        transition: all 0.1s;

        &:after {
            top: -5px;
            left: -5px;
            opacity: 1;
            background:$secondary;
        }

        &:before {
            bottom: -5px;
            right: -5px;
            opacity: 1;
            background:$secondary;
        }

        .border {
            background: rgba($error, 1);
            opacity: 1;

            clip-path: polygon(16px 0%,
                    100% 0,
                    100% calc(100% - 16px),
                    calc(100% - 16px) 100%,
                    0 100%,
                    0% 16px);
        }
    }

    &:active {
        transform: translate(1px, -1px);

        .button {
            opacity: 0.5
        }
    }

    .button {
        width: 100%;
        height: 100%;
        user-select: none;
        background: $error;
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: $secondary;
        clip-path: polygon(15px 0%,
                100% 0,
                100% calc(100% - 15px),
                calc(100% - 15px) 100%,
                0 100%,
                0% 15px);
        transition: all 0.2s;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .border {
        transition: all 0.2s;
        z-index: 0;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        position: absolute;
        top: -5px;
        left: -5px;
        background: transparent;
        border: 1px solid $error;
        opacity: 0.2;

        clip-path: polygon(50% 0%,
                100% 0,
                100% 50%,
                50% 100%,
                0 100%,
                0% 50%);
    }

    &:after {
        transition: all 0.2s;
        width: 100%;
        height: 100%;
        content: '';
        top: 0px;
        left: 0px;
        background: transparent;
        position: absolute;
        clip-path: polygon(0 0, 0 10px, 10px 0);
        opacity: 0.5;
    }

    &:before {
        transition: all 0.2s;
        width: 100%;
        height: 100%;
        content: '';
        bottom: 0px;
        right: 0px;
        background: transparent;
        position: absolute;
        clip-path: polygon(100% 100%, calc(100% - 10px) 100%, 100% calc(100% - 10px));
        opacity: 0.2;

    }
}
</style>
