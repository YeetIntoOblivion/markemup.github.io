<template>
  <div id="dashboard">
    <modal-component :message="errormessage" :title="errortitle" :type="errortype" :visible="errorvisible" @modalClose="errorvisible = false" />
    <menubar-component :title="'Dashboard'"/>
    <div class="dashcard">
      <div class="dashcounter">
        <loading-component v-if="loading" :animated="true" :width="75"/>
        <span v-if="!loading">{{numberMarksOpen}}</span>
        </div>
      <div class="dashtext">Marks from people</div>
    </div>

    <div class="dashcard">
      <div class="dashcounter">
        <loading-component v-if="loading" :animated="true" :width="75"/>
        <span v-if="!loading">{{numberGivenMarks}}</span>
        </div>
      <div class="dashtext">Given marks</div>
    </div>

    <div class="dashcard cardclick">
      
      <div class="dashtext">Quick mark</div>
    </div>

    <div class="dashcard cardclick">
      
      <div class="dashtext">Notifications</div>
    </div>

  </div>
</template>

<script>

import MenubarComponent from '../components/MenuBar.vue'
import ModalComponent from '../components/Modal.vue'
import LoadingComponent from '../components/Loading.vue'

import MarkService from '../services/MarkService.js'

export default {
    name: "DashboardView",
    data(){
      return{
        errormessage: "",
        errortitle:"",
        errortype: "info",
        errorvisible: false,
        loading: true,
        numberMarksOpen: 0,
        numberGivenMarks: 0
      }
    },
    mounted(){
     this.getReceicedMarks();
     this.getGivenMarks();
    },
    methods:{
      getReceicedMarks(){
        MarkService.getReceivedMarksForUser(this.$cookies.get('auth-userid'), this.$cookies.get('auth-token'))
        .then(response => {
          this.loading = false;

          if(response.length > 0){
            for (let i = 0; i < response.length; i++) {
            this.numberMarksOpen += response[i].numberOpen;
            
          }
          } else this.numberMarksOpen = 0;
          
        })
        .catch(error => {
           error = error.response;
           this.errortitle="Error: " + error.status
           this.errortype="error"
           this.errormessage=error.data
           this.errorvisible = true;
        })
      },
      getGivenMarks(){
        MarkService.getGivenMarksForUser(this.$cookies.get('auth-userid'), this.$cookies.get('auth-token'))
        .then(response => {
          this.loading = false;

          if(response.length > 0){
            for (let i = 0; i < response.length; i++) {
            this.numberGivenMarks += response[i].numberOpen;
            
          }
          } else this.numberGivenMarks = 0;
          
        })
        .catch(error => {
           error = error.response;
           this.errortitle="Error: " + error.status
           this.errortype="error"
           this.errormessage=error.data
           this.errorvisible = true;
        })
      }
    },
    components:{
      MenubarComponent,
      ModalComponent,
      LoadingComponent
    }
}
</script>

<style>

.dashcard{
  
  margin: 2rem;
  border-radius: 15px;
  filter: drop-shadow(4px 4px 5px rgb(98, 98, 98));
  background-color: white;
  
}

.dashtext{
  
  padding: 1rem;
  font-size: 1.5rem;
}

.dashcounter{
  border-bottom: solid 1px #bdbdbd;
  font-size: 4rem;
  color: #ad2121;
  padding: 1rem;
}

.cardclick:active{
  filter:drop-shadow(2px 2px 2px rgb(98, 98, 98));
  background-color: rgb(243, 243, 243);
}

</style>