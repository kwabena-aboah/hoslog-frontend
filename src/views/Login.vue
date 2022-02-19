<template>
    <div>
        <div class="section"></div>
    <main>
        <center>
            <!--<img class="responsive-img" style="width: 250px; height: 180px" src="../assets/logo.png" /> -->
            <div class="container">
                <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
                <h5 class="teal-text darken-4">Please, login into your account</h5>
                    <form class="col s12" method="post" v-on:submit.prevent="login">
                        <div class="row">
                            <!--<div class="col s12">
                                <span v-if="incorrectAuth" class="red-text darken-4">Invalid Email or Password</span>
                            </div> -->
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input class="validate" type="email" name="email" id="email" v-model="email">
                                <label for="email">Enter your email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input class="validate" type="password" name="password" id="password" v-model="password"> 
                                <label for="password">Enter your password</label>
                            </div>
                            <!--<label style="float: right;">
                                <a class="pink-text" href="#!"><b>Forgot Password</b></a>
                            </label> -->
                        </div>
                        <br>
                        <center>
                            <div class="row">
                                <button type="submit" name="btn_login" class="col 12 btn btn-large waves-effect teal darken-4" id="loginBtn">
                                Login
                                </button>
                            </div>
                        </center>
                    </form>
                </div>
            </div>
            <!--<a href="#!">Create Account</a> -->
        </center>

        <div class="section"></div>
        <div class="section"></div>
    </main>
    </div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: "Login",
    data() {
        return{
            email: '',
            password: '',
            incorrectAuth: false
        }
    },
    methods: {
        login(){
            const loginBtn = document.querySelector('#loginBtn');
            loginBtn.innerHTML = '<i class="load-icon"></i> <span class="col s2">Logging In<span>';

            this.$store.dispatch('userLogin', {
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push({ name: 'Dashboard' });
                loginBtn.innerHTML = 'Logged In';
            })
            .catch(err => {
                console.log(err);
                M.toast({html: 'Invalid Email or Password', classes: 'red darken-4'});
                this.incorrectAuth = true;
                loginBtn.innerHTML = 'Login';
            })
        }
    }
};

</script>

<style scoped>
body{
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
main{
    flex: 1 0 auto;
}

body{
    background: #fff;
}

.input-field input[type=text]:focus + label,
.input-field input[type=email]:focus + label,
.input-field input[type=password]:focus + label
{
    color: #e91e63;
}

.input-field input[type=text]:focus,
.input-field input[type=email]:focus,
.input-field input[type=password]:focus{
    border-bottom: 2px solid #e91e63;
    box-shadow: none;
}

.load-icon{
    margin-right: .5rem;
    animation: rotateLoader 1s infinite;
}
</style>