<template>
<div class="">
   <div class="nav py-2  d-flex justify-content-between">
		<div class="col-1 d-md-none">
				<span @click="showbar()" class="text-primary fs-1 fw-bold m-3 fa fa-bars"></span>
		</div>
		 
		<div class="col-2">
			<h3 class="m-3 text-white i">A1TradeFx</h3>
		</div>
		<div class="col-4"></div>
		<div class="col-2 m-2">
			<div class="border-primary rounded border text-white d-flex col-9 ">
				<div class="p-2">
					<router-link to="/profile" class="text-white fw-bold">
					<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#e42575" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: rgb(228, 37, 117);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
					</router-link>
				</div>
				<span class="col btn__primary d-none d-md-block p-2"> <router-link to="/profile" class="text-white fw-bold">My Profile</router-link></span>
			</div>
		</div>
	</div>
	<div class="menu" v-if="toggleBar">
		<div class="col-12 bg-dark animate__animated animate__backInLeft  vh-100 col-12 d-md-none">
			<div class="container text-primary ">
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/dashboard" class="text-white">Dashboard</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/deposit" class="text-white">Deposit</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/withdraw" class="text-white">Withdraw</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/dashboard" class="text-white">Dashboard</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/dashbord" class="text-white">Dashboard</router-link>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/login" class="text-white">Sign Out</router-link>
				</div>
 			</div>
		</div>
	</div>
</div>
</template>
<script>
export default{
    name:'TopBar',
	data(){
		return{
			toggleBar:false
		}
	},
    methods:{
        showbar(){
			this.toggleBar =!this.toggleBar
        }
    }
}
 
</script>
<style scoped>

</style>
