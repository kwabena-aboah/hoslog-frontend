<template>
   <div>
     <Navbar />

    <!-- Page Layout here -->
    <div class="row">
        <div class="col s12 m12 l3">
            <Sidenav />
        </div>

        <div class="col s12 m12 l9">
            <h3>Client List</h3>
            <p>This page shows all clients logged per particular date. You can create, edit and or delete records here.<Create /></p>
                    <div class="container">
                        <blockquote><a class="subheader">Search && Filter</a></blockquote>
                        <form @submit.prevent="searchTitle" class="s12 m4 l4">
                            <div class="input-field">
                                <input id="search" type="search" required @input="searchTitle" class="tooltipped" data-tooltip="Search" v-model="clients.name_of_customer">
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                    <br>
                    <table class="highlight responsive-table display" v-if="clients" id="example">
                        <thead>
                        <tr>
                            <th>Name of Customer</th>
                            <th>Phone Number</th>
                            <th>Date of Arrival</th>
                            <th>Amount Given</th>
                            <th>Discount</th>
                            <th>Price</th>
                            <th>Provided Test Results</th>
                            <th>Referral Name</th>
                            <th>Test Provided</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr :class="{ active: index == currentIndex }" 
                            v-for="(item, index) in clients" 
                            :key="index" 
                            @click="setActiveClient(item, index)">
                            <td><router-link 
                                v-bind:to="{name: 'Edit', params: {id: item.id}}"
                                class="waves-effect waves-light">{{item.name_of_customer}}</router-link></td>
                            <td>{{item.phone_number}}</td>
                            <td>{{item.date_of_arrival}}</td>
                            <td>{{item.amount_given}}</td>
                            <td>{{item.discount}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.provided_test_results}}</td>
                            <td>{{item.referral_name}}</td>
                            <td>{{item.test_provided}}</td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="card-panel hoverable center-align red-text darken-4" v-else>
                        No record found
                    </div>

                    <!-- pagination -->
                    <pagination v-model="page" :records="records" :per-page="pageSize" @paginate="onChangePage" class="teal darken-4"/>
                    <!--<div class="col m12">
                        <div class="col m3">
                            Items per page:
                            <select v-model="pageSize" @change="handlePageSizeChange($event)">
                                <option v-for="size in pageSizes" :key="size" :value="size">
                                    {{ size }}
                                </option>
                            </select>
                        </div>
                        <div class="col m9">
                            <ul class="pagination">
                                <li class="disabled"><a href="#"><i class="material-icons">chevron_left</i></a></li>
                                <li class="active"><a href="#">1</a></li>
                                <li class="waves-effect"><a href="#">2</a></li>
                                <li class="waves-effect"><a href="#"><i class="material-icons">chevron_right</i></a></li>
                            </ul>
                        </div>
                    </div> -->
        </div>
    </div>
   </div>
</template>

<script>
import M from 'materialize-css'
import Pagination from 'v-pagination-3';
import Sidenav from  "@/components/Sidenav"
import Navbar from  "@/components/Navbar"
import Create from "@/components/Create"
import { getAPI } from '../axios.api'

export default {
    name: 'Dashboard',
    data () {
        return {
            clients: [],
            currentClient: null,
            currentIndex: -1,
            name_of_customer: '',
            page: 1,
            records: 100,
            pageSize: 10
        };
    },
    // watch: {
    //     keyword: "searchTitle"
    // },
    methods: {
        retrieveClients(){
            getAPI.get('/api/clients/', {
                headers: {
                'Authorization': `Bearer ${this.$store.state.accessToken}`,
                }
            })
            .then(response => {
                this.clients = response.data;
                console.log(response.data);
                M.toast({html: 'Network Connected!', classes: 'teal darken-4'});
            })
            .catch(e => {
                console.log(e);
                M.toast({html: 'Network Error!', classes: 'red darken-4'});
            });
        },
        refreshList() {
            this.retrieveClients();
            this.currentClient = null;
            this.currentIndex = -1;
        },
        setActiveClient(item, index) {
            this.currentClient = item;
            this.currentIndex = item ? index : -1;
        },
        searchTitle () {
            if (this.clients.name_of_customer.length > 10000000000){
                getAPI.get('/api/clients/?search='+this.clients.name_of_customer, {
                headers: {
                'Authorization': `Bearer ${this.$store.state.accessToken}`,
                }
            })
                .then(res => (this.clients = res.data))
                .catch(err => console.log(err))
            }
        },
        onChangePage(pageSize) {
            // update page of items
            this.pageSize = pageSize;
        },

    },
    mounted () {
        M.AutoInit();
        this.retrieveClients();
    },
    components: {
        Sidenav,
        Navbar,
        Create,
        Pagination
    }
}
</script>

<style>
    header, main, footer {
      padding-left: 0;
    }

    @media only screen and (max-width : 992px) {
      header, main, footer {
        padding-left: 0;
      }
    }
</style>