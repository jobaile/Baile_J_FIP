export default {
    template: `
    <div class="container">

        <div>
            <img v-for="item in testimonialdata" :src="'images/testimonials/' + item.t_pic" alt="testimonial pic" @click="loadMovie(item)">
        </div>

        <div>
            <h3 class="movie-title"> {{ tname }} </h3>
            <video :src="'video/testimonials/' + tsource" autoplay controls></video>
            <p> {{ tinfo }} </p>
        </div>

    </div>
    `,

    data: function () {
        return {
          //Testimonials 
            testimonialdata : [],
            singletestimonialdata : [],

            //Testimonial Details
            tname : "",
            tsource : "",
            tinfo : "",
        };  
      },

    created : function() {
        this.fetchMovieData(null);
    },

    methods : {
        fetchMovieData(testimonial) {
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
        
        loadMovie({t_name, t_vid}) {
            console.log('this would be the lightbox');
            this.tname = t_name;
            this.tsource = t_vid;
        }
    }
}