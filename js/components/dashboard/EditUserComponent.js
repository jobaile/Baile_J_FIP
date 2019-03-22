import NavDBComponent from "./layouts/DBNavComponent.js";

export default {
    props: ['currentuser'],
    template: `
    <section>
    <NavDBComponent />
    <h1>Edit User Component</h1>

    </section>
    `,

    components: {
		NavDBComponent: NavDBComponent
	}
}