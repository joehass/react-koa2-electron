//TODO: redis帮助类
import redis from 'redis'

export default class RedisHelper {
    
    client:any

    createClient =() =>{
        this.client = redis.createClient(6381,'127.0.0.1')
        this.client.on('connect',()=>{
            console.log('redis 连接成功')
        })
    }

    //保存键值
    set = (key:string,value:any) => {
        this.client.set(key,value)
    }
    
    //获取键值
    get = (key) => {
        return this.client.get(key)
    }

}