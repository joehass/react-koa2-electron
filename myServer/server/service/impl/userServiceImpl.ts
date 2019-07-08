import { Arg, Resolver, Query, Authorized, Mutation, Ctx, ID, InputType, Field } from 'type-graphql'
import { User } from '../../models/useEntity';
import { UserService } from '../userService';

class CreateUserInput implements Partial<User>{

    @Field(type => String)//标识graphql
    userAccount:string;

    @Field(type => String)
    userPassword:string;
}

@Resolver(User)
export default class UserServiceImpl{
    private readonly service: UserService;

    constructor(){
        this.service = new UserService
    }

    @Query(returns => User)
    async me(@Arg('userId') userid:string){
        return await this.service.findOneById(userid)
    }

    //对应post请求
    @Mutation(returns => CreateUserInput)
    async createUser(@Arg('user') user:User){
        this.service.createUser(user)
    }

}
