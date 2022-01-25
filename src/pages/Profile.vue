<template>
    <div class="col-md-8 col-11 mx-auto">
        <Nav/>
        <div class="d-flex">
            <div class="col-md-4 vh-100 bg-primary">
                <div class="py-4 fw-bold text-white text-center">
                    
                </div>
            </div>
            <div class="col-md-8 col-11">
                <h3 class="m-2">Operator Details</h3>
                <div class="card m-3 col-11 col-md-7 container">
                    <h3>Name:</h3>
                    <p>{{this.$store.state.user.name}}</p>
                </div>
                <div class="card m-3 col-11 col-md-7 container">
                    <h3>Email:</h3>
                    <p>{{this.$store.state.user.email}}</p>
                </div>
                <div class="card m-3 col-11 col-md-7 container">
                    <h3>Address:</h3>
                    <p>{{this.$store.state.user.address}}</p>
                </div>
                <div class="card m-3 col-11 col-md-7 container">
                    <h3>Phone:</h3>
                    <p>{{this.$store.state.user.phone}}</p>
                </div>
                <div class="card m-3 container py-2 border-danger">
                    <h4>VALID PURCHASES ARE ONLY MADE BY</h4>  
                    *Filling Purchase Form on Website<br>
                    *Sending email to support on contact@dobiatm.com<br>
                    *Calling our procurement department on 855-201-2047.<br>

                    DOBI will not be held liable for any purchase made through third-party agents.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
export default {
    name:'Profile',
    components:{
        Nav
    },
    beforeCreate(){
    if(!this.$store.state.user.id){
      this.$router.push('/login')
    }
  }
}
</script>
