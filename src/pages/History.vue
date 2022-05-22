<template>
    <div class="history ">
        <TopBar/>
        <div class="d-flex">
            <Nav/>
            <MobileNav/>
            <div class="col-md-10 col-11 content animate__animated animate__bounce vh-100 p-4">
                <div class="col-md-9 col-11 mx-auto ">
                    <div class="col-12 bg-primary text-white p-3 d-flex card shadow-sm m-2">
                        <div class="col-10">
                            <h4>Transaction History</h4>
                        </div>
                    </div>
                    <div v-for="hist in history" :key="hist.id" class="col-12 p-3 d-flex card shadow-sm m-2">
                        <div class="border-bottom border-2 py-1 shadow-sm">
                            {{hist.message}}
                            <p class="small"><i> {{hist.created_at}} </i></p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Nav from '../components/Nav.vue'
import Bottom from '../components/Bottom.vue'
import MobileNav from '../components/MobileNav.vue'
import TopBar from '../components/TopBar.vue'

export default{
    name:'Deposit',
     components:{
    Nav,
    Bottom,
    MobileNav,
    TopBar
},
    data(){
        return{
            history:{}
        }
    },
    async mounted(){
        await axios.get('https://www.app.a1tradefx.com/backend/pubic/api/notifications/'+this.$store.state.user.id,{
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
        }).then((res)=>{
            this.history = res.data
            res.data.forEach(plan => {
            plan.created_at=moment(plan.created_at).calendar();
        });
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
