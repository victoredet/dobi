<script>
export default{
  name:'App',
   async mounted(){
      let user = await localStorage.getItem('@user');
      user = JSON.parse(user);
      // console.log('user', user);

      if (user) {
        // console.log('user',user.user)
        // console.log('token',user.token)

        this.$store.commit('localUser', user);
      }
    }
}
</script>

<template>
  <router-view/>
</template>

<style lang="scss">
@import './sass/app.scss';
a{
  text-decoration: none;
}
</style>
