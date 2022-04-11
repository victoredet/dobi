<template>
    <div class="dashboard d-flex">
        <div class=" d-none d-md-block col-md-2">
            <Nav/>
        </div>
        <div class="col-md-10 col-12 content animate__animated animate__bounce  vh-100 p-4">
            <div class="col-md-9 col-12 mx-auto ">
                <div class="col-12 p-3 bg-primary card shadow-sm m-2">
                    <div class="text-center ">
                        <h4 class="text-white ">Use the AI power to your advantage!</h4>
                    </div>
                </div>

                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class=" fund-account bg-white shadow-sm">
                        <div class="row p-2">
                            <div class="">
                            <h4 class="fw-bold m-1">Subcribe to an AI bot</h4>
                                <div class="withdraw-form">
                                    <form @submit.prevent="buyPlan" class="col-12">
                                    <div class="form-group d-flex">
                                        <p class="py-auto m-1">Amount: </p>
                                        <input class="form-control" v-model="amount" type="number" placeholder="Enter amount in USD" >
                                    </div>                  
                                        <p class="small text-danger text-center">*your amount should be equal to or lesser than your account balance</p>
                                    <div class="">
                                         <button type="submit" class="text-white btn btn-primary m-1 col-12 btn-lg">Proceed</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>My Active AI robot trades</h4>
                    </div>
                    <div class="deposit-list row">
                        <div v-for="plan in plans" :key="plan.id" class="col-md-3 col-11 m-2 border-2 card py-2">
                           <h4 class="text-primary">{{plan.plan}}</h4>
                           <p>Amount: ${{plan.amount}}</p>
                           <p>Daily count: {{plan.count}}</p>
                           <p>Profit: {{plan.profit}}</p>
                           <!-- <button class="btn btn-primary text-white">Upgrade</button> -->
                        </div>
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
    name:'Contract',
     components:{
    Nav,
    Bottom
},
     data(){
    return{
      btc:false,
      eth:false,
      amount:0,
      plans:{}
    }
  },
  methods:{
      async buyPlan(){
          if(this.$store.state.user.account<1000){
              alert('Insufficient account balance. Please top-up your account.')
              this.$router.push('/deposit')
              return
          }
          if(this.amount<1000){
              alert('Amount must be higher than $999.')
              return
          }
          await axios.post('https://www.app.a1tradefx.com/backend/public/api/buy_signal/'+this.$store.state.user.id,{
              amount:this.amount,
          },{
               headers:{
                Authorization: `Bearer ${this.$store.state.token}`
                }
          }).then((res)=>{
              this.plans = res.data
              this.amount = 0
              alert('Congratulations! you have subcribed to a new contract')
          })
      }
       
    },
    async mounted(){
      await axios.get('https://www.app.a1tradefx.com/backend/public/api/my_signals/'+this.$store.state.user.id,{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.plans=res.data
      })
    },
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
