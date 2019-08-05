import { prop, Typegoose } from 'typegoose'
import { ObjectId } from 'mongodb'

class Conversation extends Typegoose{

    id?:ObjectId //标识符

    @prop()
    intimacy?:number //用户id

    @prop()
    targetid?:string //聊天对象id

    @prop({required:true})
    targettype!:string //聊天类型,0:单聊 1:群聊 2:密聊

    @prop({required:true})
    targetname!:string //聊天对象名称

    @prop({default:0})
    unreadcnt?:number //未读数

    @prop({default:0})
    istop?:number //是否置顶,1:置顶 0:

    @prop()
    lasttime?:string //最后更新时间

    @prop({required:true})
    senderid!: string //发送人员id

    @prop()
    msgcontent?:string //消息内容

    @prop({ unique: true,required: true})
    msgid?: string //消息id
}

export default new Conversation().getModelForClass(Conversation);//将该对象导出为mongoose可使用的scheme