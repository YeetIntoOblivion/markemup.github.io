<template>
  <div id="account">
    <modal-component :message="errormessage" :title="errortitle" :type="errortype" :visible="errorvisible" @modalClose="errorvisible = false" />
    <menubar-component :title="'Account'"/>
    <loading-component v-if="loading" :animated="true" :width="100"/>
  </div>
</template>

<script>

import MenubarComponent from '../components/MenuBar.vue'
import ModalComponent from '../components/Modal.vue'
import LoadingComponent from '../components/Loading.vue'

export default {
    name: "AccountView",
    data(){
      return{
        errormessage: "",
        errortitle:"",
        errortype: "info",
        errorvisible: true,
        loading: true
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

</style>