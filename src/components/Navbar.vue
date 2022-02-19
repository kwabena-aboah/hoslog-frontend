<template>
    <nav>
        <div class="nav-wrapper teal darken-4">
        <center><a href="/dashboard" class="center brand-logo">HosLog</a></center>
        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large"><i class="material-icons">menu</i></a>
            <ul class="right">
                <li><router-link to="/logout" exact>Logout</router-link></li>
            </ul>
        </div>
  </nav>
</template>

<script>
import M from 'materialize-css'

export default {
    name: "Navbar",
    mounted () {
        M.AutoInit()
    },
}
</script>