export default {
    template: `
    <section>
    <form action="./admin/scripts/add_testimonial.php" method="post" enctype="multipart/form-data">
					
        <div>
        <label>Name</label>
        <input type="text" name="testimonial_name" placeholder="enter name">
        </div>
            
        <div>
        <label>Upload Image:</label>
            <input type="file" name="testimonial_file">
        </div>

        <div>
        <label>Upload Video:</label>
            <input type="file" name="testimonial_video">
        </div>

        <div>
        <input type="submit" name="btn_add" class="btn" value="Submit">
        <a href="#/addtestimonial" class="btn" @click="reload">Start Over</a>
        </div>
            
    </form>
    </section>
    `,

    methods: {
        reload(){
          window.location.reload()
        }
      }
}