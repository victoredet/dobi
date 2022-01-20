<template>
    <div class="nav fw-bold">
        <div class="col-12 py-1 d-flex justify-content-between border-bottom border-2">
            <div class="col"> <img src="../assets/logo.jpg" alt=""> </div>
            

            <!-- desktop view -->
            <div @click="nav=!nav" class="d-md-none">Menu</div>
            <div class="d-none d-md-block">
                <div v-if="!this.$store.state.user.id" class="col-4 d-flex">
                    <div class="col"> <router-link to="/">Tracking</router-link> </div>
                    <div class="col"> <router-link to="/register">Sign Up</router-link> </div>
                    <div class="col"> <router-link to="/login">Log in</router-link> </div>
            </div>


                 <div v-if="this.$store.state.user.id" class="col-4 d-flex">
                <div class="col"> <router-link to="/">Tracking</router-link> </div>
                <div class="col"> <router-link to="/dashboard">Earnings</router-link> </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> {{this.$store.state.user.name}} </button>
            </div>
            </div>
           
        </div>
        <div v-if="nav" class="nav bg-primary col-12 text-center d-md-none">
            <p> <router-link class="btn btn-default text-white" to="/">Tracking</router-link> </p>
            <p> <router-link class="btn btn-default text-white" to="/dashboard">Earnings</router-link> </p>
             <p type="button" class="btn btn-default text-white fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal"> {{this.$store.state.user.name}} </p>
        </div>
        <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Operator Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><span class="fw-bold">Name: {{this.$store.state.user.name}} </span></p>
        <p><span class="fw-bold">Email: {{this.$store.state.user.email}}</span></p>
        <p><span class="fw-bold">Phone: {{this.$store.state.user.phone}}</span></p>
        <p><span class="fw-bold">Address: {{this.$store.state.user.address}}</span></p>
      </div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>
            </div>
    </div>
</template>
<script >
export default{
    name:'Nav',
    data(){
        return{
            nav:false
        }
    }
}
</script>
<style scoped>

</style>