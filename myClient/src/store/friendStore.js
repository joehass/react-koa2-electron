import HttpUtil from '../util/Http'
import { types ,flow} from "mobx-state-tree";
import LoginStore from './LoginStore'
import UserStore from './UserStore'

const httpUtil = new HttpUtil;

const FriendStore = types.model({
    friend:types.optional(types.array(LoginStore),[]), //好友
}).actions(self=>{
    const getAllFriend = flow(function*(value){
        const uri = '/getAllFriends'

        //这里接收userid
        let res = yield httpUtil.postRequest(uri,value)
        if (res.success === 1){
            console.log(res.data)
        }
    }) 
    //value:userid,friendid
    const addFriend = flow(function*(value){
        const uri = '/addFriends'
        let res = yield httpUtil.postRequest(uri,value)
        
    })

    //好友推荐
    //value:userid
    const friendsRecommend = flow(function*(value){
        const uri = '/getUnFriends'
        let body={
            userid:value
        }
        let res = yield httpUtil.postRequest(uri,body)
        if (res.success === 1){
            for(let i in res.data){
                let user = res.data[i]
                if(!!user.User && user.User != null){
                    let u = UserStore.create(user.User)
                    let Login = LoginStore.create({
                        user:u,
                        token:user.token
                    })
                    self.friend.push(Login)
                    
                }   
            }
        }
    })
    
    function emptyFriend(){
        self.friend.length = 0
    }

    return {getAllFriend,addFriend,friendsRecommend,emptyFriend}
})

export default FriendStore