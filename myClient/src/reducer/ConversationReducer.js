const FabReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'getConvers': //获取所有会话
            return Object.assign({},state,{
                fabOpen:!state.fabOpen
            })
        default:
            throw new Error('Unexpected action');
    }
}