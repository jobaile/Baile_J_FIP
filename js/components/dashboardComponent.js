export default {
    template: `
    <section>
    <div class="container">
      <h4 class="welcome-message"> {{ mainmessage }}</h4>
    </div>
    </section>
    `,
  
    data() {
      return {
      mainmessage: `This is the dashboard component!`,
      }
    },
  
    methods: {},
  
    components: {}
  };
  
  