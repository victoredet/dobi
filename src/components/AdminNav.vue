<template>
   <div class="side-bar bg-white shadow col-12 vh-100">
     <div class="logo">
       <h3 class="text-primary text-center py-1">our app</h3>
     </div>
     <div class="routes col-10 mx-auto">
       <div @click="this.$router.push('/admin')" class="rounded r-item-box container ">
         <p class="r-item py-2">Fund</p>
       </div>
       <div @click="this.$router.push('/users')" class="rounded r-item-box container ">
         <p class="r-item py-2">Users</p>
       </div>
       <div @click="this.$router.push('/admin_withdraw')" class="rounded r-item-box container ">
         <p class="r-item py-2">Withdraw</p>
       </div>
       <div @click="this.$router.push('/admin_contracts')" class="rounded r-item-box container ">
         <p class="r-item py-2">Contracts</p>
       </div>
       <div @click="this.$router.push('/admin_deposit')" class="rounded r-item-box container ">
         <p class="r-item py-2">Deposit</p>
       </div>
       <div @click="logout" class="rounded r-item-box container ">
         <p class="r-item py-2">Log out</p>
       </div>
     </div>

   </div>
</template>
<script >
export default{
    name:'AdminNav',
    data(){
        return{
            
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
  background: #7367f0;
  color:white;
  padding-left: 2rem;
  cursor: pointer;
}
</style>