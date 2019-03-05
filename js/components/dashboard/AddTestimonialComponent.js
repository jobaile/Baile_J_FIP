import NavDBComponent from "./NavDBComponent.js";

export default {
    template: `
    <section>
    <NavDBComponent />
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
        <a href="index.php" class="btn">Cancel</a>
        </div>
            
    </form>
    </section>
    `,

    components: {
		NavDBComponent: NavDBComponent
	}
}