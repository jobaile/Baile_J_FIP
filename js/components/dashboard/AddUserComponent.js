import NavDBComponent from "./NavDBComponent.js";

export default {
    template: `
    <div>
    <NavDBComponent />

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
    `,
    
    components: {
		NavDBComponent: NavDBComponent
	}
}