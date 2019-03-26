import ContentComponent from './layouts/ContentComponent.js'; //all the index content


export default {
	template: `
	<section>
		<ContentComponent/>
	</section>
	`,

components: {
	ContentComponent: ContentComponent,
},

}