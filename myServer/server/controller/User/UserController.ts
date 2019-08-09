
import UserService from './../../service/UserService';
class UserController {
    private readonly userService:UserService

    constructor(){
        this.userService = new UserService()
    }

    //TODO: 获取用户全部好友
    getAllFriends = async(ctx) =>{
        let data = ctx.request.body.userid
        let body = await this.userService.getAllFriends(data)
        ctx.body = body

    }

    //TODO: 添加好友
    addFriend = async(ctx) =>{
        let data = ctx.request.body

        let body = await this.userService.addFriend(data)

        ctx.body = body
    }

    //获取不是该用户好友的其他用户，好友推荐功能
    getUnFriends = async(ctx) =>{
        let data = ctx.request.body
        let body = await this.userService.getUnFriends(data.userid)
        ctx.body = body
    }
}

export default new UserController()