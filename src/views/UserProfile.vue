<template>
    <div>
        <Navbar />

        <!-- Page Layout here -->
        <div class="row">
            <div class="col s12 m12 l3">
                <Sidenav />
            </div>

            <div class="col s12 m12 l9">
                <div class="center-align red-text darken-4" v-if="profiles">
                   <div class="row">
                    <div class="col s12 m5 l6" v-for="item in profiles" 
                            :key="item">
                        <div class="card hoverable">
                            <div class="card-image">
                                <img v-bind:src="item.image" :alt='`${first_name} ${last_name}`'>
                                <span class="card-title">{{ item.user }}</span>
                            </div>
                            <div class="card-content">
                                <p>{{ item.first_name }} {{ item.last_name }}</p>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
                <div class="card-panel hoverable center-align red-text darken-4" v-else>
                    No profile found. You may not have permission to view this page!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import M from 'materialize-css'
import { getAPI } from '../axios.api'
import Sidenav from  "@/components/Sidenav"
import Navbar from  "@/components/Navbar"

export default {
    name: 'UserProfile',
    data () {
        return{
            profiles: {
                // id: null,
                user: '',
                first_name: '',
                last_name: '',
                image: ''
            }
        };
    },
    methods: {
        retrieveProfile(){
            getAPI.get(`/api/profile/`, {
                headers: {
                'Authorization': `Bearer ${this.$store.state.accessToken}`,
                }
            })
            .then(response => {
                this.profiles = response.data;
                console.log(response.data);
                M.toast({html: 'Network Connected!', classes: 'teal darken-4'});
            })
            .catch(e => {
                console.log(e);
                M.toast({html: 'Network Error', classes: 'red darken-4'});
            });
        },
    },
    mounted () {
        M.AutoInit();
        this.retrieveProfile();
    },
    components: {
        Sidenav,
        Navbar
    }
}
</script>
