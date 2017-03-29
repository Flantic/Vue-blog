<template>
    <div class="about-view">
        <div class="cat">
            <div class="head">
                <div class="ear"></div>
                <div class="face">
                    <div class="eyes"></div>
                </div>
            </div>
            <div class="body">
                <div class="leg"></div>
                <div class="left-hand hand"></div>  
                <div class="right-hand hand"></div>
            </div>
            <div class="tail">

            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scpoed>
.about-view{
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e3e3e3;
    background-image: -webkit-radial-gradient(50% 50% farthest-side,#666 0,#e3e3e3 100%);
    background-image: radial-gradient(farthest-side at 50% 50%,#666 0,#e3e3e3 100%);
}
.cat{
    margin: 100px;
    width: 780px;
    height: 400px;
    position: relative;
}
.head{
    .ear{
        position: absolute;
        left:45px;
        top:-80px;
        width: 0;
        height: 0;
        border-bottom: 150px solid #000;
        border-left: 75px solid transparent;
        border-right: 75px solid transparent;
        transform: skew(-15deg);
        border-radius: 35px 35px 125px 125px;
        z-index: 2; 
        &:after{
            content:"";
            display:block;
            position: absolute;
            left:140px;
            top:50px;
            width: 0;
            height: 0;
            border-bottom: 150px solid #000;
            border-left: 75px solid transparent;
            border-right: 75px solid transparent;
            transform: skew(-10deg);
            transform:rotate(18deg);
            border-radius: 35px 35px 125px 125px;
            z-index: 2; 
        }
        &:before{
            content:"";
            display:block;
            position: absolute;
            left:141px;
            top:50px;
            width: 0;
            height: 0;
            border-bottom: 150px solid #fff;
            border-left: 75px solid transparent;
            border-right: 75px solid transparent;
            transform: skew(-10deg);
            transform:rotate(18deg);
            border-radius: 35px 35px 125px 125px;
            z-index: 2; 
        }
    }
    .face{
        position:absolute;
        width: 358px;
        height: 263px;
        border-right:1px solid #fff;
        background-color: rgb(0, 0, 0);
        border-radius: 208px 218px 222px 184px / 190px 160px 151px 126px;
        transform:rotate(12deg);
        z-index:3;
    }
}


</style>