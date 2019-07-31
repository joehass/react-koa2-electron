import { prop, Typegoose } from 'typegoose'
import { ObjectId } from 'mongodb'

//好友关系
class FriendEntity extends Typegoose{

    @prop()
    friendid?:number //好友的亲密号

    @prop()
    userid?:number //用户的亲密号

}

export default new FriendEntity().getModelForClass(FriendEntity);//将该对象导出为mongoose可使用的scheme