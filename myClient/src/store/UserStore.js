import { types ,flow} from "mobx-state-tree";

const UserStore = types.model({
    intimacy:types.optional(types.string,""),//亲密号
    password:types.optional(types.string,""),//密码
    sex:types.optional(types.string,"1"),//性别
    userAccount:types.optional(types.string,""),//账号
    userName:types.optional(types.string,""),//昵称
})
.actions(self=>{
    init (value){
        if (!!value.intimacy){
            self.intimacy = value.intimacy
        }
        if (!!value.password){
            self.password = value.password
        }
        if (!!value.sex){
            self.sex = value.sex
        }
        if (!!value.userAccount){
            self.userAccount = value.userAccount
        }
        if (!!value.userName){
            self.userName = value.userName
        }
    }
    
    return {init}
})
.views(self =>({})) //对属性的一些值进行查看

export default UserStore