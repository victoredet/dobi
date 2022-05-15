import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        token:'',
        user:{},
        navShow:'d-none'
    },
    mutations:{

        logoutUser(state){
            state.user = {}
        },
        updateUser(state, payload){
            state.user = payload.user
            state.token = payload.token
        },
        updateUserDetails(state, payload){
            state.user.account = payload.account
            state.user.profit = payload.profit
        },
        showNavShow(state, payload){
            state.navShow = payload
            console.log(payload)
        },
        hideNavShow(state, payload){
            state.navShow = payload
            console.log(state.navShow)
        },
        localUser(state, user){
            state.user = user.user
            state.token = user.token
        },
    },
    actions:{

    },
    modules:{

    }
})

