//这里保存context
import GlobalContext from '../config/globalContext'
import {SaveContext} from '../decorator/decorator';
import databaseHelper from '../util/databaseHelper';
import User from '../models/useEntity'
import RedisHelper from '../util/RedisHelper';
import { USER } from '../config/const';

class Midd {

    //TODO: 从数据库获取所有用户信息并缓存
    getAllUser = async()=>{
        const data = await databaseHelper.findAll(User) //从数据库查出所有人员信息
        data.forEach(async(item) => {
            RedisHelper.set(USER,item.intimacy,item)
        });
    }
}

export default new Midd()
