import MainNavComponent from './layouts/MainNavComponent.js'; //Nav (mobile + main nav)
import ContentComponent from './layouts/ContentComponent.js'; //all the index content
import FooterComponent from './layouts/FooterComponent.js'; //footer


export default {
	template: `
	<section>
		<MainNavComponent/>
		<ContentComponent/>
		<FooterComponent/>
	</section>
	`,

components: {
	MainNavComponent: MainNavComponent,
	ContentComponent: ContentComponent,
	FooterComponent: FooterComponent
},

}