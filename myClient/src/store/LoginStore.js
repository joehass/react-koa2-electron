import { types ,flow} from "mobx-state-tree";
import HttpUtil from '../util/Http'
import User from "./UserStore";
import usePasswordEncode from '../util/CryptoUtil'


const httpUtil = new HttpUtil;

const LoginStore = types.model({
    user:types.maybeNull(User),
    token:types.optional(types.string,"")
}).actions(self =>{
    const LoginAction = flow(function *(value){

        const uri1 = './getSalt'
        let value1 = {
            intimacy:value.intimacy
        }
        let res1 = yield httpUtil.postRequest(uri1,value1)
        if (res1.success === 1){
            let salt = res1.data //获取盐
            //密码加密
            let {salt1,encodePassword} = usePasswordEncode(value.password,salt)//密码加密

            const uri = './login'
            value.password = encodePassword
            let res = yield httpUtil.postRequest(uri,value)
            if (res.success === 1){//登录成功
                let u = User.create(res.data.User)
                self.user = u
                self.token = res.data.token
            }else{//登录失败，保存登录数据
                let u = User.create(value)
                self.user = u
            }
        }       
    })

    const registerAction = flow(function* (value){
        let {salt,encodePassword} = usePasswordEncode(value.password)//密码加密
        value.password = encodePassword
        value.salt = salt
        const uri = '/register'
        let res = yield httpUtil.postRequest(uri,value)
        if (res.success === 1){//注册成功
            let u = User.create(res.data.User)
            self.user = u
            self.token = res.data.token
        }
    })

    return {LoginAction,registerAction}
})

export default LoginStore