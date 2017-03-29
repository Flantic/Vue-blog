<template>
    <span>
        <SideNav></SideNav>
        <div class="container" :class="MenuStatus? 'offset':''" @click="Switch">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <Page-Mask></Page-Mask>
    </span>
</template>
<script>
import PageMask from './components/PageMask'
import SideNav from './components/SideNav'
export default {
    computed:{
        MenuStatus(){
            return this.$store.state.MenuStatus
        }
    },
    components:{
        SideNav,
        PageMask
    },
    methods:{
        Switch(payload={flag:false}){
            this.$store.commit('menuSwitch',arguments[0])
        },
    }
}
</script>
<style lang="scss">
@import './style/common/core';
.container{
    position:relative;
    display:flex;
    flex-direction: column;
    width:100%;
    min-height:100vh;
    // will-change: transform;
    transition: transform .5s;
}
.container.offset{
    transform: translate3d(240px,0,0);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
::selection{color:#fff;background:#262a30;}
::-moz-selection{color:#fff;background:#262a30;}
::-webkit-selection{color:#fff;background:#262a30;}
body{ background:#f1f1f1;}
</style>

