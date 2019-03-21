import HomeComponent from "./components/HomeComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import DashboardComponent from './components/DashboardComponent.js';
import TestComponent from './components/layouts/OrganTest.js';


const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/dashboard", name: "dashboard", component: DashboardComponent},
  { path: "/test", name: "test", component: TestComponent}

];

const router = new VueRouter({
  routes
});

const vm = new Vue({
  data: {},
  
  methods: {
    openNav() {
      $('[data-curtain-menu-button]').click(function(){
        $('body').toggleClass('curtain-menu-open');
      })
    }
  },

  router: router
}).$mount("#app");
