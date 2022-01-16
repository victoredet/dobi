import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        token:'',
        user:{}
    },
    mutations:{
        updateUser(state, payload){
            state.user = payload.user
            state.token = payload.token
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

