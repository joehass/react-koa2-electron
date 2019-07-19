import { ModelType } from 'typegoose'
import User from '../models/useEntity'
import R from "../models/R"
import databaseHelper from './../util/databaseHelper';
import {SUCCESS__MSG,FAUILD__MSG} from '../config/const'
import RedisHelper from './../util/RedisHelper';


export class UserService{

    //TODO: 登录相关逻辑
    login = async(user:any) =>{
        let  u
        let code
        let r = new R()
        if(!!user.intimacy){
            let where = {
               'intimacy':user.intimacy
            }
           u = await databaseHelper.find(User,where)

           //如果数据库中有值
           if (!!u){
               //生成token
               let token = this.generatorToken();
               let User = {
                    Token:token,
                    User:user
               }
                //将用户数据缓存起来
                RedisHelper.set(u.intimacy,User)//缓存，下次从redis中取
                code = r.data(User)
           }else{
                code = r.data('')
           }
           return code
        }
    }

    //TODO:注册相关逻辑,注册结束后生成token，保持登录
     register = async(user:any)=>{
        let Intimacy = this.generatorIntimacy()
        user.intimacy = Intimacy
        let code
        const u = new User(user)
        let r = new R()
        let msg = await databaseHelper.save(u)

        if(msg == SUCCESS__MSG){//插入成功
           
            let token  = this.generatorToken()//生成token
            let User = {
                Token:token,
                User:user
            }
            RedisHelper.set(Intimacy,User)//缓存，下次从redis中取
            code = r.data(User)
        }else{
            code = r.data('')
        }
        return code
    }

    //TODO:生成亲密号,一串8位随机数
    generatorIntimacy(){
        let ran:string = ''
        for(let i = 0; i < 9; i++){
            ran += Math.floor(Math.random()*10)+''
        }
        return ran;
    }

    //TODO: 生成token
    generatorToken(){
        let token = PasswordUtil.genRandomNum(24)
        return token
    }
}
