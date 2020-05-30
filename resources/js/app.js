window.axios = require('axios')

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// src/main.js
import Vue from 'vue'
import store from './store/index'

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routes from './routes'
const router = new VueRouter({
    mode:'history',
    routes, // short for `routes: routes`
})



import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin', require('./components/Admin.vue').default);
Vue.component('card', require('./components/Card.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
console.log(store)
router.beforeEach((to,from,next)=>{
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const currentUser = store.state.todoStore.currentUser;
    console.log('requireAuth'+requiresAuth,'currentUser'+currentUser)
    if(requiresAuth && !currentUser) {
        next('/login')
    }else if(to.path =='/login' && currentUser) {
        next('/')
    }else{
        next()
    }
})

const app = new Vue({
    store,
    router,
    vuetify: new Vuetify(),

    el: '#app',
});



