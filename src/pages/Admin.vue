<template>
    <div class="admin page">
        <div class="col-md-8 col-11 mx-auto">
            <form @submit.prevent="addWeekly" class="col-8 mx-auto border-bottom border-2 py-4">
                <h2 class="text-center text-primary">Add Weekly</h2>
                <div class="form-group my-2">
                    <label>User:</label>
                    <select v-model="user_id" class="form-select">
                        <option  v-for="user in users" :key="user.id" :value="user.id"> {{user.name}} </option>
                    </select>
                </div>

                 <div class="form-group my-2">
                    <label>Date:</label>
                    <input v-model="date" class="form-control" placeholder="" />
                </div>
                <div class="form-group my-2">
                    <label>Gross sales:</label>
                    <input v-model="gross_sales" class="form-control" placeholder="" />
                </div>
                <div class="form-group my-2">
                    <label>Gross Profit:</label>
                    <input class="form-control" v-model="gross_profit" placeholder="" />
                </div>
                <div class="">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>

            <!-- add daily  -->
            <form @submit.prevent="addDaily" class="col-8 mx-auto border-bottom border-2 py-4">
                <h2 class="text-center text-danger">Add Daily</h2>
                <div class="form-group my-2">
                    <label>User:</label>
                    <select v-model="user_id" class="form-select">
                        <option  v-for="user in users" :key="user.id" :value="user.id"> {{user.name}} </option>
                    </select>
                </div>

                 <div class="form-group my-2">
                    <label>Date:</label>
                    <input class="form-control" v-model="date" placeholder="" />
                </div>
                <div class="form-group my-2">
                    <label>Gross sales:</label>
                    <input class="form-control" v-model="gross_sales" placeholder="" />
                </div>
                <div class="form-group my-2">
                    <label>Trend:</label>
                    <input class="form-control" v-model="trend" placeholder="" />
                </div>

                 <div class="form-group my-2">
                    <label>BTC value:</label>
                    <input class="form-control" v-model="btcValue" placeholder="" />
                </div>
                <div class="">
                    <button type="submit" class="btn btn-danger">Add Daily</button>
                </div>
            </form>


            <!-- add product  -->
            <form @submit.prevent="addProduct" class="col-8 mx-auto border-bottom border-2 py-4">
                <h2 class="text-center text-success">Add Product</h2>
                <div class="form-group my-2">
                    <label>User:</label>
                    <select v-model="user_id" class="form-select">
                        <option v-for="user in users" :key="user.id" :value="user.id"> {{user.name}} </option>
                    </select>
                </div>

                 <div class="form-group my-2">
                    <label>Product id:</label>
                    <input class="form-control" v-model="product" placeholder="" />
                </div>

                <div class="form-group my-2">
                    <label>message:</label>
                    <input class="form-control" v-model="message" placeholder="" />
                </div>
                <div class="">
                    <button type="submit" class="btn btn-success">Add Weekly</button>
                </div>
            </form>
            
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default{
    name:'Admin',
    data(){
        return{
            users:{},
            trend:'',
            message:'',
            gross_sales:'',
            gross_profit:'',
            product:'',
            btcValue:''
        }
    },
    async mounted(){
        await axios.get('http://localhost:8000/api/users',{
            headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
        }).then((res)=>{
            this.users = res.data
        }).catch(()=>{
            alert('make sure you have internet')
        })
    },
    methods:{
        async addDaily(){
            await axios.post('http://localhost:8000/api/add_daily',{
                user_id:this.user_id,
                date:this.date,
                gross_sales:this.gross_sales,
                trend:this.trend,
                btcValue:this.btcValue,
            },{
            headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
        }).then((res)=>{
            //this.users = res.data
            alert('successful!')

            this.user_id='',
            this.date ='',
            this.gross_sales='',
            this.btcValue=''
            this.trend=''
        }).catch(()=>{
            alert('make sure you have internet')
        })
        },

        async addWeekly(){
            await axios.post('http://localhost:8000/api/add_weekly',{
                user_id:this.user_id,
                date:this.date,
                gross_sales:this.gross_sales,
                gross_profit:this.gross_profit
            },{
            headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
        }).then((res)=>{
            //this.users = res.data

                alert('successful')
              this.user_id='',
                this.date='',
                this.gross_sales='',
                this.gross_profit=''
        }).catch(()=>{
            alert('make sure you have internet')
        })
        },



        async addProduct(){
            await axios.post('http://localhost:8000/api/add_product',{
                product_id:this.product,
                user_id:this.user_id,
                message:this.message
            },{
            headers:{
                    Authorization: `Bearer ${this.$store.state.token}`
                }
        }).then((res)=>{
            //this.users = res.data

            this.user_id='',
            this.message='',
            this.product='',

            alert('successful')
        }).catch(()=>{
            alert('make sure you have internet')
        })
        }
    }
}
</script>
