import HttpUtil from '../util/Http'
import { types ,flow} from "mobx-state-tree";
import LoginStore from './LoginStore'
import UserStore from './UserStore'

const httpUtil = new HttpUtil;

const FriendStore = types.model({
    friend:types.optional(types.array(LoginStore),[]), //好友
}).actions(self=>{
    /**
     * value: userid
     */
    const getAllFriend = flow(function*(value){
        self.friend.length = 0
        const uri = '/getAllFriends'
        let body = {
            userid:value
        }
        //这里接收userid
        let res = yield httpUtil.postRequest(uri,body)
        if (res.success === 1){
            let friends = res.data
            if (friends.length > 0){
               for (let friend of friends){
                   let u = UserStore.create(friend.User)
                   let login = LoginStore.create({
                        user:u,
                        token:friend.token
                    })
                   self.friend.push(login)
               }
           }
        }
    }) 
    //value:userid,friendid
    const addFriend = flow(function*(value){
        const uri = '/addFriend'
        let res = yield httpUtil.postRequest(uri,value)
        if (res.success === 1){
            console.log(res)
        }
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