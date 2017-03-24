<template>
    <span>
        <SideNav></SideNav>
        <div class="container">
            <router-view></router-view>
        </div>
    </span>
</template>
<script>
import SideNav from './components/SideNav'
export default {
    components:{
        SideNav
    }
}
</script>
<style lang="scss">
@import './style/common/core';
.container{
    will-change: transform;
    transition: transform .5s;
}
.container.offset{
    transform: translate3d(240px,0,0);
}
body{ background:#666;}
</style>

