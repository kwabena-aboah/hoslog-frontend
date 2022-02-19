<template>
    <div>
     <Navbar />
        <div class="row">
        <div class="col s12 m12 l3">
            <Sidenav />
        </div>
          <div class="col s12 m12 l9">
            <h3>Data Chart of records per years</h3>
              <VueApexCharts width="600" type="bar" :options="options" :series="serie"></VueApexCharts>
          </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'
import { getAPI } from '../axios.api'
import M from 'materialize-css'
import Sidenav from  "@/components/Sidenav"
import Navbar from  "@/components/Navbar"

export default{
  el: '#appl',
  components:{
    VueApexCharts,
    Sidenav,
    Navbar
  },
  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          type: "datetime",
          // labels: {
          //   format: 'MMM',
          //   showDuplicates: false
          // }
        },
        title: {
          text: 'Data Chart of records per years',
          align: 'center',
          style: {
            fontsize: '20px',
          },
        },
        colors: ['#00897b']
      },
      series: [{
        name: 'clients',
        data: []
      }],
      charts: [],
    }
  },
  computed: {
  // compute series data from you API results
  serie: ({ charts }) => {
    const series = charts.reduce((map, { date_of_arrival, ...points }) => {
      Object.entries(points).forEach(([ name, point ]) => {
        const s = (map.has(name) ? map : map.set(name, [])).get(name)
    
        s.push({
          x: date_of_arrival,
          y: point
        })
      })
      return map
    }, new Map())

    return Array.from(series.entries(), ([ name, data ]) => ({
      name,
      data
    }))
  }
},
  methods: {
    retrieveCharts(){
        getAPI.get('/api/charts/', {
            headers: {
            'Authorization': `Bearer ${this.$store.state.accessToken}`,
            }
        })
        .then(response => {
            this.charts = response.data;
            console.log(response.data);
            M.toast({html: 'Network Connected!', classes: 'teal darken-4'});
        })
        .catch(e => {
            console.log(e);
            M.toast({html: 'Network Error!', classes: 'red darken-4'});
        });
    },
  },
  created () {
    this.retrieveCharts()
  },
  mounted () {
      M.AutoInit();
      // this.retrieveCharts()
  },
}
</script>
