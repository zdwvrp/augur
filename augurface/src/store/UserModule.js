// module for necessary user data
export default {
    namespaced: true, 
    state: {
        loggedIn: false
    }, 
    mutations: {}, 
    actions: {}, 
    getters: {
        isLoggedIn(state) {
            return state.loggedIn;
        }
    }
}