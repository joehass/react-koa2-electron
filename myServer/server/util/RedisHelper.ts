//TODO: redis帮助类
import redis from 'redis'
import { resolve } from 'url';

 class RedisHelper {
    
    client:any

    createClient = () =>{
        return new Promise(resolve=>{
            this.client = redis.createClient(6379, '127.0.0.1', {
                password: 'huye'
            });
            // 注册事件，注意 ready 事件在 connect 事件前面
            this.client.on("error", function (error) {
                console.log("Error " + error);
                console.log("redis error");
            });
    
            this.client.on("ready", function (err) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    console.log("redis ready");
                }
            })
    
            this.client.on("connect", function (error) {
                if (error) {
                    console.log("Error " + error);
                } else {
                    console.log("redis connect");
                }
            })
    
            this.client.on("reconnecting", function (error) {
                if (error) {
                    console.log("Error " + error);
                } else {
                    console.log("redis reconnecting");
                }
            })
    
            this.client.on("end", function (error) {
                if (error) {
                    console.log("Error " + error);
                } else {
                    console.log("redis end");
                }
            })
    
            this.client.on("warning", function (error) {
                if (error) {
                    console.log("Error " + error);
                } else {
                    console.log("redis warning");
                }
            })
            resolve()
        })
        
    }

    //TODO: 保存键值
    set = (key:string,value:any) => {
        let value1 = JSON.stringify(value)
        console.log(value1)
        this.client.set(key,value1)
    }
    
    //TODO: 获取键值
    get = async(key:string) => {
        return new Promise(resolve=>{
            this.client.get(key,function(error, res){
                if(error){
                    console.log("redis 发生错误: " + error)
                }
                console.log("传入的key: "+ key)
                console.log("从redis中获取的数据: " + res)
                let value =  JSON.parse(res)
                resolve(value)
                return
            })
        }).then(r=>{
            return r
        })  
    }

}

export default new RedisHelper()