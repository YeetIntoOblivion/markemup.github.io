<template>
  <div id="menubar">
      <div class="titlebar"><span>{{title}}</span><burger-component :openBurger="openBurger" @toggleBurger="openBurger = !openBurger"/></div>
      <div class="dropdown" :class="{open: openBurger}">
          <div class="menuitem userheader"><span id="itemtext">{{currentUser}}</span></div>
          <!--<div v-for="m in menuItems" :key="m.title" class="menuitem"><router-link :to="'/' + m.title.toLowerCase()"/><span id="itemtext">{{m.title}}</span><img :src="require('../assets/right-arrow.png')" alt="" id="arrow"></div>-->
           <router-link v-for="m in menuItems" :key="m.title" :to="'/' + m.title.toLowerCase()"><div class="menuitem"><span id="itemtext">{{m.title}}</span><img :src="require('../assets/right-arrow.png')" alt="" id="arrow"></div></router-link>  
      </div>
  </div>
</template>

<script>
import BurgerComponent from './Burger.vue'

export default {
    name: "MenubarComponent",
    components:{
        BurgerComponent
    },
    props:{
        title: String
    },
    mounted(){
        this.menuItems.splice(this.menuItems.findIndex(i => {return i.title == this.title}),1);
    },
    data(){
        return{
            openBurger: false,
            currentUser: "Hallo, " + this.$cookies.get('auth-username') + "!",
            menuItems: [
                        {title:"Dashboard"}, 
                        {title: "Groups"}, 
                        {title: "Marks"},
                        {title: "Friends"}, 
                        {title: "Account"}, 
                        {title: "Settings"}
                        ]
        }
    }
}
</script>

<style>

.titlebar{
    background-color: #ad2121;
    color:white;
    font-size: 2rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    filter: drop-shadow(0px 5px 5px grey);
}

.titlebar span{
    font-weight: 600;
}

.menuitem{
    display: none;
    transition: .25s ease-in-out
}


.dropdown.open .menuitem{
    padding: 1rem .7rem;
    display: flex;
    justify-content: space-between;
    border-bottom:solid 1px rgb(167, 167, 167);
    background-color: white;
    font-size: 1.5rem;
    
}

.dropdown.open .menuitem img{
    width: 1.8rem;
    height: 1.8rem;
}

.dropdown.open .menuitem:active{
    background-color: rgb(199, 199, 199);
    color: white;
}

.dropdown.open .menuitem:active img{
    filter:invert();
}

.dropdown{
    height: 0;
    position: absolute;
    z-index: 5;
}

.dropdown.open{
    background-color: rgba(0, 0, 0, .2);
    height: 100%;
    width:100%;
   
   
}

.dropdown.open a{
     text-decoration: none;
     color: #2d2d2d;
}


</style>