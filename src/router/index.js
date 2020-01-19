import Vue from 'vue';
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'characters',
        component: () => import(/* webpackChunkName: "characters" */ "../components/Characters/Characters")
    },
    {
        path: '/episode/:id',
        name: 'episode',
        component: () => import(/* webpackChunkName: "episode" */ "../components/Episode/Episode")
    },
    {
        path: '/locations',
        name: 'locations',
        component: () => import(/* webpackChunkName: "episodes" */ "../components/Locations/Locations")
    }
    ];

export default new VueRouter({
    mode: 'history',
    routes
});
