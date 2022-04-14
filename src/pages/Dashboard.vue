<template>
    <div class="dashboard d-flex">
        <div class="d-none d-md-block col-2">
            <Nav/>
        </div>
        <div class="col-md-10 container pb-5 content vh-100">
             <div class="col-12 bg-primary  card shadow-sm m-2">
                <iframe src="https://bit2me.com/widget/crypto-carousel/v1" style="display:block;width:100%;height:40px;" frameborder="0"></iframe>
            </div>
             <div class="col-12 bg-primary animate__animated animate__bounce  card shadow-sm m-2">
                <h4 class="text-white p-2">Deligence with AI powerred trade</h4>
            </div>
            <div class="row col-12 py-2">
                <div class="col-md-3 m-2">
                    <div class="py-2 container bg-white border-5 border-bottom border-primary rounded shadow">
                        <p class="fw-bold">Account Balance</p>
                        <h3>${{this.$store.state.user.account}}</h3>
                    </div>
                </div>
                 <div class="col-md-3 m-2">
                    <div class="py-2 container bg-white border-5 border-bottom border-primary rounded shadow">
                        <p class="fw-bold">Profit Balance</p>
                        <h3>${{this.$store.state.user.profit}}</h3>
                    </div>
                </div>
                 <div class="col-md-3 m-2">
                    <div class="py-2 container bg-white border-5 border-bottom border-primary rounded shadow">
                        <p class="fw-bold">Active Signals</p>
                        <h3> {{signals.length}} </h3>
                    </div>
                </div>
                <div class="col-md-3 m-2">
                    <div class="py-2 container bg-white border-5 border-bottom border-primary rounded shadow">
                        <p class="fw-bold">Active Contracts</p>
                        <h3> {{plans.length}} </h3>
                    </div>
                </div>
                  
               

            </div>
            <div class="chart container bg-white col-12 pb-5">
                <div class="col-12">
                    <iframe src="https://bit2me.com/widget/chart/v1?currency=B2M&fiat=USDT" style="display:block;width:100%;height:400px;margin:0 auto;" frameborder="0"></iframe>
                </div>
                <div class=" py-1 bg-primary container">
                    <p class="m-1 fw-bold fs-5 col-12 text-white text-center">Trade Statistics</p> 
                </div>
                <div class="col-12">
                    <div v-for="coin in coins" :key="coin.id" class="d-flex border-1 border">
                        <div class="text-center col-2 m-1"><img :src="coin.image" class="w-25" /> </div>
                        <div class="col-4 m-1 fw-bold">{{coin.name}}</div>
                        <div class="col-3 m-1">${{coin.current_price}}</div>
                    </div>
                </div>
            </div>
        </div>
        <Bottom/>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import axios from 'axios'
import Bottom from '../components/Bottom.vue'


export default{
    name:'Dashboard',
    data(){
        return{
            coins:{},
            signals:{},
            plans:{}
        }
    },
     components:{
    Nav,
    Bottom
},
    async mounted(){

         await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false').then(res=>{
            this.coins = res.data
        })

        await axios.get('https://www.app.a1tradefx.com/backend/public/api/my_signals/'+this.$store.state.user.id,{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.signals=res.data
      })

       await axios.get('https://www.app.a1tradefx.com/backend/public/api/my_plans/'+this.$store.state.user.id,{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.plans=res.data
      })
  
        if(!this.$store.state.user.name){
            this.$router.push('/login')
        }
         await axios.get('https://www.app.a1tradefx.com/backend/public/api/user/'+this.$store.state.user.id,{
               headers:{
                Authorization: `Bearer ${this.$store.state.token}`
                }
          }).then((res)=>{
              let user = res.data
              this.$store.commit('updateUserDetails', user)
          })
    }
   
}
</script>
<style scoped>
 .content{
    overflow: scroll;
}

 
.content::-webkit-scrollbar {
  display: none;
}

.content {
  -ms-overflow-style: none;  
  scrollbar-width: none;  
} 
</style>
