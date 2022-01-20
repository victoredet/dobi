<template>
    <div class="nav text-primary fw-bold">
        <div class="col-12 py-1 d-flex justify-content-between border-bottom border-2 shadow-sm">
            <div class="col"> <img src="../assets/logo.jpg" alt=""> </div>
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
        <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Operator Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p><span class="fw-bold">Name:</span></p>
        <p><span class="fw-bold">Email:</span></p>
        <p><span class="fw-bold">Phone:</span></p>
        <p><span class="fw-bold">Address:</span></p>
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
    name:'Nav'
}
</script>
