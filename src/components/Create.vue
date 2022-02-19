<template>
  <div>
    <!-- Modal Trigger -->
    <a class="btn-floating btn-large waves-effect waves-light modal-trigger tooltipped" href="#modal1" data-tooltip="Create"><i class="material-icons">add</i>Add New</a>

    <!-- Modal Structure -->
    <div id="modal1" class="modal bottom-sheet">
      <div class="modal-content" v-if="!submitted">
        <h4>New Client</h4>
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
      <!-- <a href="#!" class="modal-close waves-effect waves-green btn-flat red darken-2">Cancel</a> -->
        <button v-on:click="submitForm()" class="modal-close waves-effect waves-green btn-flat" type="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'
import { getAPI } from '../axios.api'

export default {
    name: "Create",
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
        submitted: false,
        onChange(e){
          console.log(e.target.value);
        }
      };
    },
    methods: {
      submitForm() {
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
        getAPI.post("/api/clients/", data, {
            headers: {
              'Authorization': `Bearer ${this.$store.state.accessToken}`,
            }
          })
        .then(response => {
          this.clients.id = response.data.id;
          M.toast({html: 'Record successfully submitted', classes: 'teal darken-4'});
          this.submitted = true;
          this.$router.push({name: 'Dashboard'})
        })
        .catch(e => {
          console.log(e);
          M.toast({html: 'Please fill all necessary fields before submitting!', classes: 'red darken-4'});
        });
      },
      newTutorial() {
        this.submitted = false;
        this.clients = {};
      }
    },
    mounted () {
      M.AutoInit()
  },
    
}
</script>

<style scoped>
.btn-floating{
    float: right;
    position: relative;
    top: -20px;
}
@media only screen and (max-width : 992px) {
    .btn-floating{
      float: right;
      position: relative;
      top: 60px;
  }
}
</style>
