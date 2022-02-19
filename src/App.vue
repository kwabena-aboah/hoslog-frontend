<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
 <Login msg="Welcome to HosLog"/> -->
 <!-- <router-link to="/dashboard">Dashboard</router-link> -->
 <router-view></router-view>
</template>

<script>
import M from 'materialize-css'
// import Login from './views/Login'

export default {
  name: 'App',
  mounted () {
    M.AutoInit()
  },
  // components: {
  //   Login
  // }
}
</script>
