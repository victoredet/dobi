<template>
    <div class="dashboard d-flex">
        <div class="col-2">
          <AdminNav/>
        </div>
        <div class="col-10 content animate__animated animate__bounce vh-100 p-4">
            <div class="col-md-9 col-11 mx-auto ">
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <button class="btn btn-danger text-white m-1" @click="daily">Daily update</button>
                        <h4>All Contracts</h4>
                    </div>
                   <div v-for="plan in plans" :key="plan.id" class="user m-1 container col-12 border border-2 py-2">
                     <div v-for="user in users" :key="user.id" class="">
                         <p v-if="user.id==plan.user_id">Name: {{user.name}}</p>
                         <p v-if="user.id==plan.user_id">Email: {{user.email}}</p>
                     </div>
                     <p>Plan: {{plan.plan}} </p>
                     <p>Amount: ${{plan.amount}} </p>
                     <p>Daily profit: ${{plan.daily}} </p>
                    <form @submit.prevent="updatePlan">
                     <p>profit: ${{plan.profit}}</p>

                       <input @change="plan_id=plan.id" class="form-control" v-model="profit" > 
                     <p>count: {{plan.count}} </p>
                       <input @change="plan_id=plan.id" class="form-control" v-model="count" > 
                        <button type="submit" class="btn btn-primary">Update</button>

                    </form>
                     <p>date: {{plan.created_at}} </p>
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
    name:'AdminContracts',
     components:{
        AdminNav
    },
    data(){
      return{
        plans:{},
        users:{},
        profit:'',
        count:'',
        plan_id:''
      }
    },
    async mounted(){
      await axios.get('https://www.app.a1tradefx.com/backend/public/api/get_plans',{
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
        async updatePlan(){
          await axios.post('https://www.app.a1tradefx.com/backend/public/api/update_plan',{
            plan_id:this.plan_id,
            count:this.count,
            profit:this.profit,
          },{
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
