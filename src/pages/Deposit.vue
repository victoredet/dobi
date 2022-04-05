<template>
    <div class="dashboard d-flex">
        <div class="d-none d-md-block col-md-2">
            <Nav/>
        </div>
        <div class="col-md-10 col-12 content animate__animated animate__bounce vh-100 p-4">
            <div class="col-md-9 mx-auto ">
                <div class="col-12 bg-primary p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4 class="text-white ">Easy Top-Up</h4>
                    </div>
                   
                </div>
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <p>Your Trade Statistics</p>
                    <div class="">
                        <h4 class="fw-bold">Fund Your Account </h4>
                        <div class="my-1 col-12">
                            <input type="" v-model="amount" placeholder="Enter amount" class="form-control">
                        </div>
                        <div v-if="amount!=''" class="">
                            <p>choose payment method</p>
                            <div class="d-flex justify-content-between col-12">
                            <button @click="btc=!btc, eth=false" class="btn btn-primary text-white">Bitcoin</button>
                            
                            <button @click="eth=!eth, btc=false" class="btn btn-primary text-white">Ethereum</button>
                            </div>
                            <div  class="copy wallet">
                            <p v-if="btc" class="my-2"> <span class="fw-bold">BTC</span> bc1qk0uvywzq3dyfn00qhlxwzar3ajnseuwuqu247g
                            <button class="px-1" @click="copyBtc" >Copy </button> </p>

                            <p v-if="eth" class="my-2"> <span class="fw-bold">ETH</span> 0x0a347f945F8605068F7aCd53de253E9f26052098 <button class="px-1" @click="copyEth">Copy</button></p>
                            </div>
                            <button v-if="amount" @click="fund" class="btn btn-success col-12 m-1 ">Proceed</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>Previous Deposits</h4>
                    </div>
                    <div class="deposit-list">
                        <div v-for="deposit in deposits" :key="deposit.id" class="border  border-1 rounded m-1 border-primary py-2 container">
                            <p>Amount: ${{deposit.amount}}</p>
                            <p>Status: <span class="p-1 bg-primary rounded fw-bold text-white">{{deposit.status}}</span> </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <Bottom/>
    </div>
</template>

<script>
import axios from 'axios';
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue';

export default{
    name:'Deposit',
     components:{
    Nav,
    Bottom
    },
     data(){
    return{
      btc:false,
      eth:false,
      amount:'',
      deposits:{}
    }
  },
  async mounted(){
      await axios.get('https://www.app.a1tradefx.com/backend/public/api/my_deposit/'+this.$store.state.user.id,{
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
        }).then((res)=>{
            this.deposits = res.data
        })
  },
  methods:{
    async fund(){
        axios.post('https://www.app.a1tradefx.com/backend/public/api/deposit/'+this.$store.state.user.id,{amount:this.amount},{
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
        }).then((res)=>{
            this.deposits = res.data
            this.amount = ''
             alert('your request to fund is being processed');
        })
    },
    async copyBtc(){
      try {
        await navigator.clipboard.writeText('bc1qk0uvywzq3dyfn00qhlxwzar3ajnseuwuqu247g');
        alert('Wallet address copied');
      } catch($e) {
            alert('oops, something went wrong');
            }
    },
     async copyEth() {
            try {
                  await navigator.clipboard.writeText('0x0a347f945F8605068F7aCd53de253E9f26052098');
                  alert('Wallet address copied');
            } catch($e) {
            alert('oops, something went wrong');
            }
        },
  }   
}
</script>
<style scoped>
 .content{
    overflow: scroll;
}


 /* Hide scrollbar for Chrome, Safari and Opera */
.content::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.content {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 
</style>
