<template>
  <div id="login">
      <ModalComponent :type="type" :message="message" :title="title" :visible="modal" @modalClose="modal = false"/>
      <div class="title">Mark 'Em Up</div>

      <div class="loading"><LoadingComponent :width='50' :animated='loading'/></div>

      <div class="loginformcontainer">
          <div class="loginfield">
              <div class="inputlabel">Username</div>
              <input type="text" class="inputfield" v-model="username">
          </div>
          <div class="loginfield">
              <div class="inputlabel">Password</div>
              <input type="password" class="inputfield" v-model="password">
          </div>
          <button type="submit" class="loginsubmit" @click="LoginUser">LOGIN</button>
      </div>

  </div>
</template>

<script>

import LoadingComponent from '../components/Loading.vue'
import ModalComponent from '../components/Modal.vue'
import Theme from '../util/Theme.js'
import AuthService from '../services/AuthService.js'
import AuthenticationrequestDto from '@/models/dtos/AuthenticationRequestDto.js';

export default {
    name: "LoginView",
    components:{
        LoadingComponent,
        ModalComponent
    },
    data() {
        return {
            username: "",
            password: "",
            baseColor: Theme.baseColor,
            accentColor: Theme.accentColor,
            loading: false,
            title: "Placeholder",
            type: "error",
            message: "Placeholder",
            modal: false
           
        }
    },
    methods: {
        LoginUser(){
            this.loading = true;
            AuthService.login(new AuthenticationrequestDto(this.username, this.password))
            .then(response => {
                this.loading  = false;
                this.$cookies.set('auth-token', response.token)
                this.$cookies.set('auth-username', response.username)
                this.$cookies.set('auth-roles', response.roles)
                this.$cookies.set('auth-userid', response.userid)
                this.$router.push('/dashboard')
            })
            .catch(error => {
                this.loading  = false;
                this.modal = true;
                error = error.response;
                if(error.status === 500){
                    this.title="Error: " + error.status
                    this.type="error"
                    this.message=error.data
                } else {
                    this.title="Something went wrong!"
                    this.type="error"
                    this.message=error.data
                }
                
                
            })
        }
    }

}
</script>

<style>

#login{
    margin-top: 2rem;
}

.title{
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: 800;
}

.loading{
    margin-bottom:3rem;
}

.loginformcontainer {
   border: solid 1px #ad2121;
   border-radius: 10px;
   width: 75%;
   padding: 2rem;
   margin: 0 auto 0 auto;
}

.loginfield{
    margin-bottom: 1rem;
}

.inputlabel{
    text-align: left;
}

.inputfield, .inputfield:focus, .inputfield:active{
    width: 100%;
    border: none;
    border-bottom: solid 1px #ad2121;
    box-sizing: border-box;
    height: 1.5rem;
    font-size: 1rem;
}



.loginsubmit{
    margin-top: .5rem;
    width: 100%;
    font-size: 1rem;
    border: solid 1px #ad2121;
    border-radius: 5px;
    padding: .5rem;
    background-color: white;
    color: #ad2121;
}

.loginsubmit:active{
    background-color:rgb(223, 223, 223) ;
}

</style>