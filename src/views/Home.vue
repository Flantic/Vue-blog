<template>
    <div class="home-view" ref="scorllElement">
        <div class="header-bar mb30">
        </div>      
        <el-row class="page-all content">
            <el-col :span="16" class="left-cont">
            </el-col>
            <el-col :span="7" :offset="1" class="right-cont">
            </el-col>
        </el-row>
        <Back-Top></Back-Top>
        <Page-Footer></Page-Footer>
    </div>
</template>

<script>
import BackTop from '@/components/BackTop'
import PageFooter from '@/components/Footer'
import BScroll from 'better-scroll'
export default {
    mounted(){
    },  
    data(){
        return{
            
        }
    },
    components:{
        BackTop,
        PageFooter
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
.header-bar{
    height:500px;
    background:#eee;
}
.left-cont{
   height:800px;
   background:#eee;
}
.right-cont{
   height:400px;
   background:#eee;
}
</style>