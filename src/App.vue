<template>
    <span>
        <SideNav></SideNav>
        <div class="container" :class="MenuStatus? 'offset':''" @click="Switch">
            <router-view></router-view>
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
body{ background:#666;}
</style>

