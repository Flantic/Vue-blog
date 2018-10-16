//折叠导航切换状态
export const menuSwitch = (state,payload)=>{
    if(payload){  
        state.MenuStatus = payload.flag
    }else{
        state.MenuStatus =  !state.MenuStatus
    }
    let body = document.querySelector('body')
    state.MenuStatus? body.classList.add('overflow') 
    :body.classList.remove('overflow')
}
