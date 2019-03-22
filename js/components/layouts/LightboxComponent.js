export default {
    template: `
    <div class="container">

        <!-- Lightbox Starts -->

        <div class="grid-x" class="video-lightbox" ref="lbox">
            
            <!-- Exit button -->
            <button class="close-button" @click="closebox">
                <span>&times;</span>
            </button>    
            <!-- Exit button -->
        
            <div class="lightbox-container">
                <h4 class="media-title">Name goes here</h4>
            </div>

            <div class="video-container grid-x">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="cell large-12 medium-12 small-12"></video>
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