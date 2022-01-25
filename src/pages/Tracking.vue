<template>
    <div class="tracking-page">
        <div class="col-md-8 col-11 mx-auto">
            <Nav/>
            <div class="content d-flex">
                <div class="d-none d-md-block">
                    <img src="../assets/dobi.png" alt="">
                </div>
                <div class="form-part container">
                    <form @submit.prevent class="col-9 mx-auto">
                        <form @submit.prevent="getProduct" class="form-group py-5">
                            <label>Tracking ID:</label>
                            <input type="text" class="form-control" v-model="product_id" placeholder="enter your product ID">
                            <button class="btn btn-primary col-12 my-2 " type="submit">Search</button>
                        </form>
                    </form>
                    <hr>
                    <h2 class="text-center">search result</h2>
                        <div v-if="product" class="search result">
                            <div class="card container">
                                <div class=""> 
                                     <h1>{{product.product_id}} </h1>
                                    <p v-html="product.message"></p>
                                </div>
                            </div>
                        </div>

                         <div class="card m-3 container py-2 border-danger">
                    <h5>VALID PURCHASES ARE ONLY MADE BY</h5>  
                    *Filling Purchase Form on Website<br>
                    *Sending email to support on contact@dobiatm.com<br>
                    *Calling our procurement department on 855-201-2047.<br>

                    DOBI will not be held liable for any purchase made through third-party agents.
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import axios from 'axios'
export default{
    name:'Tracking',
    components:{
        Nav
    },
    data(){
        return{
            product_id:'',
            product:{}
        }
    },
    methods:{
        async getProduct(){
         await axios.get('https://operator.dobiatm.com/backend/public/api/product/'+this.product_id,{
                product_id:this.product_id
            }).then((res)=>{
                this.product = res.data
            })
        }
    }
}
</script>
