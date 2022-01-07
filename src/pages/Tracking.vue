<template>
    <div class="tracking-page">
        <div class="col-md-8 col-11 mx-auto">
            <Nav/>
            <div class="content d-flex">
                <div class="">
                    <img src="../assets/dobi.png" alt="">
                </div>
                <div class="form-part container">
                    <form @submit.prevent class="col-9 mx-auto my-4">
                        <div class="form-group">
                            <label>Tracking ID:</label>
                            <input type="text" class="form-control" placeholder="enter your product ID">
                            <button class="btn btn-primary col-12 my-2">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Nav from '../components/Nav.vue'
export default{
    name:'Tracking',
    components:{
        Nav
    }
}
</script>
