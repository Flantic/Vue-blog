<template>
    <div class="home-view" ref="scorllElement">
        <h1>主页</h1>      
        <Back-Top></Back-Top>
    </div>
</template>

<script>
import BackTop from '@/components/BackTop'
// import SideNav from '@/components/SideNav'
import BScroll from 'better-scroll'
export default {
    mounted(){
    },  
    data(){
        return{
            
        }
    },
    components:{
        BackTop
    },
    methods:{
        
    }   
}
</script>
<style lang="scss">
.home-view{
    display:flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
}
h1{text-align:center;height:8000px; background:#eee;}
</style>