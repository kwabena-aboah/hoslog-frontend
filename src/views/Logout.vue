<template>
    <div class="log"></div>
</template>

<script>
import M from 'materialize-css'
    export default {
        created(){
            this.$store.dispatch('userLogout')
            .then(() => {
                // alert("You have logged out")
                M.toast({html: 'You have successfully logged out', classes: 'teal darken-4'});
                this.$router.push({ name: 'Login' })
            })
        },
        mounted () {
            M.AutoInit();
        }
    }
</script>