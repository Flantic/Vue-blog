<template>
        <div class="page-mask" v-show="MenuStatus || MaskStatus" @click="Switch"></div>
</template>

<script>
import common from '../mixin/common.js'
export default {
    mixins:[common],
    computed:{
        MenuStatus(){
            return this.$store.state.MenuStatus
        },
        MaskStatus(){
            return this.$store.state.MaskStatus
        }
    }
}
</script>

<style scoped>
.page-mask{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background:rgba(0,0,0,.5);
    overflow:hidden;
    z-index:99;
}
</style>