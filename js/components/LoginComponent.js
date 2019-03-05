export default {
    template: `
    <div class="form-wrapper">
        <h1>Admin Login</h1>
            <form>
                <div class="form-item">
                <label for="username"></label>
                <input v-model="input.username" type="name" name="username" required placeholder="Email Address"></input>
                </div>
                <div class="form-item">
                <label for="password"></label>
                <input v-model="input.password" type="password" name="password" required placeholder="Password"></input>
                </div>
                <div class="button-panel">
                <input v-on:click.prevent="login()" type="submit" class="button" title="Sign In" value="Sign In"></input>
                </div>
            </form>
        <div class="form-footer">
            <p><a href="#">Create an account</a></p>
            <p><a href="#">Forgot password?</a></p>
        </div>
    </div>`,
 
     data() {
         return {
             input: {
                 username: "",
                 password: ""
             },

         }
     },
 
     methods: {
         login() {
            //console.log(this.$parent.mockAccount.username);
 
            if(this.input.username != "" && this.input.password != "") {
            // fetch the user from the DB
            // generate the form data
            let formData = new FormData();

             formData.append("username", this.input.username);
             formData.append("password", this.input.password);

             let url = `./admin/scripts/admin_login.php`;
 
             fetch(url, {
                    method: 'POST',
                    body: formData
                })
                 .then(res => res.json())
                 .then(data => {
                    if (typeof data != "object") { // means that we're not getting a user object back
                        console.warn(data);
                        console.error("authentication failed, please try again");
                    } else {
                        this.$emit("authenticated", true, data[0]);
                        this.$router.replace({ name: "dashboard" }); //where it redirects 
                    }
                })
             .catch(function(error) { 
                 console.log(error);
             });
        } else {
                 console.log("A username and password must be present");
            }
        }
    }
 }