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
                <img data-interchange="[/Baile_J_FIP/images/bckgnd-about-mobile.png, small], [/Baile_J_FIP/images/bckgnd-about.png, medium], [/Baile_J_FIP/images/bckgnd-about.png, large]" alt="Waiting at a bus stop">
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
                <h1></h1>
            </div>
            <div class="cell small-12 medium-auto large-auto">
                <img src="" alt="">
                Testimonial 1
            </div> 
            <div class="cell small-12 medium-auto large-auto">
                <img src="" alt="">
                Testimonial 2
            </div> 
            <div class="cell small-12 medium-auto large-auto">
                <img src="" alt="">
                Testimonial 3
            </div> 
        </section>
        <!-- END TESTIMONIAL SECTION -->


        
        <!-- WAITING STAT 4 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">Less than 20% of Canaidans have plans to donate their organs.</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 4 -->

        

        <!-- LEARN MORE ABOUT ORGANS SECTION -->
        <section class="grid-x">
        <div id="learn-more-section">
            <div id="learn-more-section-header" class="center-text small-10 small-offset-0 medium-10 medium-offset-0 large-10 large-offset-0 cell">
                    <h2 class="section-heading">Learn More</h2>
                    <p class="organ-info">Want to learn more about organ doation? Click on an organ to learn how you can change someone's life forever.</p>
            </div>
            <div id="organ-icons-container" class="center-text small-10 small-offset-0 medium-10 medium-offset-0 large-10 large-offset-0 cell">
                <img class="organ-icons" src="images/organs/heart.svg" alt="Heart">
                <img class="organ-icons" src="images/organs/intestine.svg" alt="Intestine">
                <img class="organ-icons" src="images/organs/kidney.svg" alt="Kidney">
                <img class="organ-icons" src="images/organs/liver.svg" alt="Liver">
                <img class="organ-icons" src="images/organs/lung.svg" alt="Lung">
                <img class="organ-icons" src="images/organs/pancreas.svg" alt="Pancreas">
                <img class="organ-icons" src="images/organs/bones.svg" alt="Bones">
                <img class="organ-icons" src="images/organs/eyes.svg" alt="Cornea">
            </div>
            <div id="organInformation" class="center-text small-10 small-offset-0 medium-10 medium-offset-0 large-10 large-offset-0 cell">
                <h2 class="organ-name bold">Organ Name</h2>
                <p class="organ-info">This is where the organ info pops up!</p>
                <p class="organ-fact">Did you know: ...</p>
            </div>
        </div>     
        </section>
         <!-- END: LEARN MORE ABOUT ORGANS SECTION -->


        <!-- WAITING STAT 5 -->
		<section class="grid-x">
            <div class="stat-container small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <video autoplay muted loop src="video/wavelength.mp4"></video>
                <div class="center-text">
                    <h2 class="stat-text">Up to 1.8 million Ontarians mistakenly believe they are registered organ and tissue donors. Are you one of them?</h2> 
                </div>                     
            </div>
        </section>
        <!-- END WAITING STAT 5 -->


        <!-- WHAT ARE YOU WAITING FOR? FINAL IMG -->
		<section class="grid-x">
            <div class="small-12 small-offset-0 medium-12 small-offset-0 large-12 small-offset-0 cell">
                <img id="waywf-pre-footer-img" data-interchange="[/Baile_J_FIP/images/bckgnd-pre-footer-mobile.png, small], [/Baile_J_FIP/images/bckgnd-pre-footer-mobile.png, medium], [/Baile_J_FIP/images/bckgnd-pre-footer-desktop.png, large]" alt="What are you waiting for?">
            </div>
        </section>
        <!-- WHAT ARE YOU WAITING FOR? FINAL IMG -->

    </div>
	<!-- Everything goes inside above div (with exception of the footer) -->

	</section>
	`,
}