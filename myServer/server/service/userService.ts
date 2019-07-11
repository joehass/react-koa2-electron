import { ModelType } from 'typegoose'
import User from '../models/useEntity'
import R from "../models/R"
import databaseHelper from './../util/databaseHelper';

export class UserService{

    //TODO:注册相关逻辑
     register = async(user:any)=>{
        let Intimacy = this.generatorIntimacy()
        user.intimacy = Intimacy
        
        const u = new User(user)
        let r = new R()
        await databaseHelper.save(u,function(msg){
            if(msg == 0){//插入成功
               return r.data(user)
            }else{
                return r.error(msg)
            }
        })
    }

    //TODO:生成亲密号,一串8位随机数
    generatorIntimacy(){
        let ran:string = ''
        for(let i = 0; i < 9; i++){
            ran += Math.floor(Math.random()*10)+''
        }
        return ran;
    }
}
