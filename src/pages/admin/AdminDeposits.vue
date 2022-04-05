<template>
    <div class="dashboard d-flex">
        <div class="col-2">
          <AdminNav/>
        </div>
        <div class="col-10 content animate__animated animate__bounce vh-100 p-4">
            <div class="col-md-9 col-11 mx-auto ">
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>All Deposits</h4> 
                    </div>
                   <div v-for="deposit in deposits" :key="deposit.id" class="user m-1 container col-12 border border-2 py-2">
                     <div v-for="user in users" :key="user.id" class="">
                         <p v-if="user.id==deposit.user_id">Name: {{user.name}}</p>
                         <p v-if="user.id==deposit.user_id">Email: {{user.email}}</p>
                     </div>
                     <p>Amount: ${{deposit.amount}} </p>
                     <p>Status: {{deposit.status}} <span @click="approved(deposit.id)" class="btn m-1 btn-success">Approved</span> <span @click="declined(deposit.id)" class="btn m-1 btn-danger">Declined</span></p>
                     <p>date: {{deposit.created_at}} </p>
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
        deposits:{},
        users:{}
      }
    },
    async mounted(){
      await axios.get('https://www.app.a1tradefx.com/backend/public/api/get_deposits',{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.deposits=res.data
        res.data.forEach(deposit => {
            deposit.created_at=moment(deposit.created_at).calendar();
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
         async approved(id){
             await axios.post('https://www.app.a1tradefx.com/backend/public/api/update_deposits/'+id,{
                 status:'Approved'
             },{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.deposits=res.data
         res.data.forEach(deposit => {
            deposit.created_at=moment(deposit.created_at).calendar();
        });
      })
         },
         async declined(id){
             await axios.post('https://www.app.a1tradefx.com/backend/public/api/update_deposits/'+id,{
                 status:"Declined"
             },{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.deposits=res.data
         res.data.forEach(deposit => {
            deposit.created_at=moment(deposit.created_at).calendar();
        });
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
