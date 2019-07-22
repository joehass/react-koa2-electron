
import {UserService} from '../../service/userService'
import User  from '../../models/useEntity';
import { bindContext } from '../../decorator/decorator';

class LoginController {
    
    private readonly userService:UserService

    constructor(){
        this.userService = new UserService()
    }

  // @bindContext(User)
     register = async(ctx)=>{
        let data = ctx.request.body
        let body =  await this.userService.register(data)   
        ctx.body = body
    }

    login = async(ctx)=>{
        let data = ctx.request.body

        let body = await this.userService.login(data)
        ctx.body = body
    }

    //TODO: 从数据库获取salt
    getSalt = async(ctx)=>{
        let data = ctx.request.body

        let body = await this.userService.getSalt(data)
        ctx.body = body
    }
}

export default new LoginController()