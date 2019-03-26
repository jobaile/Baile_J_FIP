export default {
    template: `
    <section>
    <div class="grid-x">
        <div class="small-12 large-6 large-offset-3 cell">
        <form action="./admin/scripts/add_testimonial.php" method="post" enctype="multipart/form-data" @submit="checkForm">
            
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
					
        <div>
        <label>Name</label>
         <input type="text" name="testimonial_name" v-model="name" placeholder="enter name">
        </div>
            
        <div>
        <label>Upload Image:</label>
            <input type="file" name="testimonial_file" v-model="image" class="btn">
        </div>

        <div>
        <label>Upload Video:</label>
            <input type="file" name="testimonial_video" v-model="video" class="btn">
        </div>

        <div>
        <input type="submit" name="btn_add" class="btn" value="Submit">
        <span>or</span>
        <a href="#/addtestimonial" @click="reload">Start Over</a>        
        </div>
            
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
                name: null,
                image: null,
                video: null,
          }
      },
      
      checkForm: function(e){
        if (this.name && this.image && this.video) {
            return true;
        }

        this.errors = [];
        if (!this.name) {
            this.errors.push('Name required.');
          }
        // if (!this.image) {
        //     this.errors.push('Please select an image.');
        // }
        // if (!this.video) {
        //     this.errors.push('Please select a video.');
        // }

        e.preventDefault();
    },

    methods: {
        reload(){
          window.location.reload()
        }
      }
}