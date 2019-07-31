
import {LoginService} from '../../service/LoginService'
import User  from '../../models/useEntity';
import { bindContext } from '../../decorator/decorator';

class LoginController {
    
    private readonly loginService:LoginService

    constructor(){
        this.loginService = new LoginService()
    }

  // @bindContext(User)
     register = async(ctx)=>{
        let data = ctx.request.body
        let body =  await this.loginService.register(data)   
        ctx.body = body
    }

    login = async(ctx)=>{
        let data = ctx.request.body

        let body = await this.loginService.login(data)
        ctx.body = body
    }

    //TODO: 从数据库获取salt
    getSalt = async(ctx)=>{
        let data = ctx.request.body

        let body = await this.loginService.getSalt(data)
        ctx.body = body
    }
}

export default new LoginController()