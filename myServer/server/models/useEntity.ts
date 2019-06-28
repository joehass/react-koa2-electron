import { prop, Typegoose } from 'typegoose'
import { ObjectType, Field, ID } from 'type-graphql'
import { ObjectId } from 'mongodb'

@ObjectType()
export class User  extends Typegoose{
    @Field(type => ID)
    readonly _id: ObjectId
    
    @prop({required:true}) // 标识mongosse
    @Field({nullable:true}) //标识graphql
    userName?: string;//用户名

    @prop({required:true})
    @Field()
    sex?:string; //0代表男，1代表女

    @prop()
    @Field()
    telephone?:number;//此处全小写  电话

    @prop()
    @Field()
    Intimacy?:number;//亲密号

    @prop()
    @Field()
    userAccount?:string;//账号

    @prop()
    @Field()
    userPassword?:string //密码
}

export default new User().getModelForClass(User);//将该对象导出为mongoose可使用的scheme