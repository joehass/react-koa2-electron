import { prop, Typegoose } from 'typegoose'
import { ObjectId } from 'mongodb'


export class User  extends Typegoose{
    readonly _id: ObjectId
    
    @prop({required:true}) // 标识mongosse
    userName?: string;//用户名

    @prop({required:true})
    sex?:string; //0代表男，1代表女

    @prop()
    telephone?:number;//此处全小写  电话

    @prop()
    Intimacy?:number;//亲密号

    @prop()
    userAccount?:string;//账号

    @prop()
    userPassword?:string //密码
}

export default new User().getModelForClass(User);//将该对象导出为mongoose可使用的scheme