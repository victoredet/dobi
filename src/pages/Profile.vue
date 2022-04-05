<template>
    <div class="dashboard d-flex">
        <div class="col-2">
            <Nav/>
        </div>
        <div class="col-10 content p-4">
            <div class="col-md-9 col-11 mx-auto ">
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>Brad's Profile</h4>
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
                                    <input class="form-control" type="password" v-model="name">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>Confirm Password</label>
                                    <input class="form-control" type="password" v-model="email">
                                </div>
                            </div>
                            <button class="btn btn-primary text-white col-12 m-2">Update</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'



export default{
    name:'Profile',
    data(){
        return{
            name:this.$store.state.user.name,
            email:this.$store.state.user.email,
            phone:this.$store.state.user.phone,
        }
    },
     components:{
        Nav
    },
    methods:{
        async updatepassword(){
            await axios.post
        }
    }   
}
</script>
<style scoped>
.page{
    overflow: scroll;
}
</style>
