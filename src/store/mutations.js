//折叠导航切换状态
// export const MenuSwitch = (state,payload)=>{
//         state.MenuStatus = payload
// }
//折叠导航切换状态
export const MenuSwitch = (state)=>{
    state.MenuStatus =  !state.MenuStatus
}

//折叠导航关闭
// export const MenuFold = (state)=>{
//      state.MenuStatus = false   
// }