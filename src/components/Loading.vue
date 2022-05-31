<template>
  <div id="loading" :style="loadingSize">
      <div class="markcontainer">
          <div class="mark" :style="markSize" :class="{scale1: animated}"></div>
          <div class="mark" :style="markSize" :class="{scale2: animated}"></div>
          <div class="mark" :style="markSize" :class="{scale3: animated}"></div>
          <div class="mark" :style="markSize" :class="{scale4: animated}"></div>
          <div class="mark lateral" :style="markSize" :class="{scale5: animated}"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "LoadingComponent",
    props: {
        width: Number,
        animated: Boolean
    },

    data(){
        return{
            loadingSize: {
                'width': this.width + 'px',
                'height': this.width + 'px'
            },
            markSize: {
                'width': this.width/6 + 'px'
            },
            markShadow: {
                'filter' : 'drop-shadow('+ this.width/10 +'px '+this.width/10+' px 5px grey)'
            }
        }
    }
}
</script>

<style scoped>
    #loading{
        margin: 0 auto 0 auto;
    }

    .markcontainer{
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        filter: drop-shadow(7px 7px 5px grey)
    }

    .mark{
        background-color: #2d2d2d;
        height: 100%;
        border-radius: 5px;
        
    }

    .lateral{
        position:absolute;
        left: 0;
        right: 0;
        top:0;
        bottom:0;
        margin: auto;
        transform: rotate(80deg);
        
        height: 120%;
        background-color: #ad2121;
        
        
    }

    .scale1{
        animation: scale1 5s linear infinite;
    }

    .scale2{
        animation: scale2 5s linear infinite;
    }

    .scale3{
        animation: scale3 5s linear infinite;
    }

    .scale4{
        animation: scale4 5s linear infinite;
    }

    .scale5{
        animation: scale5 5s linear infinite;
    }

    /*.markcontainer .mark:nth-child(1){
       animation: scale1 5s linear infinite;
    }

    .markcontainer .mark:nth-child(2){
       animation: scale2 5s linear infinite;
    }
    .markcontainer .mark:nth-child(3){
       animation: scale3 5s linear infinite;
    }
    .markcontainer .mark:nth-child(4){
        animation: scale4 5s linear infinite;
    }
    .markcontainer .mark:nth-child(5){
        animation: scale5 5s linear infinite;
    }*/

    @keyframes scale1{
        0%{
            height: 0%;
            
        }
        
        10% {
            height: 100%;
        }

        95%{
            height:100%
        }
        100%{
            height: 0%;
        }
        
    }

    @keyframes scale2{

        0%{
            height: 0%;
        }
         
        10%{
            height: 0%;
            
        }
        
        20% {
            height: 100%;
        }

        95%{
            height:100%
        }
        100%{
            height: 0%;
        }
        
    }
    @keyframes scale3{
        0%{
            height: 0%;
        }
         
        20%{
            height: 0%;
            
        }
        
        30% {
            height: 100%;
        }
        95%{
            height:100%
        }
        100%{
            height: 0%;
        }
    }
    @keyframes scale4{
       0%{
            height: 0%;
        }
         
        30%{
            height: 0%;
            
        }
        
        40% {
            height: 100%;
        }
        95%{
            height:100%
        }
        100%{
            height: 0%;
        }
    }
    @keyframes scale5{
        0%{
            height: 0%;
        }
         
        40%{
            height: 0%;
        } 
        
        
        50%{
            height: 120%;
        }

        95%{
            height:120%
        }
        100%{
            height: 0%;
        }
        
    }

    

    

   

    


</style>