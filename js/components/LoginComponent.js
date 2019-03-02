export default {
  template: `
  <section>

  <div class="container">
    <form>
      <div class="form-icons">
        <h4>Welcome back!</h4>

        <div class="input-group">
          <span class="input-group-label">
            <i class="fa fa-user"></i>
          </span>
          <input class="input-group-field" type="text" placeholder="Full name">
        </div>

        <div class="input-group">
          <span class="input-group-label">
            <i class="fa fa-key"></i>
          </span>
          <input class="input-group-field" type="text" placeholder="Password">
        </div>
      </div>

      <button class="button expanded">Sign Up</button>
    </form>

  </div>

  </section>
  `,

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

      let url = `./admin/admin_login.php`;

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
                 this.$router.replace({ name: "users" });
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

