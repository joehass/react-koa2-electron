import { ModelType } from 'typegoose'
import UserModel,{User} from '../models/useEntity'
import { removeAllListeners } from 'cluster';

export class UserService{
    private readonly model:ModelType<User>//创建一个modelclass对象，等同于 new User().getModelForClass(User)

    constructor(){
        this.model = UserModel
    }

    //Partial<User>是一个{}对象
    async find(selector?:Partial<User>){
        return this.model.find(selector)
    }

    async findOneById(_id: String){
        return this.model.findOne({_id})
    }
        
    async remove(_id,String){
        let entityToRemove = await this.model.findOne(_id)
        await this.model.remove(entityToRemove)
        
    }

    async count(entity:any){
        return this.model.count(entity)
    }
}