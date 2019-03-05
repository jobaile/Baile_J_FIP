export default {
	template: `
	<section>
	<div class="top-bar"> 
	<a href="#">
		<p>WAYWF</p>
	</a>
	<ul>
		<li><router-link :to="{path: '/adduser'}" class="link">Add A User</router-link></li>
		<li><router-link :to="{path: '/edituser'}" class="link">Edit Users</router-link></li>
		<li><router-link :to="{path: '/addtestimonial'}" class="link">Add A Testimonial</router-link></li>
		<li><router-link :to="{path: '/edittestimonial'}" class="link">Edit Testimonials</router-link></li>
	</ul>
	</div> 	
	</section>
	`,
}