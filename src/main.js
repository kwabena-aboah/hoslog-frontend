import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import VueApexCharts from "vue3-apexcharts";
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import VueExcelXlsx from "vue-excel-xlsx";

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
        if (!store.getters.loggedIn) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

createApp(App).use(store).use(router, VueApexCharts, VueExcelXlsx).mount('#app')
