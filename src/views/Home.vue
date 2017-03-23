<template>
    <div class="home-view" ref="scorllElement">
        <h1>主页</h1>
        <BackTop></BackTop>
        <h2 @click='scorll'> 哈哈哈哈</h2>
    </div>
</template>

<script>
import BackTop from '@/components/BackTop'
import BScroll from 'better-scroll'
export default {
    mounted(){
        this.$nextTick(()=>{
            this._initScroll();
        })
        // this._initScroll();
    },  
    data(){
        return{
            indexScroll:{},
            startY:0,
            startX:0
        }
    },
    components:{
        BackTop
    },
    methods:{
        _initScroll(){
                this.indexScroll = new BScroll(this.$refs['scorllElement'],{
                click:true,
                startY:50,
                startX:0,
                momentum: true
            })
           
            this.indexScroll.on('scroll', (pos) => {
                console.log(pos.x + '~' + posx.y)
            })
        },
        scorll(){
            this.indexScroll.scrollTo(0, 0)
        }
    }   
}
</script>
<style lang="scss">

h1{text-align:center;height:3000px; background:#eee;}
</style>