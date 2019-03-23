export default {
	template: `
	<section>
            
    <!-- Everything goes inside this div (with the exception of mobile nav) -->
	<div class="grid-container full">

        <!-- HERO VIDEO -->
		<section class="grid-x">
            <div class="small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop id="myVideo">
                    <source src="video/hero-video.mp4" width="100%" type="video/mp4">
                </video>                   
            </div>
        </section>
        <!-- END HERO VIDEO -->

        <!-- WAITING STAT 1 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">Every 30 hours, someone dies waiting for an organ donation.</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 1 -->


        <!-- ABOUT SECTION-->
         <section class="grid-x" id="section-about">
            <div id="about-section-bckgnd" class="small-12 small-offset-0 medium-12 medium-offset-0 large-12 large-offset-0 cell">
                <img class="show-for-small-only" src="/Baile_J_FIP/images/bckgnd-about-mobile.png" alt="Waiting at a bus stop">
                <img class="hide-for-small-only" src="/Baile_J_FIP/images/bckgnd-about.png" alt="Waiting at a bus stop"> 
                <p class="about-text">The best things in life are worth waiting for, meeting the love of your life, finally getting to go on your dream vacation or even just standing in line for the perfect cup of coffee. But some waits are harder than others. So, while you’re waiting for your wait to come to an end, why not help change someone else’s story and sign up to be an organ donor.
                    <br><br>
                    <span class="bold">So, what are you waiting for?</span>
                </p>    
            </div>
         </section>
         <!-- END ABOUT SECTION-->

        <!-- WAITING STAT 2 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">The average Canadian waits 4 years for a kidney transplant.</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 2 -->

        <!-- Section Two Starts-->
         <section class="informationTwo grid-x">
            <div id="help-section" class="small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <div class="help-section-content">
                    <p class="numbers">How can I help?</p>
                    <p class="help-text"><span class="numbers bold">1. </span>Grab your health card</p>
                    <p class="help-text"><span class="numbers bold">2. </span>Go to www.beadonor.ca</p>
                    <p class="help-text"><span class="numbers bold">3. </span>Register</p>
                    <p class="help-text-saved"><span class="bold">You just saved 8 lives.</span></p>
                </div>
            </div>     
         </section>
         <!-- Section Two Ends-->

        <!-- WAITING STAT 3 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">Ever year 1,600 people are added to the waiting list.</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 3 -->

        <!-- TESTIMONIAL SECTION -->
        <section class="grid-x" id="testimonial-section">
            <div>
                <h2 class="section-heading">Testimonials</h2>
                <p class="organ-info">Want to learn more about organ doation? Click to learn how you can change someone's life forever.</p>
            </div>

            <!-- Lightbox Starts -->
            <div class="container lightbox" ref="lbox">
                <!-- Exit button -->
                <button class="close-button" @click="closebox">
                    <span>&times;</span>
                </button>    
                <!-- End exit button -->
                <div class="lightbox-container">
                    <h4 class="media-title">{{ tname }}</h4>
                </div>
                <div class="lightbox-information">
                    <p class="media-info">HELLO<BR>HELLO {{ tinfo }} </p>
                </div>
                <div class="video-container">
                    <video :src="'video/testimonials/' + tsource" autoplay controls></video>
                </div>
            </div>
            <!-- Lightbox Ends -->

            <div class="cell small-12 medium-12 large-12">
                <img id="testimonial-img" v-for="item in testimonialdata" :src="'images/testimonials/' + item.t_pic" alt="testimonial pic" @click="loadMovie(item)">
            </div> 
        </section>
        <!-- END TESTIMONIAL SECTION -->


        
        <!-- WAITING STAT 4 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">Less than 20% of Canadians have plans to donate their organs.</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 4 -->

        

        <!-- LEARN MORE ABOUT ORGANS SECTION -->
        <section class="grid-x">
        <div id="learn-more-section">
        <div id="learn-more-bckgnd-colour">
            <div id="learn-more-section-header" class="center-text small-10 small-offset-1 medium-10 medium-offset-1 large-10 large-offset-1 cell">
                <h2 class="section-heading">Learn More</h2>
                <p class="organ-info">Want to learn more about organ doation? Click on an organ to learn how you can change someone's life forever.</p>
            </div>
            <div id="organ-icons-container" class="center-text small-10 small-offset-0 medium-10 medium-offset-0 large-10 large-offset-0 cell">
                <img :src="'images/organs/' + organ.organ_icon" v-for="organ in organdata" class="organ-icons" alt="organ" @click="organdetails(organ)">     
            </div>
            <div id="organInformation" class="center-text small-10 small-offset-1 medium-10 medium-offset-1 large-10 large-offset-1 cell">
                <h2 class="organ-name bold">{{ oname }}</h2>
                <p class="organ-info"> {{ infoOne }}</p>    
                <p class="organ-fact"> {{infoTwo }}</p>    
            </div>
        <div>
        </div>     
        </section>
        <!-- END: LEARN MORE ABOUT ORGANS SECTION -->



        <!-- WAITING STAT 5 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">Up to 1.8 million Ontarians mistakenly believe they are registered organ and tissue donors.</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 5 -->



        <!-- WHAT ARE YOU WAITING FOR? FINAL IMG -->
		<section class="grid-x">
            <div class="small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <img class="show-for-small-only" id="waywf-pre-footer-img" src="/Baile_J_FIP/images/bckgnd-pre-footer-mobile.png" alt="What are you waiting for?">
                <img class="hide-for-small-only" id="waywf-pre-footer-img" src="/Baile_J_FIP/images/bckgnd-pre-footer-desktop.png" alt="What are you waiting for?">
            </div>
        </section>
        <!-- WHAT ARE YOU WAITING FOR? FINAL IMG -->

    </div>
	<!-- Everything goes inside above div (with exception of the footer) -->

	</section>
    `,
    data: function () {
        return {
            //Organ details
            organdata: [],
            singleorgandata: [],

            oname: "", //organ name
            infoOne: "", //information one
            infoTwo: "", //information two

            //Testimonial details
            testimonialdata : [],
            singletestimonialdata : [],

            tname : "", //testimonial name
            tsource : "", //testimonial video
            tinfo : "", //info
    
        };
      },
    
        created : function() {
            this.fetchOrganData(null);
            this.fetchTestimonialData(null);
        },
    
        methods : {
            fetchOrganData(organ) {
                let url = organ ? `./admin/organ.php?organ=${organ}` : './admin/organ.php';
    
                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    this.organdata = data;
                    this.singleorgandata = data[0];
                    console.log(data);
                })
                .catch(function(error) {
                    console.log(error);
                });
            },

            organdetails({organ_name, organ_infoOne, organ_infoTwo}){
                console.log('organ info');
                this.oname = organ_name;
                this.infoOne = organ_infoOne;
                this.infoTwo = organ_infoTwo;
            },

            fetchTestimonialData(testimonial) {
                let url = testimonial ? `./admin/testimonial.php?testimonial=${testimonial}` : './admin/testimonial.php';
    
                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    if (testimonial) {
                        // getting one movie, so use the single array
                        console.log(data);
                        this.singletestimonialdata = data[0];
                    } else {
                        // push all the video (or portfolio content) into the video array
                        console.log(data);
                        this.testimonialdata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            },

            loadMovie({t_name, t_vid, t_info}) {
                this.$refs.lbox.style.display = "block";
                console.log('this would be the lightbox');
                this.tname = t_name;
                this.tsource = t_vid;
                this.tinfo = t_info;
            },

            closebox: function() {
                //closes the lightbox
              this.$refs.lbox.style.display = "none";
            },
        }
}
