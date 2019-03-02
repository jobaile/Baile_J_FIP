
import DashboardComponent from './components/DashboardComponent.js';
import LoginComponent from './components/LoginComponent.js';
import AddUserComponent from './components/AddUserComponent.js';
import EditUserComponent from './components/EditUserComponent.js';
import AddTestimonialComponent from './components/AddTestimonialComponent.js';
import EditTestimonialComponent from './components/EditTestimonialComponent.js';


let router = new VueRouter({

  routes: [
      { path: '/', redirect: { name: "login"} },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/dashboard', name: 'dashboard', component: DashboardComponent },
      { path: '/adduser', name: 'adduser', component: AddUserComponent },
      { path: '/edituser', name: 'edituser', component: EditUserComponent },
      { path: '/addtestimonial', name: 'addtestimonial', component: AddTestimonialComponent },
      { path: '/edittestimonial', name: 'edittestimonial', component: EditTestimonialComponent },
    ]
});

const vm = new Vue({
 
  data: {
    authenticated: false,

    genericMessage: "hello from the parent",

    mockAccount: {
      username: "user",
      password: "password"
    },

    user: [],

    //currentUser: {},

    toastmessage: "Login failed!"
  },

  created: function() {
    // do a session check and set authenticated to true if the session still exists
    // if the cached user exists, then just navigate to their user home page

    // the localstorage session will persist until logout

    if (localStorage.getItem("cachedUser")) {
      let user = JSON.parse(localStorage.getItem("cachedUser"));
      this.authenticated = true;
      // params not setting properly, so this route needs to be debugged a bit...
      this.$router.push({ name: "home", params: { currentuser: user }});
    } else {
      this.$router.push({ path: "/login"} );
    }    
  },

  methods: {
    setAuthenticated(status, data) {
      this.authenticated = status;
      this.user = data;
    },

    logout() {
      // delete local session
      if (localStorage.getItem("cachedUser")) {
        localStorage.removeItem("cachedUser");
      }
      // push user back to login page
      this.$router.push({ path: "/login" });
      this.authenticated = false;
      
      
    }
  },

  router: router
}).$mount("#app");

router.beforeEach((to, from, next) => {
  console.log('router guard fired!', to, from, vm.authenticated);

  if (vm.authenticated == false) {
    next("/login");
  } else {
    next();
  }
});