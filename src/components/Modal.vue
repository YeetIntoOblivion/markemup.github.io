<template>
  <div id="modal" v-if="visible">

      <div class="modalcontainer">
          <div class="modaltitle">{{title}}</div>
          <div class="modalicon"><img :src="iconUrl" alt="Icon"></div>
          <div class="modalmessage">{{message}}</div>
          <button class="modalclose" @click="this.$emit('modalClose')">Close</button>
      </div>

  </div>
</template>

<script>
export default {
    name: "ModelComponent",
    props:{
        title: String,
        type: String,
        message: String,
        visible: Boolean
    },
    data(){
        return {
            iconUrl: require("@/assets/" + this.type + ".png")
        }
    }
}
</script>

<style scoped>

#modal{
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    padding-top: 10rem;
    box-sizing: border-box;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.modalcontainer{
    box-sizing: border-box;
    padding: 1rem;
    width: 80%;
    margin: auto;
    background-color: white;
    border-radius: 15px;
}

.modaltitle{
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: solid 1px #2d2d2d;
    box-sizing: border-box;
}

.modalicon{
    width: 4rem;
    margin: .5rem auto;
}

.modalicon img{
    width: 100%;
    
}

.modalmessage{
    margin-bottom: 1rem;
    font-weight: 550;
}

.modalclose{
    margin-top: .5rem;
    width: 50%;
    font-size: 1rem;
    border: solid 1px #ad2121;
    border-radius: 5px;
    padding: .5rem;
    background-color: white;
    color: #ad2121;
}

.modalclose:active{
    background-color:rgb(223, 223, 223) ;
}



</style>