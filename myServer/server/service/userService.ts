import Friend from '../models/FriendEntity'
import databaseHelper from './../util/databaseHelper';
import {
    SUCCESS__MSG,
    USER,
    FRIENDS
} from '../config/const';
import RedisHelper from '../util/RedisHelper';
import R from '../models/R';
import {
    SESSION
} from './../config/const';
import SessionEntity from '../models/SessionEntity';
import User from '../models/useEntity'

export default class UserService {

    private r: R
    private code: any

    constructor() {
        this.r = new R()
    }

    //随机抽取10个不是好友的用户，该功能必须在登录状态才能使用
    getUnFriends = async (userid: any) => {
        //TODO: 如果有用户名，则需要抽取不是该用户好友的用户
        if (!!userid) {
            let Users = await RedisHelper.skey(USER) //获取全部用户
            let users = new Array()
            if (Array.isArray(Users)) {
                for (let i = 0; i < 8; i++) {
                    let userInfo: any
                    let isFriend: any
                    do {
                        //获取一个随机数
                        let userId = Math.floor(Math.random() * Users.length);
                        //根据用户id获取用户信息 
                        let data: any
                        data = await RedisHelper.get(USER, Users[userId])
                        //判断该用户是否在好友列表中 
                        isFriend = await RedisHelper.sismember("friend" + userid, "friend" + data.intimacy)
                        userInfo = data
                    } while (isFriend == 1) //是好友，则重新获取一个

                    let onlineUser = await this.getUser(userInfo.intimacy) //判断用户是否在线
                    if (onlineUser != -1) { //用户在线
                        users.push(onlineUser) //保存不是好友的数据   
                    }else{
                        i--
                    }
                }
            }
            this.code = this.r.data(users)
            return this.code
        }
    }

    //TODO: 获取全部好友
    //userid: 用户id
    getAllFriends = async (userid) => {
        //先从缓存中获取好友信息
        //let friends:any[] = new Array()
        let friends = await RedisHelper.sgetAll("friends" + userid)
        let friendsInfoOnline: any[] = new Array()
        let friendsInfoOffline: any[] = new Array()
        //获取好友详细信息
        if (Array.isArray(friends)) {
            friends.forEach(async (item) => {
                //从缓存中获取用户信息
                let u: any
                u = await RedisHelper.get(USER, item)
                if (!!u) { //如果缓存中有数据
                    //判断用户是否在线
                    let uOnline = await RedisHelper.get(SESSION, u.intimacy)
                    if (!!uOnline) { //用户在线
                        friendsInfoOnline.push(uOnline)
                    } else { //用户不在线
                        let session = new SessionEntity("", u)
                        friendsInfoOffline.push(session)
                    }
                } else { //如果缓存中没有数据，从数据库获取用户数据
                    u = await databaseHelper.findOne(User, u.intimacy)
                    //判断用户是否在线
                    let uOnline = await RedisHelper.get(SESSION, u.intimacy)
                    if (!!uOnline) { //用户在线
                        friendsInfoOnline.push(uOnline)
                    } else { //用户不在线
                        let session = new SessionEntity("", u)
                        friendsInfoOffline.push(session)
                    }
                }
            })
        }
        let info = {
            'online': friendsInfoOnline,
            'offline': friendsInfoOffline,
        }
        this.code = this.r.data(info)
    }

    //TODO: 添加好友
    //friend:userid,friendid
    addFriend = async (friend: any) => {
        //将好友数据保存进入数据库中
        const f = new Friend(friend)
        let msg = await databaseHelper.save(f)
        //插入成功
        if (msg == SUCCESS__MSG) {
            //将好友信息缓存起来
            RedisHelper.sadd("friends" + friend.userid, friend.friendid)

            this.code = this.r.data(f)
        } else {
            this.code = this.r.error('添加好友失败，请再试一次')
        }
        return this.code
    }

    //根据用户id获取人员信息，并增加在线信息
    getUser = async (userid:string) => {
        let u: any
        //先从缓存获取用户信息
        u = await RedisHelper.get(USER,userid)
        let user:any
        if (!!u) { //缓存中存在用户信息
            user = await RedisHelper.get(SESSION, userid) //判断用户是否在线
            if (!!user) { //用户在线
                return user
            }else{//用户不在线
                let session = new SessionEntity("", u)
                return session
            }
        }else{//缓存中不存在用户信息，则从数据库中获取
            let where = {
                'intimacy': userid
            }
            u = await databaseHelper.findOne(User,where)
            if (!!u){//数据库存在数据
                user = await RedisHelper.get(SESSION, userid) //判断用户是否在线
                if (!!user) { //用户在线
                    return user
                }else{//用户不在线
                    let session = new SessionEntity("", u)
                    return session
                }
            }else{//数据库不存在该用户
                return -1 //用户不存在
            }
        }
    }
}