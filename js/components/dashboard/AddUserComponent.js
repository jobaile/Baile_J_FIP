import NavDBComponent from "../layouts/DBNavComponent.js";

export default {
	props: ['currentuser'],
	template: `
    <section>
        <NavDBComponent/>
        <div>
            <form action="./admin/scripts/admin_createuser.php" method="post">
            <label for="first-name">First Name:</label>
            <input type="text" id="first-name" name="fname" value=""><br><br>

            <label for="username">User Name:</label>
            <input type="text" id="username" name="username" value=""><br><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value=""><br><br>

            <label for="password">Password:</label>
            <input type="password" name="password" class="input"><br><br>
            
            <button type="submit" name="submit">Create User</button>
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
    
    components: {
        NavDBComponent : NavDBComponent
    }
}