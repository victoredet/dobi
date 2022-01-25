<template>
    <div class="fw-bold">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/"><img src="../assets/logo.jpg" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Tracking</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">Earnings</router-link>
        </li>
        
      </ul>
        <router-link class="btn btn-outline-success" to="/profile">Profile</router-link>
    </div>
  </div>
</nav>


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