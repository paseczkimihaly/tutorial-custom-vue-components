<template>
    <div class="snackbars">
        <transition-group name="list">
            <Snackbar class="snack" v-for="snackbar in getSnackbars" :key="snackbar.id" :snackbar="snackbar"/>
        </transition-group>
    </div>
</template>

<script>
import Snackbar from '@/components/Snackbar'
export default {
    name: "Snackbars",
    components: {
        Snackbar,
    },
    computed: {
        getSnackbars() {
            return this.$store.getters.getSnacks;
        },
    },
};
</script>

<style lang="scss" scoped>
.list{
    transition: all 0.2s;
}
.list-enter-active,
.list-leave-active {
    transition: all 0.3s;
    // height: unset;
    max-height:100px;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    max-height:0px;
    // overflow: hidden;
    // height: 0px;
    transform: translateX(30px);
}

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

    padding: 2vw;
	z-index: 99;
	
	.snack{
        filter: drop-shadow(-5px 5px 0px rgba($background,0.1));
        transition: all 0.2s;

	}
}
</style>
