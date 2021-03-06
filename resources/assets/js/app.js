
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('categoria', require('./components/CategoriaComponent.vue'));
Vue.component('articulo', require('./components/ArticuloComponent.vue'));
Vue.component('cliente', require('./components/ClienteComponent.vue'));
Vue.component('proveedor', require('./components/ProveedorComponent.vue'));
Vue.component('rol', require('./components/RolComponent.vue'));
Vue.component('user', require('./components/UserComponent.vue'));

const app = new Vue({
    el: '#app',
    data:{
        IdMenu: 0
    }
});
