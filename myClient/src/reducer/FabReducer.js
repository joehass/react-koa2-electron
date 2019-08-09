const FabReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'fabOpen': //打开或关闭弹窗
            return Object.assign({},state,{
                fabOpen:!state.fabOpen
            })
        default:
            return state
    }
}
        
export default FabReducer