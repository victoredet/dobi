<template>
    <div class="login">
        <div class="col-md-7 col-11 bg-secondary mx-auto py-3">
            <h2 class="text-center text-primary fw-bold">Sign Up</h2>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="text" placeholder="Name" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="text" placeholder="Phone" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="email" placeholder="Email" class="form-control my-2">
            </div>
            <div class="form-group col-md-7 col-11 mx-auto">
                <input type="password" placeholder="Password" class="form-control my-2">
            </div>
            <div class="col-md-7 col-11 mx-auto">
                <button class="btn btn-primary fw-bold col-12">Log In</button>
                <p><router-link to="/login" class="mt-2">Sign in</router-link></p>
            </div>
        </div>
    </div>
</template>