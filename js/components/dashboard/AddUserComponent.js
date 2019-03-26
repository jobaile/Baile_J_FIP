export default {
	template: `
		<section>
		<h4 class="dashboard-title">Add A User</h4>
			<div class="grid-x">
				<div class="small-12 large-6 large-offset-3 cell">
					<form action="./admin/scripts/admin_createuser.php" method="post" @submit="checkForm">
					<p v-if="errors.length">
						<b>Please correct the following error(s):</b>
						<ul>
							<li v-for="error in errors">{{ error }}</li>
						</ul>
					</p>
						<label for="first-name">First Name</label>
						<input type="text" id="first-name" name="fname" placeholder="First Name"><br><br>

						<label for="username">User Name</label>
						<input type="text" id="username" name="username" v-model="username" placeholder="User Name"><br><br>

						<label for="email">Email</label>
						<input type="email" id="email" name="email" v-model="email" placeholder="Email Address"><br><br>

						<label for="password">Password</label>
						<input type="password" name="password" class="input" v-model="password" placeholder="Password"><br><br>
									
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
			email: null,
			password: null,
		}
	},

	methods: {
		checkForm: function(e){
			if (this.username && this.email && this.password) {
				return true;
			}

			this.errors = [];
			if (!this.username) {
				this.errors.push('Name required.');
			  }
			if (!this.password) {
				this.errors.push('Password required.');
			}
			if (!this.email) {
				this.errors.push('Email required.');
			  } else if (!this.validEmail(this.email)) {
				this.errors.push('Valid email required.');
			  }

			e.preventDefault();
		},

		validEmail: function (email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		  },

		reload(){
			window.location.reload()
		}
	}
}