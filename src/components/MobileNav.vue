<template>
    <div :class="this.$store.state.navShow" class=" animate__animated animate__backInLeft  vh-100 col-12 d-md-none">
			<div class="container text-primary ">
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<p class="m-1 fw-bold text-white">Dashboard</p>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<p class="m-1 fw-bold text-white">Deposit</p>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<p class="m-1 fw-bold text-white">Withdraw</p>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<p class="m-1 fw-bold text-white">Contracts</p>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<p class="m-1 fw-bold text-white">History</p>
				</div>
				<div class="p-1 my-2 border-secondary border rounded side-link">
					<p class="m-1 fw-bold text-white">Log Out</p>
				</div>
 			</div>
		</div>
</template>
<script>
export default{
  
}
</script>
