import { Arg, Resolver, Query, Authorized, Mutation, Ctx, ID, InputType, Field } from 'type-graphql'
import { User } from '../../models/useEntity';
import { UserService } from '../userService';


@Resolver(User)
export default class UserServiceImpl{
    private readonly service: UserService

    constructor(){
        this.service = new UserService
    }

    @Query(returns => User)
    async me(@Arg('userId') userid:string){
        return await this.service.findOneById(userid)
    }
}