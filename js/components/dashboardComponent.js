import NavDBComponent from "./layouts/DBNavComponent.js";

export default {
	props: ['currentuser'],
	template: `
	<section>
		<NavDBComponent />
		<h3 class="dashboard-title">Admin Dashboard</h3>
		<router-view @authenticated="setAuthenticated"/>
	</section>
	`,

	created: function() {
	  //debugger;
	},

	data() {
	  return {
		message: `Who's Using Roku?`,

		userList: []
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
		},
	},

	components: {
		NavDBComponent: NavDBComponent,
	}
}