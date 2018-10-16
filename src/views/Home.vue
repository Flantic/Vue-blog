<template>
    <div class="home-view" ref="scorllElement">
        <div class="header-bar mb30">
        </div>      
        <el-row class="page-all content">
            <el-col :span="17" class="left-cont">
                <article class="article-cont">
                    <header class="header-pic">
                        <img src="../assets/bg3.jpg" alt="">
                    </header>
                    <div class="post-inner">
                        <h1 class="post-title"><a href="" class="post-title-link">二次元图扩图神器——waifu2x【壁纸神器】</a></h1>
                        <div class="post-meta">
                            <p class="post-date"><span>On </span><a >2016 年 12 月 17 日</a></p>
                            <p class="post-author"><span>By </span><a rel="author">倒霉透顶の小兽人</a></p>
                            <p class="post-categories"><span>In </span><a  rel="category tag">杂货铺</a>, <a rel="category tag">游戏</a>, <a rel="category tag">狗熊管理局</a></p>
                            <div class="post-content">
                                <p>春秋战国时期，是华夏历史上军事斗争层出不穷，战乱不休，学术思想文化异彩纷呈，诸子百家争鸣，政治局面错综复杂的一个时代，也是中国从此步入封建社会的标志性的时代，对于中国人的我们，自小便熟知这段历史，但在外国人眼中，春秋战国时期远没有三国这么耳熟能详，当然主要是这段历史没有一本“四大名著”中“三国演义”这样的书在世界上广泛流传，所以认知程度差了很多。</p>
                                <p>春秋战国时期，是华夏历史上军事斗争层出不穷，战乱不休，学术思想文化异彩纷呈，诸子百家争鸣，政治局面错综复杂的一个时代，也是中国从此步入封建社会的标志性的时代，对于中国人的我们，自小便熟知这段历史，但在外国人眼中，春秋战国时期远没有三国这么耳熟能详，当然主要是这段历史没有一本“四大名著”中“三国演义”这样的书在世界上广泛流传，所以认知程度差了很多。</p>
                            </div>
                        </div>
                    </div>
                </article>
            </el-col>
            <el-col :span="6" :offset="1" class="right-cont">
                <section class="admin-info">
                    <div class="admin-head"></div>

                </section>
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
        var utterThis = new window.SpeechSynthesisUtterance('没想到吧，我又回来啦！,而且我还会说English');
        window.speechSynthesis.speak(utterThis);
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
<style lang="scss" scoped>
@import '../style/article.scss';
.home-view{
    display:flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    overflow:hidden;
    // background-color:#eee;
    &::before {
        content: ' ';
        position: fixed; // instead of background-attachment
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: white;
        background: url('../assets/bg2.jpg') no-repeat center center;
        background-size: cover;
        background-attachment:fixed;
        will-change: transform; // creates a new paint layer
        z-index: -1;
    }
}
.header-bar{
    height:500px;
    background:rgba(238,238,238,.5);
}
.left-cont{
   position:relative;
   top:-120px;
}
@media screen and(max-width:800px){
    .right-cont{ display:none;}
    .left-cont{ width:90%; margin:0 auto; float:none;}
    .post-inner{
        padding: 30px 4%;
        .post-title{ font-size:20px;}
    }  
}
@media screen and(max-width:420px){
    .left-cont{ width:98%;}
}
.right-cont{
   
   .admin-info{
        margin-bottom:30px;
        height:400px;
        background:#fff;
        border-radius:3px;
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.2);
   }
}
</style>