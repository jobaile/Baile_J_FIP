import HomeComponent from "./components/HomeComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import DashboardComponent from './components/DashboardComponent.js';
import TestComponent from './components/layouts/OrganTest.js';
import TestTwoComponent from './components/layouts/AnotherTest.js';
import AddUser from './components/dashboard/AddUserComponent.js';
import Lightbox from './components/layouts/LightboxComponent.js';


const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/dashboard", name: "dashboard", component: DashboardComponent},
  { path: "/test", name: "test", component: TestComponent},
  { path: "/testtwo", name: "testtwo", component: TestTwoComponent},
  { path: "/lightbox", name: "lightbox", component: Lightbox},
  { path: "/adduser", name: "adduser", component: AddUser},


];

const router = new VueRouter({
  routes
});

const vm = new Vue({
  data: {
    currentUser: {},
  },
  
  methods: {
    openNav() {
      $('[data-curtain-menu-button]').click(function(){
        $('body').toggleClass('curtain-menu-open');
      })
    }
  },

  router: router
}).$mount("#app");
