
const FriendListReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'open': //打开或关闭弹窗
            return Object.assign({},state,{
                open:!open
            })
        case 'loginTip'://提醒登录
            return Object.assign({},state,{
                open:!open
            })
        default:
            throw new Error('Unexpected action');
    }
}

export default FriendListReducer