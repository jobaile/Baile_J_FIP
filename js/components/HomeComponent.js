import HeaderComponent from "./layouts/HeaderComponent.js";
//import ContentComponent from "./layout/ContentComponent.js";
import FooterComponent from "./layouts/FooterComponent.js";

export default {
  template: `
  <section>
    <HeaderComponent/>
  </section>
  `,

  data: {},

  methods: {},

  components: {
    HeaderComponent: HeaderComponent,
    //ContentComponent: ContentComponent,
    FooterComponent: FooterComponent
  }
};
