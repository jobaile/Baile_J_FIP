import HomeComponent from "./components/HomeComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import DashboardComponent from './components/DashboardComponent.js';
import AddUserComponent from './components/dashboard/AddUserComponent.js';
import AddTestimonialComponent from './components/dashboard/AddTestimonialComponent.js';
import EditUserComponent from './components/dashboard/EditUserComponent.js';
import EditTestimonialComponent from './components/dashboard/EditTestimonialComponent.js';



const routes = [
  { path: "/", name: "home", component: HomeComponent },
  { path: "/home", name: "Home", component: HomeComponent },
  { path: "/login", name: "login", component: LoginComponent },
  { path: "/dashboard", name: "dashboard", component: DashboardComponent, props: true,
    children:[
      { path: "/adduser", name: "adduser", component: AddUserComponent },
      // { path: "/edituser", name: "edituser", component: EditUserComponent },
      { path: "/addtestimonial", name: "addtestimonial", component: AddTestimonialComponent },
      // { path: "/edittestimonial", name: "edittestimonial", component: EditTestimonialComponent },
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
