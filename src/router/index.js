import Vue from 'vue';
import VueRouter from "vue-router";
import Characters from "../components/Characters/Characters";
import Episodes from "../components/Episodes/Episodes";
import Locations from "../components/Locations/Locations";

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'characters', component: Characters},
    { path: '/episodes', name: 'episodes', component: Episodes},
    { path: '/locations', name: 'episodes', component: Locations}
    ];

export default new VueRouter({
    mode: 'history',
    routes
});
