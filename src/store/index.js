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
        }
    },
    actions:{

    },
    modules:{

    }
})

