import { createStore } from "vuex";
import Vue from 'vue'
export default createStore({
	state: {
		snackbars: [],
	},
	getters: {
		getSnacks: (state) => {
			return state.snackbars;
		},
	},
	mutations: {
		pushSnackbar(state, payload) {
			state.snackbars.push(payload);
		},
		removeSnackbar(state, snackId) {
			let snackIndex = state.snackbars.findIndex((snack) => {
				return snack.id == snackId;
			});
			state.snackbars.splice(snackIndex, 1);
		},
		updateSnackbar(state, update) {
			let snackIndex = state.snackbars.findIndex((snack) => {
				return snack.id == update.id;
			});
			let updated = {
				...state.snackbars[snackIndex],
				...update
			};
			console.log(updated);
			state.snackbars.splice(snackIndex, 1, updated);
		},
	},
	actions: {
		addSnackbar(context, payload) {
			let snackbar = {
				title: "Default title",
				message: "Default message",
				loading: true,
				id: Date.now(),
			};

			snackbar = Object.assign({}, snackbar, payload);
			context.commit( "pushSnackbar", snackbar );
			return snackbar.id
		},
	},
});
