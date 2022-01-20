<template>
    <div class="login">
        <div class="col-md-7 col-11 bg-secondary mx-auto vh-100 py-3">
            <h2 class="text-center text-primary fw-bold py-2">Sign Up An Operator Account</h2>
            <form @submit.prevent="register()">
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="text" required autofocus placeholder="Name" v-model="name" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="text" required autofocus placeholder="Phone" v-model="phone" class="form-control my-2">
            </div>
              <div class="form-group col-md-7 col-11 mx-auto">
                <input type="text" required autofocus placeholder="address" v-model="address" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="email" required autofocus placeholder="Email" v-model="email" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="password" required autofocus placeholder="Password" v-model="password" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="password" required autofocus placeholder="Confirm Password" v-model="password_confirmation" class="form-control my-2">
            </div>
            <div class="col-md-7 col-11 mx-auto">
                <button class="btn btn-primary fw-bold col-12" type="submit">Submit</button>
                
                <p><router-link to="/login" class="mt-2">Sign in</router-link></p>
            </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    name:'Register',
    data(){
        return{
            name:'',
            phone:'',
            email:'',
            address:'',
            password:'',
            password_confirmation:''
        }
    },
    mounted(){
        // console.log('data', process.env)
    },
    methods:{
        async register(){
            await axios.post('https://operator.dobiatm.com/backend/public/api/register',{
                name:this.name,
                phone:this.phone,
                email:this.email,
                address:this.address,
                password:this.password,
                password_confirmation:this.password_confirmation
            }).then((Response)=>{
                console.log('user',Response.data.user)
                console.log('token',Response.data.token)
                const payload = Response.data

                this.$store.commit('updateUser',payload)
                        
                localStorage.setItem('@user', JSON.stringify(Response.data));
                this.$router.push('/dashboard');
            }).catch(() => {
                    alert('Inputs not valid')
                    // console.log(Response.data); 
                }); 
        }
    }
}
</script>
