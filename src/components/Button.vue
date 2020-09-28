<template>
    <div class="wrapper">
        <div class="border"></div>
        <div class="button" @click="$emit('click')">
            <p class="text">lol</p>
            <!-- <slot class="text">Button</slot> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Button",
    computed: {

    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    position:relative;
    width:150px;
    height: 50px;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(-5px 5px 0px rgba($black, 1));
        .button {
            color: $error;
            background: $secondary;
        }
        &:after{
            top:0px;
            left:0px;
        }
        .border{
            // transform: scale(1.1, 1.2);
            background:rgba($error,1);
            opacity: 1;

            clip-path: polygon(12px 0%,
                100% 0,
                100% calc(100% - 12px),
                calc(100% - 12px) 100%,
                0 100%,
                0% 12px);
        }
    }

    .button {
        width:100%;
        height: 100%;
        user-select: none;
        background: $error;
        font-size: 16px;
        font-weight: 800;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        color: $secondary;
        clip-path: polygon(10px 0%,
                100% 0,
                100% calc(100% - 10px),
                calc(100% - 10px) 100%,
                0 100%,
                0% 10px);
        transition: all 0.2s;

        display:flex;
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
        background:transparent;
        border:1px solid $error;
        opacity: 0.2;

        clip-path: polygon(40px 0%,
                100% 0,
                100% calc(100% - 40px),
                calc(100% - 40px) 100%,
                0 100%,
                0% 40px);
        }

        &:after{
            transition:all 0.2s;
            width:100%;
            height: 100%;
            content:'';
            top:0px;
            left:0px;
            background:$error;
            position:absolute;
            clip-path: polygon(0 0, 0 6px, 6px 0);
        }

        &:before{
            transition:all 0.2s;
            width:100%;
            height: 100%;
            content:'';
            bottom:0px;
            right:0px;
            background:$error;
            position:absolute;
            clip-path: polygon(100% 100%, calc(100% - 6px) 100%, 100% calc(100% - 6px));
        }
}
</style>
