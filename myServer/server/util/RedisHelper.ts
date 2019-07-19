//TODO: redis帮助类
import redis from 'redis'
import { resolve } from 'url';

 class RedisHelper {
    
    client:any

    createClient = () =>{
        return new Promise(resolve=>{
            this.client = redis.createClient(6381,'127.0.0.1',{password:'WEAVERemobile7*()'})
        
            this.client.on('ready',()=>{
                console.log('redis 连接成功')
                resolve()
            })
        })
        
    }

    //TODO: 保存键值
    set = (key:string,value:any) => {
        this.client.set(key,value)
    }
    
    //TODO: 获取键值
    get = (key) => {
        return this.client.get(key)
    }

}

export default new RedisHelper()