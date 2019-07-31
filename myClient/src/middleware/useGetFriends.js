import {useStore} from '../index'

export default async function useGetFriends(prop){
    const friendStore = useStore("FriendStore")
   
    await getFriends(prop)
    
    async function getFriends(userid){
        await friendStore.friendsRecommend(userid)//获取好友信息
    }
}