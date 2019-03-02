import UserComponent from './UserComponent.js';

export default {
	template: `
	<div class="container">
		<ul>
		<li><router-link :to="{path: '/adduser'}" class="link">Add A User</router-link></li>
		<li><router-link :to="{path: '/edituser'}" class="link">Edit Users</router-link></li>
		</ul>
		<ul>
			<li><router-link :to="{path: '/addtestimonial'}" class="link">Add A Testimonial</router-link></li>
			<li><router-link :to="{path: '/edittestimonial'}" class="link">Edit Testimonials</router-link></li>
		</ul>
	</div>
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
		user: UserComponent
	}
}