<template>
    <div class="sign-view">
        <div class="sign-wrap" :class="{'login':signStatus==1}">
            <div class="switch-type-btn" @click="signStatusSwitch" ref="switchBtn">
                <router-link :to="{path:'Sign',query:{type:'login'}}" v-if="signStatus == 0"></router-link>
                <router-link :to="{path:'Sign',query:{type:'register'}}" v-else></router-link>
            </div>
            <div class="form-wrap">
                <h3 v-if="signStatus == 0">Sign Up</h3>
                <h3 v-else>Sign In</h3>
                <div class="sign-form mt10">
                    <div class="form-item">
                        <label for="account" class="">Account</label>
                        <input type="text" spellcheck="false" autocomplete="false" id="account" value="" 
                        @focus="getfoucs($event)" 
                        @blur="lostfoucs($event)"
                        @onChange="contentListen($event)">
                        <span class="input-progress"></span>
                    </div>
                    <div class="form-item" >
                        <label for="password" class="">Password</label>
                        <input type="password" spellcheck="false" autocomplete="false" id="password" value="" 
                        @focus="getfoucs($event)" 
                        @blur="lostfoucs($event)">
                        <span class="input-progress"></span>
                    </div>
                    <div class="form-item" v-if="signStatus == 0">
                        <label for="password" class="">Password Again</label>
                        <input type="password" spellcheck="false" autocomplete="false" id="password" value="" 
                        @focus="getfoucs($event)" 
                        @blur="lostfoucs($event)">
                        <span class="input-progress"></span>
                    </div>
                    <div class="form-item" v-if="signStatus == 0">
                        <label for="password" class="">Email</label>
                        <input type="text" spellcheck="false" autocomplete="false" id="email" value="" 
                        @focus="getfoucs($event)" 
                        @blur="lostfoucs($event)">
                        <span class="input-progress"></span>
                    </div>
                    <button v-if="signStatus == 0">Sign Up</button>
                    <button v-else>Sign In</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
    },
    data(){
        return {
            //登陆状态码 0为注册,1为登陆
            // signStatus:1,
            formData:[
            ]
        }
    },
    computed:{
        signStatus(){
            if(this.$route.query.type == 'register'){
                return 0;
            }else{
                return 1;
            }
        }
    },
    methods:{
        getfoucs(event){
            let e = event.target || window.event.target; 
            e.previousSibling.previousSibling.classList.add('shrink');
        },
        lostfoucs(event){
            let e = event.target || window.event.target;
            if(e.value != '') return;
            e.previousSibling.previousSibling.classList.remove('shrink');
        },
        contentListen(event){
            let e = event.target || window.event.target;
            let len = e.value;
            if(len<6){
                console.log(len)
            }
        },
        signStatusSwitch(){
            let newStatus = this.signStatus ==0? 1:0;
            let elem = this.$refs.switchBtn;
            elem.classList.add('cover');
            setTimeout(()=>{
                this.signStatus = newStatus
                elem.classList.remove('cover');
            },400)
        },
    },
    watch:{
        $route(){
            if(this.$route.query.type == 'register'){
                this.signStatus =0;
            }else{
               this.signStatus = 1;
            }
            console.log(this.$route.query)
        }
    }
}
</script>

<style lang="scss">
$SignIn:#3498db;
$SignUp:#00b281;
.sign-view{
    position: relative;
    flex: 1;
    min-height: 100vh;
    background-image: url('../assets/bg1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    display: flex;
    justify-content: center; 
    align-items: center;
    .sign-wrap{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 350px;
        height: 400px;
        border-radius: 8px;
        overflow: hidden;
        padding: 30px 40px;
        background-color: #1b1b1b;
        transition: height .3s;
        opacity: .95;
        &.login{
            height:280px;
        }
        h3{
            color: $SignUp;
            font-size: 20px;
            -webkit-transition: color .3s;
            transition: color .3s;
            &:before{
                content: "";
                position: absolute;
                left: 0;
                width: 5px;
                height: 30px;
                background-color: $SignUp;
                transition: background-color .3s;
            }
        }
        .form-wrap{
            flex:1;
        }
    }
    .sign-form{
        button{
            margin-top: 15px;
            width: 100%;
            padding: 8px 0;
            color: #fffffb;
            text-align: center;
            font-size: 16px;
            border: none;
            border-radius: 20px;
            background-color: $SignUp;
            box-shadow: 0 0 5px 3px rgba(0,0,0,.16);
            transition: background-color .2s;
            &:active{
                background-color: #00996f;
                box-shadow: inset 2px 2px 2px rgba(0,0,0,.36);
            }
        }
    }
    .switch-type-btn{
        position: absolute;
        right: 0;
        top: 0;
        height: 0;
        width: 0;
        cursor: pointer;
        border-top: 28px solid $SignUp;
        border-left: 28px solid transparent;
        transition: all .4s;
        z-index: 9;
        &.cover{
            height: 0;
            width: 0;
            border-top: 800px solid $SignUp;
            border-left: 800px solid transparent;
        }
        a{ 
            position:absolute; 
            top:-28px;
            left:-28px; 
            display:block; 
            width:28px; 
            height:28px;
        }
    }
    .form-item{
        margin: 24px 0;
        position: relative;
        &:after{
            content: "";
            height: 2px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: hsla(0,0%,100%,.16);
        }
        label{
            position: absolute;
            top: 50%;
            left: 0;
            color: #868686;
            font-size: 14px;
            transform: translate3d(0,-50%,0);
            transition: all .3s;
            &.shrink{
                font-size: 12px;
                top: -15px;
                transform: translateZ(0);
            }
        }
        input{
            position: relative;
            width: 100%;
            padding: 8px 0;
            color: #fffffb;
            background-color: transparent;
            border: none;
            &:-webkit-autofill{
                -webkit-text-fill-color: #fffffb;
                -webkit-box-shadow: 0 0 0 1000px #1b1b1b inset;
            }
        }
        .input-progress{
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 0;
            transition: width .3s;
        }
    }
}
//登陆状态
.sign-wrap.login{
    .switch-type-btn{
        border-top-color: $SignIn;
        border-right-color: $SignIn;
        background:#fff;
    }
    .sign-form button{
        background-color: $SignIn;
        &:active{
            background-color: #258cd1;
        }
    }
    .form-wrap{
        h3{
            color: $SignIn;
            &:before{ background-color:$SignIn;}
        }
    }
}
</style>