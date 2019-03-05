import UserComponent from './UserComponent.js';
import NavDBComponent from "./dashboard/NavDBComponent.js";

export default {
	template: `
	<section>
		<NavDBComponent />

		<h1>Welcome, [username]!</h1>
		<p class="text-center">If you have any questions, please contact the server administrator.</p>
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
	  fetchAllUsers() {
		let url = `./admin/scripts/users.php?allusers=true`;

		fetch(url)
		  .then(res => res.json())
		  .then(data => {this.userList = data})
		.catch(function(error) {
		  console.error(error);
		});
	  }
	},

	components: {
		user: UserComponent,
		NavDBComponent: NavDBComponent
	}
}