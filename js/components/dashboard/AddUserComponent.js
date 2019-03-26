export default {
	template: `
		<section>
		<h4 class="dashboard-title">Add A User</h4>
				<div class="grid-x">
					<div class="small-12 large-6 large-offset-3 cell">
            <form action="./admin/scripts/admin_createuser.php" method="post">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" name="fname" value="" placeholder="First Name"><br><br>

            <label for="username">User Name</label>
            <input type="text" id="username" name="username" value="" placeholder="User Name"><br><br>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="" placeholder="Email Address"><br><br>

            <label for="password">Password</label>
            <input type="password" name="password" class="input" placeholder="Password"><br><br>
						
						<input type="submit" name="submit" class="btn" value="Create User">
						<span>or</span>
						<a href="#/adduser" @click="reload">Start Over</a>
						</form>
					</div>
        </div>
	</section>
	`,

	created: function() {
	  //debugger;
	  this.fetchAllUsers();
	},

	data() {
	  return {
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
  
		
		methods: {
			reload(){
				window.location.reload()
			}
		}
}