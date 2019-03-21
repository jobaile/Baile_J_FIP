import MainNavComponent from "../components/layouts/MainNavComponent.js";
import NavDBComponent from "./layouts/DBNavComponent.js";

export default {
	template: `
	<section>
		<NavDBComponent />
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
		NavDBComponent: NavDBComponent,
		MainNavComponent: MainNavComponent
	}
}