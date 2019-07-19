import React from 'react'
import HttpUtil from '../util/Http'
import { types, flow} from 'mobx-state-tree';
import UserStore from './UserStore'

const httpUtil = new HttpUtil;

const RegisterStore = types
    .model({
        register:types.maybeNull(UserStore),
    })
    .actions(self=>{
        const registerAction = flow(function* (value){
            const uri = '/register'
            let res = yield httpUtil.postRequest(uri,value)
            let reg = UserStore.init(res.data.User)
            self.register = reg
        })
        return {registerAction} 
    })
   

export default RegisterStore