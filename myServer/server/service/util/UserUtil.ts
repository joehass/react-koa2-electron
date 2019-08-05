import RedisHelper from "../../util/RedisHelper";
import { USER } from "../../config/const";
import { User } from "../../models/useEntity";
import databaseHelper from "../../util/databaseHelper";
import UserModal from '../../models/useEntity'

class UserUtil{

    //TODO: 根据userid获取username
    getUserName = async(userid:any)=>{
        //先从缓存中获取username
        let user = await RedisHelper.get(USER,userid)
        if (!!user){
            if (user instanceof User){
                return user.userName
            }  
        }else {//如果缓存中没有该人员，则从数据库查找
            let where = {
                intimacy:userid 
            }
            let user = await databaseHelper.findOne(UserModal,where)
            if (!!user){
                if (user instanceof User){
                    return user.userName
                } 
            }else {
                return ""
            }
        }
    }
}

export default new UserUtil()