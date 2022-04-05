<template>
    <div class="d-md-none bg-primary text-white shadow-sm position-fixed bottom-0 border-top border-1 col-12">
        <div class="d-flex justify-content-between col-10 mt-2 mx-auto">
            <div @click="this.$router.push('/dashboard')" class="col"><h5><span class="fa fa-home "></span></h5></div>
            <div  @click="this.$router.push('/deposit')" class="col"><h5><span class="fa fa-arrow-down "></span></h5></div>
            <div  @click="this.$router.push('/withdraw')" class="col"><h5><span class="fa fa-arrow-up "></span></h5></div>
            <div  @click="this.$router.push('/contracts')" class="col"><h5><span class="fa fa-file "></span></h5></div>
            <div @click="logout" class="col"><h5><span class="fa fa-sign-out "></span></h5></div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Bottom',
     methods:{
      logout(){
        this.$store.commit('logoutUser')
        localStorage.setItem('@user', JSON.stringify(''));
        this.$router.push('/login');
      }
    }
}
</script>
