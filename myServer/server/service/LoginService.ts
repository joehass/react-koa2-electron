import {
    ModelType
} from 'typegoose'
import User from '../models/useEntity'
import R from "../models/R"
import databaseHelper from '../util/databaseHelper';
import {
    SUCCESS__MSG,
    FAUILD__MSG,
    SESSION,
    USER
} from '../config/const'
import RedisHelper from '../util/RedisHelper';
import PasswordUtil from '../util/PasswordUtil.';
import SessionEntity from '../models/SessionEntity';


export class LoginService {

    //TODO: 登录相关逻辑
    login = async (user: any) => {
        let u
        let code
        let r = new R()
        if (!!user.intimacy) {
            //先从缓存中获取数据
            u = await RedisHelper.get(USER,user.intimacy)
            if (!!u) { //缓存中有数据,则取缓存中数据
                let result = this.verifyPassword(user.password,u.password)
                if (result === 0){
                    code = r.error('用户名或密码错误')
                }else{
                    let token = this.generatorToken();//重新生成token
                    let session = new SessionEntity(token,u)
                    
                    //将用户数据缓存起来
                    RedisHelper.set(SESSION,u.intimacy, session)
                    code = r.data(session)
                }
            } else { //从数据库读取数据
                let where = {
                    'intimacy': user.intimacy
                }
                u = await databaseHelper.findOne(User, where)

                //如果数据库中有值
                if (!!u) {
                    //验证密码
                    let result = this.verifyPassword(user.password, u.password)
                    if (result === 0) {
                        code = r.error('用户名或密码错误')
                    } else {
                        //生成token
                        let token = this.generatorToken();
                        let session = new SessionEntity(token,u)
                        //将用户数据缓存起来
                        RedisHelper.set(SESSION, u.intimacy, session) //缓存，下次从redis中取
                        code = r.data(session)
                    }

                } else { //用户不存在
                    code = r.error('用户名或密码错误')
                }
            }

            return code
        }
    }

    //TODO:注册相关逻辑,注册结束后生成token，保持登录
    register = async (user: any) => {
        let Intimacy = this.generatorIntimacy()
        user.intimacy = Intimacy
        let code
        const u = new User(user)
        let r = new R()
        let msg = await databaseHelper.save(u)

        if (msg == SUCCESS__MSG) { //插入成功

            let token = this.generatorToken() //生成token
            let session = new SessionEntity(token,user)
            //持久化
            RedisHelper.set(SESSION,Intimacy + '', session) //缓存，下次从redis中取
            RedisHelper.set(USER,Intimacy + '', u) //缓存，下次从redis中取
            
            code = r.data(session)
        } else {
            code = r.data('')
        }
        return code
    }

    //TODO: 从数据库获取salt
    getSalt = async (user: any) => {
        let u
        let code
        let intimacy = user.intimacy
        let r = new R()
        if (!!intimacy) {
            //先从缓存中获取
            u = await RedisHelper.get(USER,intimacy)
            if (!!u) {
                code = r.data(u.salt)
            } else { //从数据库获取
                let where = {
                    'intimacy': user.intimacy
                }
                u = await databaseHelper.findOne(User, where)
                if (!!u) {
                    code = r.data(u.salt)
                }
            }
        }
        return code
    }

    //TODO:生成亲密号,一串8位随机数
    generatorIntimacy() {
        let ran: string = ''
        for (let i = 0; i < 9; i++) {
            ran += Math.floor(Math.random() * 10) + ''
        }
        return Number(ran);
    }

    //TODO: 生成token
    generatorToken() {
        let token = PasswordUtil.genRandomNum(24)
        return token
    }

    //TODO: 验证密码是否正确
    verifyPassword(password: string, dbPassword: string): number {
        if (password === dbPassword) {
            return 1
        } else {
            return 0
        }
    }
}