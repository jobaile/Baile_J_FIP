export default {
    template: `
    <div>
        <div>

        <!-- NAV @ SMALL ONLY -->
        <h1 class="hidden">Main Navigation</h1>
            <!-- the trigger -->
            <div class="curtain-menu-button show-for-small-only" data-curtain-menu-button>
                <div class="curtain-menu-button-toggle" @click="openNav()"> 
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                </div>
            </div>
            <!-- the menu  -->
            <div class="curtain-menu">
                <div class="curtain"></div>
                <div class="curtain"></div>
                <div class="curtain"></div>
                <div class="curtain-menu-wrapper">
                    <ul class="curtain-menu-list menu vertical">
                        <!-- Nav Links -->
                        <li><a href="#">Home</a></li>
                        <li><a @click="goto('about')">About</a></li></li>
                        <li><a @click="goto('act-now')">Act Now</a></li>
                        <li><a @click="goto('testimonials')">Testimonials</a></li>
                        <li><a @click="goto('learn-more')">Learn More</a></li>	
                        <li><a href="https://www.ontario.ca/page/organ-and-tissue-donor-registration?utm_source=so&utm_medium=keyword&utm_campaign=original" target="_blank">Register</a></li>	
                        <!-- Social Media Links -->	
                        <li>
                            <a href="#" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="nav-social-icons" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="nav-social-icons" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" class="nav-social-icons" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
                            </a>
                        </li>
                </ul>
                </div>
            </div>
        <!-- END: NAV -->

            <!-- LOGO & (medium up) NAV -->
            <header class="grid-x grid-padding-x">
                <div class="small-8 small-offset-0 medium-2 medium-offset-0 large-2 large-offset-0 cell">
                    <a href="#/">
                        <img src="images/logo-main-white.svg" alt="What Are You Waiting For? Main Logo" class="main-logo">
                    </a>
                </div>
                <nav class="hide-for-small-only medium-10 medium-offset-0 large-10 large-offset-0 cell large-nav">
                    <!-- Nav Links -->
                    <ul class="float-right">
                        <li class="nav-links-large"><a href="#">Home</a></li>
                        <li class="nav-links-large"><a @click="goto('about')">About</a></li>
                        <li class="nav-links-large"><a @click="goto('act-now')">Act Now</a></li>
                        <li class="nav-links-large"><a @click="goto('testimonials')">Testimonials</a></li>
                        <li class="nav-links-large"><a @click="goto('learn-more')">Learn More</a></li>	
                        <li class="nav-links-large"><a href="https://www.ontario.ca/page/organ-and-tissue-donor-registration?utm_source=so&utm_medium=keyword&utm_campaign=original" target="_blank">Register</a></li>	
                    </ul>
                </nav>
            </header>
            
        </div>

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
             <section class="grid-x" id="section-about" ref="about">
                <div id="about-section-bckgnd" class="small-12 small-offset-0 medium-12 medium-offset-0 large-12 large-offset-0 cell">
                    <img class="show-for-small-only" src="images/bckgnd-about-mobile.png" alt="Waiting at a bus stop">
                    <img class="hide-for-small-only" src="images/bckgnd-about.png" alt="Waiting at a bus stop"> 
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
             <section class="informationTwo grid-x" ref="act-now">
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
            <section class="grid-x" ref="testimonials">
                <div class="small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                    <img class="hide-for-small-only" id="testimonal-header-img" src="images/testimonial-header-large.png" alt="testimonal header">
                    <h2 class="section-heading-white center-text show-for-small-only">Testimonials</h2>
                    <p class="testimonial-info center-text">Want to learn more about organ doation? Click to learn how you can change someone's life forever.</p>
                </div>
            </section>

            <section class="grid-x" id="testimonial-section">
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
                        <p class="media-info"> {{ tinfo }} </p>
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
            <section class="grid-x" ref="learn-more">
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
                    </div>
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
                    <img class="show-for-small-only" id="waywf-pre-footer-img" src="images/bckgnd-pre-footer-mobile.png" alt="What are you waiting for?">
                    <img class="hide-for-small-only" id="waywf-pre-footer-img" src="images/bckgnd-pre-footer-desktop.png" alt="What are you waiting for?">
                </div>
            </section>
            <!-- WHAT ARE YOU WAITING FOR? FINAL IMG -->
    
        </div>
        <!-- Everything goes inside above div (with exception of the footer) -->
    
    </section>
    </div>
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
            openNav() {
                $('[data-curtain-menu-button]').click(function(){
                    $('body').toggleClass('curtain-menu-open');
                })
            },

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

            goto(refName) {
                var element = this.$refs[refName];
                console.log(element);
                var top = element.offsetTop;
              
              window.scrollTo(0, top);
            }
        }
}
