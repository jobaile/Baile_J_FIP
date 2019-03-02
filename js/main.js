import HomeComponent from "./components/HomeComponent.js";
import LoginComponent from "./components/LoginComponent.js";

const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
  { path: "/login", name: "Login", component: LoginComponent}
];

const router = new VueRouter({
  routes
});

const vm = new Vue({
   //el: '#app',
    data: {
        mainmessage: "Welcome to the app",
    },

    mounted() {

    },

    methods: {},

    router: router
}).$mount("#app");
