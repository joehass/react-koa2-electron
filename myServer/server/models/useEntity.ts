import { prop, Typegoose, arrayProp, Ref } from 'typegoose'
import { ObjectId } from 'mongodb'

export class User extends Typegoose{
    readonly _id: ObjectId
    
    @prop({required:true}) // 标识mongosse
    userName?: string;//昵称

    @prop({required:true})
    sex?:string; //0代表男，1代表女

    @prop()
    telephone?:number;//此处全小写  电话

    @prop()
    intimacy?:number;//亲密号

    @prop()
    userAccount?:string;//账号

    @prop()
    password?:string //密码

    @prop()
    salt?:string //盐

}

export default new User().getModelForClass(User);//将该对象导出为mongoose可使用的scheme