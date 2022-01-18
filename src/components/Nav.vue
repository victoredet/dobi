<template>
    <div class="nav text-primary fw-bold">
        <div class="col-12 py-1 d-flex justify-content-between border-bottom border-2 shadow-sm">
            <div class="col"> <img src="../assets/logo.jpg" alt=""> </div>
            <div v-if="!this.$store.state.user.id" class="col-4 d-flex">
                <div class="col"> <router-link to="/register">Sign Up</router-link> </div>
                <div class="col"> <router-link to="/login">Log in</router-link> </div>
            </div>


            <div v-if="this.$store.state.user.id" class="col-4 d-flex">
                <div class="col"> <router-link to="/dashboard">dashboard</router-link> </div>
            </div>
        </div>
    </div>
</template>
<script >
export default{
    name:'Nav'
}
</script>
