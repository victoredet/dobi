<template>
    <div class="dashboard col-md-10 col-11 mx-auto">
        <Nav/>
        <div class=" page d-flex">
            <div class="col-md-6 col-11 border-end border-4 border-white">
                <h1>Weekly sales report</h1>
                <table class="table table-striped">
                    <thead>
                        <tr class="bg-primary text-white">
                        <th scope="col">Week Ending</th>
                        <th scope="col">Gross sales</th>
                        <th scope="col">Gross Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="week in weekly" :key="week.id">
                        <td class="text-danger"> {{week.date}} </td>
                        <td>${{week.gross_sales}} </td>
                        <td>${{week.gross_profit}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="user-image">
                   
                </div>
            </div>
            <div class="col-md-6 col-11">
                <h1>Daily sales report</h1> 
                <table class="table table-striped">
                    <thead>
                        <tr class="bg-primary text-white">
                        <th scope="col">Date</th>
                        <th scope="col">Gross sales</th>
                        <th scope="col">Trend</th>
                        <th scope="col">BTC value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="dai in daily" :key="dai.id">
                        <td  class=""> {{dai.date}} </td>
                        <td>${{dai.gross_sales}}</td>
                        <td>{{dai.trend}}</td>
                        <td>{{dai.btcValue}} btc</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Button trigger modal -->
    </div>
</template>

<script>
import axios from "axios";
import Nav from '../components/Nav.vue'


export default{
    name:'Dashboard',
     components:{
        Nav
    },
    data(){
        return{
            weekly:{},
            daily:{}
        }
    },
    async mounted(){
         await axios.get('https://operator.dobiatm.com/backend/public/api/weekly/'+this.$store.state.user.id,{
            headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
        }).then((res)=>{
            this.weekly = res.data
        }).catch(()=>{
            alert('something went wrong! Make sure you have internet')
        })


        await axios.get('https://operator.dobiatm.com/backend/public/api/daily/'+this.$store.state.user.id,{
            headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
        }).then((res)=>{
            this.daily = res.data
        }).catch(()=>{
            alert('something went wrong! Make sure you have internet')
        })
    }
}
</script>
<style scoped>
.page{
    overflow: scroll;
}
</style>
