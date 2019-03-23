export default {
    //video is the table
    // vid_thumb is the column
    template: /*html*/ `
    <section class="grid-x">
        <div id="learn-more-section">
            <div id="organ-icons-container" class="center-text small-10 small-offset-0 medium-10 medium-offset-0 large-10 large-offset-0 cell">
                <img :src="'images/organs/' + organ.organ_icon" v-for="organ in organdata" class="organ-icons" alt="organ" @click="organdetails(organ)">     
            </div>
            <div id="organInformation" class="center-text small-10 small-offset-0 medium-10 medium-offset-0 large-10 large-offset-0 cell">
                <h2 class="organ-name bold">{{ oname }}</h2>
                <p class="organ-info"> {{ infoOne }}</p>    
                <p class="organ-fact"> {{infoTwo }}</p>    
            </div>
        </div>     
    </section>
   `,

   data: function () {
    return {
        //Organ details
        organdata: [],
        singleorgandata: [],

        oname: "",
        infoOne: "",
        infoTwo: "",
    };
  },

    created : function() {
        this.fetchOrganData(null);
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
        }
    }
  };