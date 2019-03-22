export default {
    template: `
    <div class="container">

        <!-- Lightbox Starts -->

        <div class="grid-x" ref="lbox">
            
            <!-- Exit button -->
            <button class="close-button" @click="closebox">
                <span>&times;</span>
            </button>    
            <!-- Exit button -->
        
            <div class="lightbox-container">
                <h4 class="media-title">Name goes here</h4>
            </div>

            <div class="video-container grid-x">
                <video src="video/testimonials/andrew.mp4"></video>
            </div>

            <div class="lightbox-information">
                <p>Info goes here</p>
            </div>

        </div>

        <!-- Lightbox Ends -->

    </div>
    `,


    methods: {
          closebox: function() {
              //closes the lightbox
            this.$refs.lbox.style.display = "none";
        }
    }
}