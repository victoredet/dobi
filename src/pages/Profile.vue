<template>
    <div class="profile ">
        <TopBar/>
        <div class="d-flex">
            <Nav/>
            <MobileNav/>
            <div class="col-md-10 col-12 mx-auto content p-4">
                <div class="col-md-9 col-11 mx-auto ">
                    <div class="col-12 p-3 d-flex card shadow-sm m-2">
                        <div class="col-10">
                            <h4>My Profile</h4>
                        </div>
                    </div>
                    <div class="col-12 p-3 d-flex card shadow-sm m-2">
                        <div class="form">
                            <form @submit.prevent="">
                                <div class="row col-12 mx-auto">
                                    <div class="col-md-6 form-group">
                                        <label>Name</label>
                                        <input class="form-control" v-model="name">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label>Email</label>
                                        <input class="form-control" v-model="email">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label>Phone</label>
                                        <input class="form-control" v-model="phone">
                                    </div>
                                </div>
                                <button class="btn btn-primary text-white col-12 m-2">Update</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-12 p-3 d-flex card shadow-sm m-2">
                        <div class="form">
                            <h1 class="text-center">Reset Password</h1>
                            <form @submit.prevent="updatepassword">
                                <div class="row col-12 mx-auto">
                                    <div class="col-md-6 form-group">
                                        <label>New Password</label>
                                        <input class="form-control" type="password" v-model="password">
                                    </div>
                                    <div class="col-md-6 form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control" type="password" v-model="password_confirmation">
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary text-white col-12 m-2">Update</button>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import axios from 'axios'
import TopBar from '../components/TopBar.vue'
import MobileNav from '../components/MobileNav.vue'


export default{
    name:'Profile',
    data(){
        return{
            name:this.$store.state.user.name,
            email:this.$store.state.user.email,
            phone:this.$store.state.user.phone,
            password:'',
            password_confirmation:''
        }
    },
     components:{
    Nav,
    TopBar,
    MobileNav
},
    methods:{
        async updatepassword(){
            if(this.password!=this.password_confirmation){
                alert('Make sure password fields match')
                return
            }

            await axios.post('https://www.app.a1tradefx.com/backend/public/api/update_password/'+this.$store.state.user.id,{
             password:this.password,
             password_confirmation:this.password_confirmation
          },{
               headers:{
                Authorization: `Bearer ${this.$store.state.token}`
                }
          }).then((res)=>{
              this.password = ''
                this.password_confirmation =''
              alert('Password has successfully been updated')
          }).catch(()=>{
              alert('oops, something went wrong')
          });
        }
    }   
}
</script>
<style scoped>
.page{
    overflow: scroll;
}
</style>
