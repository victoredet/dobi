<template>
   <div class="d-none d-md-block col-2  vh-100 border-secondary border-end">
			<div class="container text-primary ">
        <!-- dashbord  -->
      
            <div class="p-1 my-2 border-secondary border rounded side-link">
                <router-link to="/dashboard" class="m-1 fw-bold text-white" >Dashboard</router-link>
  		  		</div>


				<div class="p-1 my-2 border-secondary border rounded side-link">
				 <router-link to="/deposit" class="m-1 fw-bold text-white" >Deposit</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					 <router-link to="/withdraw" class="m-1 fw-bold text-white" >Withdraw</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
           <router-link to="/contracts" class="m-1 fw-bold text-white" >Contracts</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/history" class="m-1 fw-bold text-white" >History</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/login" class="m-1 fw-bold text-white" >Sign out</router-link>
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