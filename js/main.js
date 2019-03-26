import HomeComponent from "./components/HomeComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import DashboardComponent from './components/DashboardComponent.js';
import AddUserComponent from './components/dashboard/AddUserComponent.js';
import AddTestimonialComponent from './components/dashboard/AddTestimonialComponent.js';

const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/dashboard", name: "dashboard", component: DashboardComponent,
    children:[
      { path: "/adduser", name: "adduser", component: AddUserComponent },
      { path: "/addtestimonial", name: "addtestimonial", component: AddTestimonialComponent },
    ]},

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

// router.beforeEach((to, from, next) => {
//   console.log('router guard fired!', to, from, vm.authenticated);

//   if (vm.authenticated == false) {
//     next("/login");
//   } else {
//     next();
//   }
// });
// running into some errors with this on