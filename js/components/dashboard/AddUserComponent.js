export default {
	template: `
		<section>
		<h4 class="dashboard-title">Add A User</h4>
				<div class="grid-x">
					<div class="small-12 large-6 large-offset-3 cell">
						<form action="./admin/scripts/admin_createuser.php" method="post" >
						<p v-if="errors.length">
							<b>Please correct the following error(s):</b>
							<ul>
								<li v-for="error in errors">{{ error }}</li>
							</ul>
						</p>
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
	},

	data() {
	  return {
			errors:[],
			username: null,
			email: "",
			password: null,
		}
	},

	methods: {
		// checkForm: function(e){
		// 	if(this.username && this.password) 
		// 		return true;

		// 	this.errors = [];
		// 	// if(!this.fname) this.errors.push("First Name required!");
		// 	if(!this.username) this.errors.push("Username required!");
		// 	// if(!this.email) this.errors.push("Email required!");
		// 	if(!this.password) this.errors.push("Password required!");

		// 	e.preventDefault();
		// },

		reload(){
			window.location.reload()
		}
	}
}