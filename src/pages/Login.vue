<template>
    <div class="login">
        <div class="col-md-7 col-11 bg-secondary mx-auto py-3">
            <h2 class="text-center text-primary fw-bold">Sign in</h2>
            <form @submit.prevent="login">
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="email" v-model="email" placeholder="Email" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="password" v-model="password" placeholder="Password" class="form-control my-2">
            </div>
            <div class="col-md-7 col-11 mx-auto">
                <button class="btn btn-primary fw-bold col-12">Log In</button>
            <p><router-link to="/register" class="mt-2">Sign Up</router-link></p>
            </div>
            </form>
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
                await axios.post('http://localhost:8000/api/login',
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
