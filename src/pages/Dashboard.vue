<template>
<div class="body">
	<div class="nav-top text-center text-white">
		
	</div>
	<div class="nav py-2  d-flex justify-content-between">
		<div class="col-2">
			<h1 class="m-2 text-white i">A1TradeFx</h1>
		</div>
		<div class="col-4"></div>
		<div class="col-2 m-2">
			<div class="border-primary rounded border text-white d-flex col-9 ">
				<div class="p-2">
					<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" color="#e42575" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: rgb(228, 37, 117);"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
				</div>
				<span class="col btn__primary d-none d-md-block p-2"> My profile</span>
			</div>
		</div>
	</div>
	<div class="d-flex">
		<div class="d-none d-md-block col-2  vh-100 border-5 border-end">
			<div class="container text-primary ">
				<div class="p-1 my-2 border-1 border rounded side-link">
					<p class="m-1 fw-bold text-white">Dashboard</p>
				</div>
				<div class="p-1 my-2 border-1 border rounded side-link">
					<p class="m-1 fw-bold text-white">Deposit</p>
				</div>
				<div class="p-1 my-2 border-1 border rounded side-link">
					<p class="m-1 fw-bold text-white">Withdraw</p>
				</div>
				<div class="p-1 my-2 border-1 border rounded side-link">
					<p class="m-1 fw-bold text-white">Contracts</p>
				</div>
				<div class="p-1 my-2 border-1 border rounded side-link">
					<p class="m-1 fw-bold text-white">History</p>
				</div>
				<div class="p-1 my-2 border-1 border rounded side-link">
					<p class="m-1 fw-bold text-white">Log Out</p>
				</div>
 			</div>
		</div>
		<div class="col">
			<div class="col-12 text-center"><p class="text-primary"><span class="fa fa-clock"></span> {{new_now}}*</p> </div>
			 <div class="container row">
				 <div class="col-md-5 m-2 py-2 text-white shadow border border-white rounded">
					<div class="col-6">
						<p>Account Balance:</p>
						<h3>$7,000  </h3>
					</div>					 
				 </div>
				  <div class="col-md-5 text-white m-2 py-2 border border-white rounded">
					 <p>Active Contracts:</p>
					 <h3>6</h3>
				 </div>
			 </div>
		</div>
		
	</div> 
</div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'

export default {
	data(){
		return{
			new_now:'',
			nfts:{}
 		}
	},
	async mounted(){
		this.updateTime()
		await axios.get().then((res)=>{
			this.nfts = res.data
		})
	},
	methods:{
		updateTime(){
			setInterval(this.currentTime,1000)
		},
		currentTime(){
			this.new_now = moment([])
		}
	}
}
</script>
