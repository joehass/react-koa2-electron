import { types ,flow} from "mobx-state-tree";
import HttpUtil from '../util/Http'
import User from "./UserStore";

const httpUtil = new HttpUtil;

const LoginStore = types.model({
    user:types.maybeNull(User),
    token:types.optional(types.string,"")
}).actions(self =>{
    const LoginAction = flow(function *(value){
        const uri = './login'

        let res = yield httpUtil.postRequest(uri,value)
        if (res.success === 1){
            let u = User.create(res.data.User)
            self.user = u
            self.token = res.data.Token
        }
    })

    return {LoginAction}
})

export default LoginStore