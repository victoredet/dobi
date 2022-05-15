<template>
<div class="body">
	<div class="d-none d-md-block nav-top text-center text-white">
		prices
	</div>
	<TopBar/>
	<div class="d-flex">
		<Nav/>
		<MobileNav/>
		<div class="col-12 col-md-10">
			<div class="col-12 text-center"><p class="text-primary"><span class="fa fa-clock"></span> {{new_now}}*</p> </div>
			<!-- user details  -->
			 <div class="d-flex col-11 mx-auto">
				 <div class="col-md-6  container   m-2 py-2 text-white shadow border border-white rounded">
					<div class="col-6">
						<p>Account Balance</p>
						<h3>$7,000  </h3>
					</div>					 
				 </div>
				  <div class="col-md-6 container   text-white m-2 py-2 border border-white rounded">
					 <p>Active Contracts</p>
					 <h3>6</h3>
				 </div>
 			 </div>
			  <!-- coming soon -->
				<h3 class="m-2 text-white text-center">Coming soon to A1TradeFx- NFTs </h3>
			  	<div class="col-11 mx-auto ">
					<div class="coming-soon  d-flex">
						 <div v-for="nft in nfts" :key="nft.symbol"  class="border border-secondary col-md-2 col-4 rounded m-1">
							 <div  class="image">
								<img class="w-100" :src="nft.image" alt="">
							 </div>
							 <p class="small m-2 text-center text-white">{{nft.name}}</p>
						 </div>
					 </div>

				</div>
				<!-- end coming soon -->
				<!-- charts  -->
				<div class="col-11 mx-auto py-3">
					<iframe src="https://bit2me.com/widget/chart/v1?currency=B2M&fiat=USDT" style="display:block;width:100%;height:400px;margin:0 auto;" frameborder="0"></iframe>
				</div>
				<!-- end charts  -->
		</div>
	</div> 
	<div class="position-fixed bottom-0 col-12">
		<iframe src="https://bit2me.com/widget/crypto-carousel/v1" style="display:block;width:100%;height:40px;" frameborder="0"></iframe>
	</div>
</div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import MobileNav from '../components/MobileNav.vue'
import TopBar from '../components/TopBar.vue';
import Nav from '../components/Nav.vue';

export default {
    data() {
        return {
            new_now: "",
            nfts: {}
        }
    },
    async mounted() {
        this.updateTime();
        await axios.get('https://api-mainnet.magiceden.dev/v2/launchpad/collections?offset=0&limit=12').then((res) => {
            this.nfts = res.data;
			console.log(res.data)
        });
    },
    methods: {
        updateTime() {
            setInterval(this.currentTime, 1000);
        },
        currentTime() {
            this.new_now = moment([]);
        }
    },
    components: { MobileNav, TopBar, Nav }
}
</script>
