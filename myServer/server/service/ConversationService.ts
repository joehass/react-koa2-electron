import databaseHelper from "../util/databaseHelper";
import ConversationEntity from "../models/ConversationEntity";
import UserUtil from "./util/UserUtil";
import R from "../models/R";

export default class ConversationService {
    
    private r: R
    private code: any

    constructor() {
        this.r = new R()
    }
    
    /**
     *  TODO: 获取所有会话
     *  userid: 用户id
     * @memberof ConversationService
     */
    getAllConversation = async(userid:any)=>{
        let convers = new Array()
        let where = {
            intimacy:userid
        }
        let conversions = new Array();
        //从数据库获取该成员所有会话
        conversions = await databaseHelper.find(ConversationEntity,where)
        //将查询结果转换为页面所需要的内容
        if (Array.isArray(conversions)){
            for(let i in conversions){
                let con = conversions[i]
                if (con instanceof ConversationEntity){
                    let targettype:string = con.targettype
                    let targetid:string = con.targetid
                    let targetname:string = con.targetname
                    if (targettype == '0'){//单聊消息
                        let targetids = targetid.split(',')
                        if(userid === targetids[0]){//判断targetId
                            targetid = targetids[1]
                        }else{
                            targetid = targetids[0]
                        }
                        targetname = await UserUtil.getUserName(targetid)
                    }
                    let conversion = {
                        targetid:targetid,
                        targettype:con.targettype,
                        targetname:targetname,
                        unreadcnt:con.unreadcnt,
                        istop:con.istop,
                        sendtime:con.sendtime,
                        msgcontent:con.msgcontent,
                        senderid:con.senderid,

                    }
                    convers.push(conversion)
                }
                
            }
        }
        this.code = this.r.data(convers)
        return  this.code
    }

    //TODO: 同步会话到数据库
    syncConvers = async() =>{

    }
} 