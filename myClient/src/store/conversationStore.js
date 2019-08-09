
import HttpUtil from '../util/Http'
import { types ,flow} from "mobx-state-tree";
const httpUtil = new HttpUtil;

const Conversation = types.model({
    targetid:types.optional(types.string,""),
    targettype:types.optional(types.string,""),
    targetname:types.optional(types.string,""),
    unreadcnt:types.optional(types.number,0),
    istop:types.optional(types.number,0),
    sendtime:types.optional(types.number,0),
    msgcontent:types.optional(types.string,""),
    senderid:types.optional(types.string,"")
}).actions(self =>({}))
.views(self =>({})) //对属性的一些值进行查看



const ConversationStore = types.model({
    conversation:types.optional(types.array(Conversation),[]), //会话列表
}).actions(self=>{
    //value:userid
    const getAllConversation = flow(function *(value){
        const url = '/getAllConver'
        let values = {
            userid:value
        }
        let data = yield httpUtil.postRequest(url,values)
        if (data.success === 1){
            if (data.data.length == 0){//没有会话
                
            }else{
                let convers = data.data
                for(let i of convers){
                    let conver = convers[i]
                    Conversation.create(conver)
                    self.conversation.push(Conversation)
                }  
            }
        }
    })
    return {getAllConversation}
})
// .views(self => ({
//     get sortConver(){ //会话列表排序
//         function sortby (prop){
//             return function (a,b){
//               let value1 = a[prop]
//               let value2 = b[prop]
//               return value2-value1
//             }
//         }
//         return self.conversation.sort(sortby('sendtime'))
//     }
// }))
export default ConversationStore