<template>
    <div class="login d-flex">
       <div class="d-none d-md-block col-9  shadow-sm photo vh-100">
           <img class="w-75" src="../assets/images/pages/register-v2.svg">
       </div>
       <div class="form col content bg-white vh-100">
            <div class="text-center">
                <img src="../assets/images/illustration/badge.svg">
               </div>
           <div class="p-5">
               <p class=" fs-4"> Financial freedom starts here!</p>
               <p> Sign-up </p>
               <form @submit.prevent="register">
                   <div class="form-group">
                       <label>Name</label>
                       <input class="form-control" v-model="name" required>
                   </div>
                   <div class="form-group">
                       <label>Email</label>
                       <input class="form-control" type="email" v-model="email" required>
                   </div>
                   <div class="form-group">
                       <label>Phone</label>
                       <input class="form-control" v-model="phone"  >
                   </div>
                   <div class="form-group">
                       <label>Country</label>
                       <select v-model="country" class="form-control">
                           <option v-for="country in countries" :key="country.id" :value="country.name">{{country.name}}</option>
                       </select>
                   </div>
                   <div class="form-group">
                       <label>Password</label>
                        <input type="password" v-model="password" required class="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters">
                   </div>
                   <p class="text-danger" v-if="password.length<8 && password!=''">must contain 8 characters</p>
                   <div class="form-group">
                       <label>Confirm Password</label>
                       <input class="form-control" type="password" v-model="confirm_password" required>
                   </div>
                   <p v-if="password==confirm_password && password!=''" class="text-success small">Password fields match. You can proceed</p>
                   <p v-if="password!=confirm_password" class="text-danger small">password field does not match confirm password</p>
                    <div class="form-group">
                       <label>I was referred by:</label>
                       <input class="form-control" v-model="refer"   >
                   </div>
                   <button class="btn btn-primary col-12 mt-2 text-white">Sign-in</button>
                   <p class="mt-1">Already have an account? <router-link to="/login"> Sign in instead</router-link> </p> 
                   
               </form>
           </div>
       </div>
    </div>
</template>
<script>
import axios from "axios";
import validator from 'validator';

export default{
    name:'Register',
    data(){
        return{
            name:'',
            email:'',
            phone:'',
            password:'',
            vall:false,
            confirm_password:'',
            ref:'',
            country:'',
            countries:{}
        }
    },
    async mounted(){
        await axios.get('https://restcountries.com/v2/all').then((res)=>{
            this.countries=res.data
        })
    },
    methods:{
        Password(){
            
            if(validator.isStrongPassword(this.password)==false){
                this.vall=true
            }
        },
         async register(){
             if(!validator.isStrongPassword(this.password)){
                 alert('Password must contain at least 8 aphanumeric and special character values')
             }
                await axios.post('https://www.app.a1tradefx.com/backend/public/api/register',
                 { 
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    country: this.country,
                    refer: this.refer,
                    password:this.password,
                    password_confirmation:this.password
                     })
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
                    alert('oops, something went wrong. please check your connection and credentials')
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