export default {
	template: `
    <section>
        <div>
            <form action="./admin/scripts/admin_createuser.php" method="post">
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="fname" value="" class="input"><br><br>

            <label for="username">User Name:</label>
            <input type="text" id="username" name="username" value="" class="input"><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="" class="input"><br><br>

            <label for="password">Password:</label>
            <input type="password" name="password" class="input"><br><br>
						
						<input type="submit" name="submit" class="btn" value="Create User">
						<a href="#/adduser" class="btn-startover" @click="reload">Start Over</a>
            </form>
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