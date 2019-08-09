import {get} from 'config'

export const MONGO_PORT = 27017
export const DB_NAME = "enai"
export const MONGO_HOST ="localhost"

//成功
export const SUCCESS__MSG=1;
//失败
export const FAUILD__MSG=0;

export const USER = 'user_table' // 用户信息缓存

export const SESSION ='session' // token缓存

export const FRIENDS = 'friend' // 好友缓存