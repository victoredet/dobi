import Vuex from 'vuex'

export default new Vuex.Store({
    state:{
        phone_email:'',
        otp:'',
        token:'',
        user:{},
        setupProfile:{
            accountType:'',
            userName:'',
            bio:'',
            category:'',
            jobType:'',
            jobDescription:'',
        }
    },
    mutations:{
        updatePhoneEmail(state, user){
            state.phone_email = user
        },
        updateOtp(state, otp){
            state.otp = otp
        },
        updateAccountType(state, accountType){
            state.setupProfile.accountType = accountType
        },
        updateBio(state, user){
            state.setupProfile.userName = user.name, 
            state.setupProfile.bio = user.bio
        },
        updateCategory(state, category){
            state.setupProfile.category = category,
            state.setupProfile.category = category 
        },
        updateJobStats(state, job){
            state.setupProfile.jobType = job.jobType,
            state.setupProfile.jobDescription = job.jobDescription 
        },
        updateToken(state, payload){
            state.token = payload.token,
            state.user = payload.data
        }
    },
    actions:{

    },
    modules:{

    }
})

