<template>
    <div class="back-top" @click='scorllTop'>
        <i class="icon"></i>
    </div>
</template>

<script>

export default {
    methods:{
        scorllTop(){ 
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