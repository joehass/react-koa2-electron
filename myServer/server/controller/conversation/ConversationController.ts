//会话相关
import ConversationService from './../../service/ConversationService';
class ConversationController {

    private readonly conversationService:ConversationService

    constructor(){
        this.conversationService = new ConversationService()
    }

    //TODO: 同步会话到数据库
    syncConvers = async()=>{
        
    }

    //TODO: 获取所有会话
    getAllConversation = async(ctx) =>{
        let data = ctx.request.body
        let code = await this.conversationService.getAllConversation(data.userid)
        ctx.body = code
    }
}

export default new ConversationController()