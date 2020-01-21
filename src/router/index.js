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
    }
    ];

export default new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});
