<template>
    <div class="dashboard d-flex">
        <div class="col-2">
          <AdminNav/>
        </div>
        <div class="col-10 content animate__animated animate__bounce vh-100 p-4">
            <div class="col-md-9 col-11 mx-auto ">
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>All Signals</h4>
                    </div>
                   <div v-for="signal in plans" :key="signal.id" class="user m-1 container col-12 border border-2 py-2">
                     <div v-for="user in users" :key="user.id" class="">
                         <p v-if="user.id==signal.user_id">Name: {{user.name}}</p>
                         <p v-if="user.id==signal.user_id">Email: {{user.email}}</p>
                     </div>
                      
                     <p>Amount: ${{plan.price}} </p>
                    <form @submit.prevent="updateSignal">
                     <p>profit: ${{signal.profit}}</p>

                       <input @change="signal_id=Signal.id" class="form-control" v-model="profit" > 
                     <p>count: {{signal.count}} </p>
                       <input @change="signal_id=signal.id" class="form-control" v-model="count" > 
                        <button type="submit" class="btn btn-primary">Update</button>

                    </form>
                     <p>date: {{signal.created_at}} </p>
                   </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment' 
import AdminNav from '../../components/AdminNav.vue'

export default{
    name:'AdminSignals',
     components:{
        AdminNav
    },
    data(){
      return{
        signals:{},
        users:{},
        profit:'',
        count:'',
        signal_id:''
      }
    },
    async mounted(){
      await axios.get('https://www.app.a1tradefx.com/backend/public/api/get_signals',{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.plans=res.data
        res.data.forEach(plan => {
            plan.created_at=moment(plan.created_at).format('LLL');
        });
      })

       await axios.get('https://www.app.a1tradefx.com/backend/public/api/users',{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.users=res.data
      })
    },
     methods:{
        async updatePlanSignal(){
          await axios.post('https://www.app.a1tradefx.com/backend/public/api/update_signal',{
            signal_id:this.signal_id,
            count:this.count,
            profit:this.profit,
          },{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.signals=res.data
        res.data.forEach(signal => {
            signal.created_at=moment(plan.created_at).calendar();
        });
      })
        },
        async daily(){
             await axios.get('https://www.app.a1tradefx.com/backend/public/api/daily',{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.plans=res.data
        res.data.forEach(plan => {
            plan.created_at=moment(plan.created_at).calendar();
        });
      })
         },
       async fund(){
         await axios.post('https://www.app.a1tradefx.com/backend/public/api/fund/'+this.user,{
           user:this.user,
           amount:this.amount
         },{
           headers:{
             Authorization: `Bearer ${this.$store.state.token}`
           }
         }).then((res)=>{
           this.amount = ''
           this.users = res.data
           alert('successful')
         })
       },
      logout(){
        this.$store.commit('logoutUser')
        localStorage.setItem('@user', JSON.stringify(''));
        this.$router.push('/login');
      }
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
