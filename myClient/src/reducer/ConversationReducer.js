const ConversationReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'getConvers': //获取所有会话
            return Object.assign({},state,{
                convers:state.convers
            })
        default:
           return state
    }
}

export default ConversationReducer