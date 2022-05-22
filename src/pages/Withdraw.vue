<template>
    <div class="withdraw">
        <TopBar/>
        <div class="d-flex">
            <Nav/>
            <MobileNav/>
        <div class="col-md-10 content animate__animated animate__bounce p-4 vh-100">
            <div class="col-md-9 col-12 mx-auto ">
                <div class="col-12 bg-primary p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4 class="text-white">Easy withdraw</h4>
                    </div>
                </div>
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="">
                        <h4 class="fw-bold m-1">Withdraw Funds </h4>
                        <div class="withdraw-form">
                            <form @submit.prevent="withdraw" class="col-12">
                            <div class="form-group m-1 d-flex">
                                <p class="py-auto m-1">Amount: </p>
                                <input class="form-control" v-model="amount" type="number" placeholder="Enter amount in USD" >
                            </div>
                            <div class="form-group m-1 d-flex">
                                <p class="py-auto m-1">Method:</p>
                                <select v-model="withdrawMethod" class="form-control">
                                <option value=""> </option>
                                <option v-for="currency in currencies" :key="currency.id" :value="currency.id"> {{currency.symbol}}</option>
                                </select>
                            </div>
                            <div v-if="withdrawMethod!=''" class="form-group d-flex">
                                <p class="py-auto m-1">Wallet:</p>
                                <input type="text" v-model="wallet" class="form-control" placeholder="Enter Wallet address of selected method">
                            </div>
                            <small class="text-danger container"><i>make sure to confirm wallet address before proceeding as errors are not reversible</i></small>
                            <button type="submit" class="btn btn-primary m-1 text-white col-12 btn-lg">Proceed</button>
                            </form>
                        </div>
                    </div>
                </div>
   
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>Previous Withdrawals</h4>
                    </div>
                    <div class="deposit-list">
                        <div class="border-start border-5 border-primary py-2 container" v-for="withd in withdrawals" :key="withd.id">
                            <p> 
                                <span class="m-2">Amount:<span class="bg-primary p-1 text-white rounded">${{withd.amount}}</span></span>
                                <span  class="m-2">Status:<span class="bg-primary p-1 text-white rounded">{{withd.status}}</span></span>
                                <span  class="m-2"></span>
                            </p>
                        <hr>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <Bottom/>
        </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import axios from 'axios'
import Bottom from '../components/Bottom.vue'
import TopBar from '../components/TopBar.vue'
import MobileNav from '../components/MobileNav.vue'


export default{
    name:'Withdraw',
     components:{
    Nav,
    Bottom,
    TopBar,
    MobileNav
},
     data(){
    return{
      withdrawMethod:'',
      wallet:'',
      amount:'',
      currencies:{},
      withdrawals:{}
    }
  },
  methods:{
      async withdraw(){
          if(this.amount>this.$store.state.user.profit){
              alert('Insufficient funds')
              return
          }
          axios.post('https://www.app.a1tradefx.com/backend/public/api/withdraw/'+this.$store.state.user.id,{
              method:this.withdrawMethod,
              amount:this.amount,
              wallet:this.wallet
          },{
                headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
          }).then((res)=>{
              this.withdrawals = res.data
              this.withdrawMethod=''
               this.amount=''
              this.wallet=''
              alert('Your request is being processed')

          })
      }
  },
  async mounted(){
    await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((res)=>{
      this.currencies = res.data
    })

    await axios.get('https://www.app.a1tradefx.com/backend/public/api/withdrawals/'+this.$store.state.user.id,{
                headers:{
                Authorization: `Bearer ${this.$store.state.token}`
                }
    }).then((res)=>{
        this.withdrawals = res.data
    })
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
