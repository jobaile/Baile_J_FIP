export default {
    template: `
    <section>
    <h4 class="dashboard-title">Add A User</h4>
    <div class="grid-x">
        <div class="small-12 large-6 large-offset-3 cell">
        <form action="./admin/scripts/add_testimonial.php" method="post" enctype="multipart/form-data">
					
        <div>
        <label>Name</label>
        <input type="text" name="testimonial_name" placeholder="enter name">
        </div>
            
        <div>
        <label>Upload Image:</label>
            <input type="file" name="testimonial_file" class="btn">
        </div>

        <div>
        <label>Upload Video:</label>
            <input type="file" name="testimonial_video" class="btn">
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

    methods: {
        reload(){
          window.location.reload()
        }
      }
}