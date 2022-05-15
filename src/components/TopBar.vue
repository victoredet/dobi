<template>
   <div class="nav py-2  d-flex justify-content-between">
		<div class="col-1 d-md-none">
			<div v-if="this.$store.state.navshow='d-none'" class="">
				<span @click="showbar()" class="text-primary fs-1 fw-bold m-3 fa fa-bars"></span>
			</div>
			<div v-if="this.$store.state.navshow='col'" class="">
				<span  @click="hidebar()" class="text-white fs-1 fw-bold m-3 fa fa-bars"></span>
			</div>
		</div>
		 
		<div class="col-2">
			<h3 class="m-3 text-white i">A1TradeFx</h3>
		</div>
		<div class="col-4"></div>
		<div class="col-2 m-2">
			<div class="border-primary rounded border text-white d-flex col-9 ">
				<div class="p-2">
					<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#e42575" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: rgb(228, 37, 117);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
				</div>
				<span class="col btn__primary d-none d-md-block p-2"> My Profile</span>
			</div>
		</div>
	</div>
</template>
<script>
export default{
    name:'TopBar',
	data(){
		return{
			toggleBar:'car'
		}
	},
    methods:{
        showbar(){
			 this.$store.commit('showNavShow', 'col')
        },
		hidebar(){
			 this.$store.commit('hideNavShow','d-none')
		}
    }
}
 
</script>

