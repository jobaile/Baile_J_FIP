export default {
    template: `
    <div class="container">

        <div>
            <img v-for="tbl_testimonial in videodata" :src="'images/testimonials/' + tbl_testimonial.t_pic" alt="testimonial pic" @click="loadMovie">
        </div>

        <div>
            <h3 class="movie-title"> {{ tname }}</h3>
            <video :src="'video/testimonials/' + tsource" autoplay controls></video>
            <p> {{ tinfo }} </p>
        </div>

    </div>
    `,

    data: function () {
        return {
          //Testimonials 
            videodata : [],
            singlemoviedata : [],

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
                    this.singlemoviedata = data[0];
                } else {
                    // push all the video (or portfolio content) into the video array
                    console.log(data);
                    this.videodata = data;
                }
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        
        loadMovie(e) {
            console.log('this would be the lightbox');

            this.singlemoviedata = currentData;

            let dataKey = e.currentTarget.getAttribute('href');

            var currentData = this.videodata.filter(tbl_testimonial => tbl_testimonial.t_id === dataKey);

            //this.tname = currentData[0].t_name;
            //this.tsource = currentData[0].t_vid;
        }
    }
}