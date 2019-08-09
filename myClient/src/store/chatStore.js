import { types} from "mobx-state-tree";
import User from "./UserStore";

//TODO: 存储聊天对象信息
const ChatStore = types.model({
    intimacy:types.optional(types.integer,0),//亲密号
}).actions(self=>{
    //只需要保存id即可
    function saveChatInfo(value){
        self.intimacy = value.intimacy
    }
    return {saveChatInfo}
})

export default ChatStore


