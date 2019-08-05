import HttpUtil from '../util/Http'
import { types ,flow} from "mobx-state-tree";

const ConversationStore = types.model({
    targetid:types.optional(types.string,""),
    targettype:types.optional(types.string,""),
    targetname:types.optional(types.string,""),
    unreadcnt:types.optional(types.number,0),
    istop:types.optional(types.number,0),
    sendtime:types.optional(types.number,0),
    msgcontent:types.optional(types.string,""),
    senderid:types.optional(types.string,"")
}).actions(self=>{
    //value:userid
    const getAllConversation = flow(function *(value){
        const url = '/getAllConver'
        let values = {
            userid:value
        }
        let data = yield HttpUtil.postRequest(url,values)
        if (data.success === 1){
            self.targetid = data.data.targetid
            self.targettype = data.data.targettype
            self.targetname = data.data.targetname
            self.unreadcnt = data.data.unreadcnt
            self.istop = data.data.istop
            self.sendtime = data.data.sendtime
            self.msgcontent = data.data.msgcontent
            self.senderid = data.data.senderid
        }
    })
    return {getAllConversation}
})

export default ConversationStore