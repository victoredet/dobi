<template>
    <div class="dashboard d-flex">
        <div class="col-2">
          <AdminNav/>
        </div>
        <div class="col-10 content animate__animated animate__bounce vh-100 p-4">
            <div class="col-md-9 col-11 mx-auto ">
                <div class="col-12 p-3 d-flex card shadow-sm m-2">
                    <div class="col-10">
                        <h4>Fund users</h4>
                    </div>
                    <div class="fund">
                        <form @submit.prevent="fund">
                            <div class="m-1 form-group">
                                <label>Amount</label>
                                <input class="form-control" type="number" v-model="amount" placeholder="Enter amount"> 
                            </div>
                            <div class="m-1 form-group">
                                <label>select user</label>
                                <select v-model="user" class=" form-select">
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{user.name}}- ${{user.account}}</option>
                                </select>
                            </div>
                            <button class="col-12 btn btn-primary text-white">Proceed</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import AdminNav from '../../components/AdminNav.vue'

export default{
    name:'Deposit',
     components:{
        AdminNav
    },
    data(){
      return{
        users:{},
        user:'',
        amount:0
      }
    },
    async mounted(){
      await axios.get('https://www.app.a1tradefx.com/backend/public/api/users',{
        headers:{
          Authorization: `Bearer ${this.$store.state.token}`
        }
      }).then((res)=>{
        this.users=res.data
      })
    },
     methods:{
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
