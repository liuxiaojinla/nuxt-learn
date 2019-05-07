import Vuex from 'vuex';

export default new Vuex.Store({
	state: {
		token: ''
	},
	mutations: {
		setToken(state, token) {
			state.token = token
		}
	}
});
