<template>
    <div class="snackbars">
        <div class="snackbar" v-for="snackbar in getSnackbars" :key="snackbar.id">
            <div class="content">
                <div class="title">
                    {{ snackbar.title }}
                </div>
                <div class="message">
                    {{ snackbar.message }}
                </div>
            </div>
            <div class="buttons">
				<div class="button clear" @click="removeSnack(snackbar.id)">
					<span class="material-icons">
						clear
					</span>
				</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Snackbars",
    computed: {
        getSnackbars() {
            return this.$store.getters.getSnacks;
        },
	},
	methods:{
		removeSnack(id){
			console.log(id);
		}
	}
};
</script>

<style lang="scss" scoped>
.snackbars{
	width:100%;
	height: 100%;
	position:fixed;
	top:0px;
	left:0px;
	display:flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
	pointer-events: none;

	padding:50px;
	z-index: 99;
}
.snackbar{
	display:flex;
	align-items: center;
	justify-content: space-between;
	background:white;
	padding:5px 10px;
	box-shadow: 0px 0px 5px rgba(black,0.1);
	pointer-events: all;
	margin-top:10px;

	.content{
		min-width: 200px;
		.title{
			font-weight: 600;
			font-size: 12px;
		}
		.message{
			font-size: 12px;
		}
	}
	.buttons{
		display:flex;
		text-align: center;

		.button{
			height: 100%;
			width:30px;
		}
	}
}
</style>
