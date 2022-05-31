<template>
  <div id="initializer">
     <div class="title">Mark 'Em Up</div>
     <div class="loading"><LoadingComponent :width='250' :animated='true'/></div>
      <div class="initializerText">{{initText}}</div>
  </div>
</template>

<script>

import StatusService from "../services/StatusService";
import AuthService from "../services/AuthService";
import LoadingComponent from "../components/Loading.vue";

export default {
    name: 'InitialiserView',
    components: {
        LoadingComponent
    },

    data(){
        return {
            username: "",
            password: "",
            loading: true,
            initText: "Checking server connectivity..."
        }
    },
    methods: {

    },
    created(){
        console.log("Checking connectivity...")
        this.$cookies.set('auth-token', null)
        this.$cookies.set('auth-username', null)
        this.$cookies.set('auth-roles',null)
        this.$cookies.set('auth-userid', null)

        setTimeout(() => 
        StatusService.checkStatus().then(response => {

            if(response.status == 200){
                
                if(this.$cookies.get('auth-token') == null){
                    this.$router.push("/login")
                } else{
                    AuthService.validateToken(this.$cookies.get('auth-username'), this.$cookies.get('auth-token'))
                    .then(() => {
                        
                        this.$router.push("/dashboard")
                    })
                    .catch(() => {
                        this.$router.push("/login")
                    })
                } 
                
            }
        }).catch(error => {
           if(error.code == "ERR_NETWORK") {
               this.initText = "Server could not be reached";
               
               }
        }), 5000)
    } 
}
</script>

<style>

#initializer{
    margin-top: 2rem;
}

.title{
    margin-bottom: 5rem;
    font-size: 2rem;
    font-weight: 800;
}

.loading{
    margin: 1rem;
}

.initializerText{
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;

    margin: 5rem auto 5rem auto;
}



</style>