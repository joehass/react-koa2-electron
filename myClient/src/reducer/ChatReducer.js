const ChatReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'openConvers': //打开或关闭会话
            return Object.assign({},state,{
                openConvers:true,
                openFriends:false
            })
        case 'openFriends': //打开或关闭好友
            return Object.assign({},state,{
                openConvers:false,
                openFriends:true
            })
        default:
           return state
    }
}

export default ChatReducer