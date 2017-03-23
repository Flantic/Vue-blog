import Vue from 'vue'
import Vuex from 'vuex'

// import * as Mutations from './mutations'
// import * as Actions from './actions'
// import * as Getters from './getters'
import State from './state'

Vue.use(Vuex)

export default new Vuex.Store({
    // state 保存初始数据
    State
    //  mutations 函数
    // mutations,
    // // 触发事件函数
    // actions,
    // // 取值函数
    // getters
})