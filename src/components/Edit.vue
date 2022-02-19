<template>
  <div>
    <Navbar />
<div class="row">
  <div class="col s12 m12 l3">
    <Sidenav />
  </div>
  <div class="col s12 m12 l9">
    <div class="container">
      <div class="row">
        <div class="col s12 m10 l10">
          <div class="card medium">
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                {{ clients.name_of_customer }}<i class="material-icons right">more_vert</i>
                <blockquote class="activator">Click on the clients to view full details</blockquote>
              </span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                {{ clients.name_of_customer }}<i class="material-icons right">close</i>
                <ul class="collection">
                  <li class="collection-item small"><span class="title red-text text-darken-3">Phone Number:</span> <small><b>{{ clients.phone_number }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Provided Test:</span> <small><b>{{ clients.test_provided }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Price:</span> <small><b>{{ clients.price }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Referral Name:</span> <small><b>{{ clients.referral_name }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Discount:</span> <small><b>{{ clients.discount }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Amount Given:</span> <small><b>{{ clients.amount_given }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Test Results:</span> <small><b>{{ clients.provided_test_results }}</b></small></li>
                  <li class="collection-item small"><span class="title red-text text-darken-3">Arrival Date:</span> <small><b>{{ clients.date_of_arrival }}</b></small></li>
                </ul>
              </span>
            </div>
          </div>
          <a class="btn orange darken-2 waves-effect waves-light modal-trigger tooltipped" href="#modal3" data-tooltip="Edit"><i class="material-icons">edit</i></a> |  
          <a href="#modal2" class="btn waves-effect waves-light modal-trigger red darken-2 tooltipped" data-tooltip="Delete"><i class="material-icons">delete</i></a>
        </div>
      </div>
    </div>
    <!-- Modal Structure -->
    <!-- Modal Edit -->
    <div id="modal3" class="modal bottom-sheet">
      <div class="modal-content">
        <h4>Edit Client</h4>
        <!-- <form class="col s12"> -->
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <input 
              placeholder="Name Of Customer" 
              ref="name_of_customer" 
              id="name_of_customer" 
              type="text" 
              class="validate"
              required
              v-model="clients.name_of_customer">
            <label for="name_of_customer">Name Of Customer</label>
          </div>
          <div class="input-field col s6 m6 l6">
            <input 
              placeholder="Phone Number" 
              ref="phone_number" 
              id="phone_number" 
              type="text" 
              class="validate"
              required
              v-model="clients.phone_number">
            <label for="phone_number">Phone Number</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <input 
              placeholder="Date Of Arrival" 
              ref="date_of_arrival" 
              id="date_of_arrival" 
              type="date" 
              class="validate"
              required
              v-model="clients.date_of_arrival">
            <label for="date_of_arrival">Date Of Arrival</label>
          </div>
          <div class="input-field col s6 m6 l6">
            <input 
              placeholder="Amount Given" 
              ref="amount_given" 
              id="amount_given" 
              type="text" 
              class="validate"
              required
              v-model="clients.amount_given">
            <label for="amount_given">Amount Given</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <select class="validate" id="discount" @change="onChange($event)" v-model="clients.discount" required>
              <option disabled value="">Please select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            <label for="discount">Discount</label>
          </div>
          <div class="input-field col s6 m6 l6">
            <input 
              placeholder="Price" 
              ref="price" 
              id="price" 
              type="text" 
              class="validate"
              required
              v-model="clients.price">
            <label for="price">Price</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6 m6 l6">
            <input 
              id="provided_test_results" 
              ref="provided_test_results" 
              type="text" 
              class="validate"
              required
              v-model="clients.provided_test_results">
            <label for="provided_test_results">Provided Test Results</label>
          </div>
          <div class="input-field col s6 m6 l6">
            <input 
              id="referral_name" 
              ref="referral_name" 
              type="text" 
              class="validate"
              required
              v-model="clients.referral_name">
            <label for="referral_name">Referral Name</label>
          </div>
          <div class="input-field col s6 m6 l6">
            <input 
              id="test_provided" 
              ref="test_provided" 
              type="text" 
              class="validate"
              required
              v-model="clients.test_provided">
            <label for="test_provided">Test Provided</label>
          </div>
        </div>
      <!-- </form> -->
      </div>
      <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat red darken-3">Cancel</a> | 
      <button @click="updateClients" class="modal-close waves-effect waves-green btn-flat green darken-2" type="submit">Submit</button>
      </div>
    </div>
    </div>
</div>
  <!-- Modal Trigger -->
<!-- Modal Delete -->
    <div id="modal2" class="modal bottom-sheet">
    <div class="modal-content">
      <h4>Delete Client</h4>
      <div class="row">
        <div class="input-field col s12 m12 l12">
                <p>This action cannot be undone!</p>
        </div>
        </div>
    </div>
    <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat green darken-2">Cancel</a> | 
    <button v-on:click="deleteClient" class="modal-close waves-effect waves-green btn-flat red darken-3" type="submit">Submit</button>
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
    name: "Edit",
    data () {
      return {
        clients: {
          id: null,
          name_of_customer: '',
          phone_number: '',
          date_of_arrival: '',
          amount_given: '',
          discount: '',
          price: '',
          provided_test_results: '',
          referral_name: '',
          test_provided: ''
        },
        message: ''
      };
    },
    methods: {
      getClients() {
        getAPI.get(`/api/clients/${this.$route.params.id}`,{
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
      updateClients () {
        var data = {
          id: this.clients.id,
          name_of_customer: this.clients.name_of_customer,
          phone_number: this.clients.phone_number,
          date_of_arrival: this.clients.date_of_arrival,
          amount_given: this.clients.amount_given,
          discount: this.clients.discount,
          price: this.clients.price,
          provided_test_results: this.clients.provided_test_results,
          referral_name: this.clients.referral_name,
          test_provided: this.clients.test_provided
        };
        getAPI.put(`/api/clients/${this.$route.params.id}`, data, {
          headers: {
              'Authorization': `Bearer ${this.$store.state.accessToken}`,
              }
          })
        .then(response => {
          console.log(response.data);
          this.message = 'This client was successfully updated';
          // alert(this.message);
          M.toast({html: this.message, classes: 'teal darken-4'});
          this.$router.push({name: 'Dashboard'})
        })
        .catch(e => {
          console.log(e);
           M.toast({html: 'Error on submitting update!', classes: 'red darken-4'});
        });
      },
      deleteClient () {
          getAPI.delete(`/api/clients/${this.$route.params.id}`, {
            headers: {
              'Authorization': `Bearer ${this.$store.state.accessToken}`,
              }
          })
          .then(response => {
              console.log(response.data);
              this.message = 'This client was successfully deleted';
              // alert(this.message);
              M.toast({html: this.message, classes: 'teal darken-4'});
              this.$router.push({name: "Dashboard"})
          })
          .catch(e => {
              console.log(e);
              M.toast({html: 'Could not delete record!', classes: 'red darken-4'});
          });
      },
    },
    mounted () {
      M.AutoInit();
      this.getClients(this.$route.params.id);
      this.message = '';
  },
  components: {
      Sidenav,
      Navbar
  }
    
}
</script>

<style scoped>

</style>
