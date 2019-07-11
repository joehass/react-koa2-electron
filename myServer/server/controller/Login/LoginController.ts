
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
        let res
        res = await this.userService.register(data)
        
        ctx.body = res
    }
}

export default new LoginController()