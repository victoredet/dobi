<template>
    <div class="login d-flex">
       <div class="d-none d-md-block col-9  shadow-sm photo vh-100">
           <img class="w-75" src="../assets/images/pages/login-v2.svg">
       </div>
       <div class="form col bg-white vh-100">
           <div class="p-5">
               <div class="text-center">
                <img src="../assets/images/illustration/badge.svg">
               </div>
               <p class=" fs-4">Reset Password?</p>
               <p>We'll send you an email to help you reset </p>
               <form @submit.prevent="forgot">
                   <div class="form-group">
                       <label>Email</label>
                       <input class="form-control" type="email" v-model="email">
                   </div>
                   <button class="btn btn-primary col-12 mt-2 text-white">Reset</button>
                   <p class="mt-1">New on our platform? <router-link to="/register">Create an account</router-link> </p> 
               </form>
           </div>
       </div>
    </div>
</template>
<script>
import axios from "axios";

export default{
    name:'Forgot',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
         async forgot(){
                await axios.post('https://www.app.a1tradefx.com/backend/public/api/forgot_password',
                 { 
                    email: this.email,
                    password:this.password })
                    .then((Response) =>{
                        // const { data,token } = Response.data;
                         console.log('user',Response.data.user)
                         console.log('token',Response.data.token)
                        const payload = Response.data

                        this.$store.commit('updateUser',payload)
                        
                        localStorage.setItem('@user', JSON.stringify(Response.data));
                        this.$router.push('/dashboard');
                        
                })
                .catch(function () {
                    alert('oops, invalid log in details')
                    // this.error_msg = Response.message
                    // console.log(Response.data.msg); 
                });               
            }
    }
}
</script>

<style scoped>
.content{
    overflow: scroll;
}

 /* Hide scrollbar for Chrome, Safari and Opera */
.content::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.content {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 
</style>