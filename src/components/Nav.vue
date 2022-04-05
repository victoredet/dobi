<template>
   <div class="side-bar bg-white shadow col-12 vh-100">
     <div class="logo bg-primary">
       <h3 class="py-2 text-white text-center py-1">A1tradefx</h3>
     </div>
     <div class="routes col-10 mx-auto">
       <div @click="this.$router.push('/dashboard')" class="rounded r-item-box container ">
         <p class="r-item py-2">Dashboard</p>
       </div>
       <div @click="this.$router.push('/history')" class="rounded r-item-box container ">
         <p class="r-item py-2">Transaction History</p>
       </div>
       <div @click="this.$router.push('/deposit')" class="rounded r-item-box container ">
         <p class="r-item py-2">Deposit</p>
       </div>
       <div @click="this.$router.push('/withdraw')" class="rounded r-item-box container ">
         <p class="r-item py-2">Withdraw</p>
       </div>
       <div @click="this.$router.push('/contracts')" class="rounded r-item-box container ">
         <p class="r-item py-2">Contracts</p>
       </div>
       <div @click="this.$router.push('/profile')" class="rounded r-item-box container ">
         <p class="r-item py-2">Profile</p>
       </div>
       <div @click="logout" class="rounded r-item-box container ">
         <p class="r-item py-2">Log out</p>
       </div>
     </div>

   </div>
</template>
<script >
export default{
    name:'Nav',
    data(){
        return{
            
        }
    },
    async mounted(){
      if(this.$store.state.user.email=='admin@gmail.com'){
        this.$router.push('/admin')
      }
    },
    methods:{
      logout(){
        this.$store.commit('logoutUser')
        localStorage.setItem('@user', JSON.stringify(''));
        this.$router.push('/login');
      }
    }
}
</script>
<style scoped>
.r-item-box:hover{
  background: #124f8f;
  color:white;
  padding-left: 2rem;
  cursor: pointer;
}
</style>