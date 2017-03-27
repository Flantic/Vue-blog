<template>
    <div class="side-nav" :class="MenuStatus? 'is-open':'is-fold'">
        <div class="menu-btn menu-btn-outside" @click="Switch">
            <i class="icon icon-menu"></i><span>Menu</span>
        </div>
        <div class="side-menu">
            <div class="menu-btn menu-btn-inside"  @click="Switch">
                <i class="icon icon-menu"></i><span>Menu</span>
            </div>
            <div class="link-group" @click="Switch">
                <router-link class="link" to="/" exact><i class="icon icon-home"></i>Home</router-link>
                <router-link class="link" to="/Article"><i class="icon icon-article"></i>Article</router-link>
                <router-link class="link" to="/Photo"><i class="icon icon-camera"></i>Photo</router-link>
                <router-link class="link" to="/News"><i class="icon icon-news"></i>News</router-link>
            </div>
            <div class="user-group">
                <div class="sign-btn-group">
                    <router-link class="sign-btn blue-btn" :to="{path:'Sign',query:{type:'login'}}" @click.native="Switch">Sign in</router-link>
                    <router-link class="sign-btn green-btn" :to="{path:'Sign',query:{type:'register'}}" @click.native="Switch">Sign up</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Store from '@/store'  
import {mapState} from 'vuex'
export default {
    data(){
        return{
        }
    },
    methods:{
        Switch(){
            Store.commit('menuSwitch')
        },
    },
    computed: {
        ...mapState({
            MenuStatus:state=>state.MenuStatus
        })
    }
}
</script>

<style lang="scss" scoped>
.side-nav{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 240px;
    height: 100vh;
    background:#fff;
    box-shadow: 2px 0 35px rgba(0,0,0,.7);
    visibility: visible;
    transition: transform .5s ease-in-out;  
    // will-change:transform;
    z-index:100;
    &.is-outside{
        transform: translateZ(0);
    }
    &.is-inside{
        transform: translate3d(-240px,0,0);
    }
    .menu-btn{
        position: absolute;
        top: 15px;
        right: 10px;
        padding: 0 12px;
        height: 34px;
        line-height: 34px;
        border-radius: 4px;
        cursor: pointer;
        visibility: visible;
        transition: all .5s ease-in-out;
        z-index: 99; 
        .icon{
            margin-right: 5px;
            font-size: 20px;
            position: relative;
            vertical-align: middle;
            top: -1px;
        }
    }
    .menu-btn-outside{
        font-size: 15px;
        color: #fffffb;
        background-color: rgba(10,22,51,.36);
        border: 1px solid transparent;
        z-index:-1;
        &:hover{
            border-color: #fff;
        }
    }
    .menu-btn-inside{
        font-size: 18px;
        color: #3498db;
        text-shadow: 1px 1px 3px rgba(0,0,0,.86);
    }
    .user-group{
        position: absolute;
        left: 0;
        bottom: 100px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        opacity:0;
        transform:translate3d(0,50px,0)
    }
    .sign-btn{
        color: #fffffb;
        width: 150px;
        margin: 15px auto 0;
        padding: 5px 0;
        border: none;
        display: block;
        background-color: #95a5a6;
        border-radius: 20px;
        text-align: center;
        text-decoration: none;
        box-shadow: 1px 1px 3px rgba(0,0,0,.86);
        transition: background-color .2s;
        &:active{box-shadow: inset 0 2px 2px rgba(0,0,0,.36);}
        &.blue-btn{
            background-color: #3498db;
            &:active{ background-color: #258cd1; }
        }
        &.green-btn{
            background-color: #00b281;
            &:active{background-color: #00b281;}
        }
    }
}
.side-menu{
    position:relative;
    width:100%;
    height:100%;
    padding: 65px 0 0;
    overflow:hidden;
    background: linear-gradient(290deg,#141e30,#243b55);
}
.link-group{
    display:flex;
    flex-direction:column;
    text-shadow:1px 1px 3px rgba(0,0,0,.86);
    .link{
        position: relative;
        padding: 10px 20px;
        font-size: 15px;
        line-height:20px;
        font-weight: 700;
        color:#3498db;
        cursor: pointer;
        opacity:0;
        transform: translate3d(-100px,0,0);
        transition:all .3s;
        &.active{
            background-color: rgba(52,152,219,.8);
            color: #fffffb;
        }
    }
    .icon{
        margin-right: 8px;
        width: 20px;
        display: inline-block;
        font-size: 18px;
    }
}

//显示状态
.side-nav.is-open{
    visibility: visible;
    transform: translateZ(0);
    transition: transform .5s;
    .menu-btn-outside{
         visibility: hidden;
    }
    .link:first-child{
        transform: translateZ(0);
        opacity: 1;
        transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .1s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .1s;
    }
    .link:nth-child(2){
        transform: translateZ(0);
        opacity: 1;
        transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .2s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .2s;
    }
    .link:nth-child(3){
        transform: translateZ(0);
        opacity: 1;
        transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .3s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .3s;
    }
    .link:nth-child(4){
        transform: translateZ(0);
        opacity: 1;
        transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .4s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .4s;
    }
    .link:nth-child(5){
        transform: translateZ(0);
        opacity: 1;
        transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .5s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .5s;
    }
    .link:last-child{
        transform: translateZ(0);
        opacity: 1;
        transition: transform .6s cubic-bezier(.175,.885,.32,1.275) .6s,opacity .6s cubic-bezier(.175,.885,.32,1.275) .6s;
    }
    .user-group{
        transform: translateZ(0);
        opacity: 1;
        transition: transform .8s .4s,opacity .8s .4s;
    }
}
//隐藏状态
.side-nav.is-fold{
    transform: translate3d(-240px,0,0);
    .menu-btn{
        transform: translate3d(140px,0,0);
    }
    .menu-btn-inside{
        visibility:hidden;
    }
}
</style>