import {getLocalUser} from './../../helpers/auth';
const user = getLocalUser();
const state = {
    currentUser: user,
    isLoggedIn: !!user,
    loading: false,
    auth_error: null,
    customers: [],


};


const mutations  = {
    login(state){
        state.loading = true;
        state.auth_error = null;
    },
    loginSuccess(state,payload){
        state.auth_error = null;
        state.isLoading = true;
        state.loading = false;
        state.currentUser = Object.assign({}, payload.user,{token: payload.access_token});
        localStorage.setItem("user",JSON.stringify(state.currentUser))
    },
    loginFailed(state, payload){
        state.loading = false;
        state.auth_error= payload.error;

    },
    logout(state){
        localStorage.removeItem("user");
        state.isLoading = false;
        state.currentUser = null;
    }


};

const getters = {
    isLoading(state){
        return state.loading
    },
    isLoggedIn(state){
        return state.isLoggedIn;
    },
    currentUser(state){
        return state.currentUser;
    },
    authError(state){
        return state.auth_error;
    },
    customers(state){
        return state.customers;
    },

};


const actions = {
    login(context){
        context.commit('login');
    }
};





export default {
    state,
    mutations,
    getters,
    actions,
}
