
import {UserService} from '../../service/userService'
import User  from '../../models/useEntity';
import { bindContext } from '../../decorator/decorator';

class LoginController {
    
    private readonly userService:UserService

    constructor(){
        this.userService = new UserService()
    }

  // @bindContext(User)
     register = async(ctx,next)=>{
        let data = ctx.request.body
        let body =  await this.userService.register(data)   
        ctx.body = body
    }

    login = async(ctx)=>{
        let data = ctx.request.body

        let body = await this.userService.login(data)
    }
}

export default new LoginController()