<template>
    <div class="back-top" @click='scorllTop' v-show="btnStatus">
        <i class="icon"></i>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    mounted(){
        window.onscroll = ()=>{
            let scroolTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scroolTop>=500){
                this.btnStatus = true;
            }else{
                this.btnStatus = false;
            }
        }
    },
    data(){
        return{
           btnStatus:false 
        }
    },
    methods:{
        scorllTop(){ 
            let doc = document.documentElement.scrollTop || document.body.scrollTop;
            if(doc == 0) return;
            clearInterval(timer);  
            let timer = setInterval(function(){
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;  
                let spd = Math.floor((-osTop) / 5);  
                document.documentElement.scrollTop = osTop + spd;  
                document.body.scrollTop = osTop + spd;  
  
              if(osTop == 0){  
                clearInterval(timer);  
              }  
            },30)
        }
    }
}
</script>

<style lang="scss" scoped>
.back-top{
    position:fixed;
    right:20px;
    bottom:20px;
    width:40px;
    height:40px;
    background:pink;
    border-radius:5px;
    cursor:pointer;
}
</style>