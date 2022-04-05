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
               <p class=" fs-4">Welcome Champion!</p>
               <p> Sign-in to your account </p>
               <form @submit.prevent="login">
                   <div class="form-group">
                       <label>Email</label>
                       <input class="form-control" type="email" required v-model="email">
                   </div>
                   <div class="form-group">
                       <label>Password</label>
                       <input class="form-control" type="password" v-model="password">
                   </div>
                   <router-link to="/forgot_password">Forgot password?</router-link>
                   <button class="btn btn-primary col-12 mt-2 text-white">Sign-in</button>
                   <p class="mt-1">New on our platform? <router-link to="/register">Create an account</router-link> </p> 
               </form>
           </div>
       </div>
    </div>
</template>
<script>
import axios from "axios";

export default{
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
         async login(){
                await axios.post('https://www.app.a1tradefx.com/backend/public/api/login',
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