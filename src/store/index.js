import Vue from 'vue'
import Vuex from 'vuex'

// import * as Mutations from './mutations'
// import * as Actions from './actions'
// import * as Getters from './getters'
import state from './state'

Vue.use(Vuex)
// console.log(State)
// export default new Vuex.Store({
//     // state 保存初始数据
//     state: {
//         sideNavStatus: false
//     },
//     getters: {

//     },
//     mutations: {
//         sideNavSwitchStatus: state => {
//             state.sideNavStatus = !state.sideNavStatus
//         },
//         sideNavStatusflase: state => {
//             state.sideNavStatus = false
//         }
//     }
//     //  mutations 函数
//     // Mutations,
//     // // 触发事件函数
//     // actions,
//     // // 取值函数
//     // getters
// })

export default new Vuex.Store({
    state,
    mutations: {
        MenuStatusSwitch (state) {
            state.MenuStatus = !state.MenuStatus
        }
    }
})