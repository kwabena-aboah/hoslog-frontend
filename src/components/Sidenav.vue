<template>
  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li><div class="user-view">
      <div class="background center center-align">
        <img src="../assets/logo.png">
      </div>
      <!--<a href="#user"><img class="circle" src="../assets/logo.png"></a> -->
      <br>
      <br>
      <br>
      <br>
    </div></li>
    <li><div class="divider"></div></li>
    <li><router-link to="/dashboard">Dashboard</router-link></li>
    <li><router-link to="/profiles">Users</router-link></li>
    <li><router-link to="/reports">Reports</router-link></li>
    <li><div class="divider"></div></li>
  </ul>
  <!--<a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>-->
        
</template>

<script>
import M from 'materialize-css'

export default {
    name: 'Sidenav',
    mounted () {
        M.AutoInit()
    },
}
</script>