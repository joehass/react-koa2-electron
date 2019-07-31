
//TODO: session类，该类不需要持久化到数据库
export default class SessionEntity {

    constructor(token:string,User:any){
        this.User = User
        this.token = token
    }

    token:string

    User:any
}

