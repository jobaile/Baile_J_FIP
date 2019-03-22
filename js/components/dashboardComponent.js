import NavDBComponent from "./layouts/DBNavComponent.js";

export default {
	props: ['currentuser'],
	template: `
	<section>
		<NavDBComponent />
		<router-view @authenticated="setAuthenticated"/>
	</section>
	`,

	created: function() {
	  //debugger;
	  this.fetchAllUsers();
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
		
	  fetchAllUsers() {
		let url = `./admin/scripts/users.php?allusers=true`;

		fetch(url)
		  .then(res => res.json())
		  .then(data => {this.userList = data})
		.catch(function(error) {
		  console.error(error);
		});
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