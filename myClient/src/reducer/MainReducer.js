const MainReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'open': //打开或关闭弹窗
            return Object.assign({},state,{
                open:!open
            })
        case 'chat'://打开或关闭聊天面板
            return Object.assign({},state,{
                chatOpen:!state.chatOpen
            })
        default:
            return state
    }
}
        
export default MainReducer