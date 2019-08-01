
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
        case 'addFriendSuccess'://添加好友成功
            return Object.assign({},state,{
                fridendSuccess:true
            })
        case 'onCloseAddFriendSuccess'://添加好友成功
            return Object.assign({},state,{
                fridendSuccess:false
            })
        default:
            throw new Error('Unexpected action');
    }
}

export default FriendListReducer