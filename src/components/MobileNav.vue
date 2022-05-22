<template>
    <div :class="this.$store.state.navShow" class=" animate__animated animate__backInLeft  vh-100 col-12 d-md-none">
			<div class="container text-primary ">
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<router-link to="/dashbord" class="text-white">Dashboard</router-link>
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
</template>
<script>
export default{
  
}
</script>
