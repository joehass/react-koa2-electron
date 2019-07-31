//TODO: redis帮助类
import redis from 'redis'
import {
    resolve
} from 'url';

class RedisHelper {

    client: any

    createClient = () => {
        return new Promise(resolve => {
            this.client = redis.createClient(6379, '127.0.0.1');
            // 注册事件，注意 ready 事件在 connect 事件前面
            this.client.on("error", function (error) {
                console.log("Error " + error);
                console.log("redis error");
            });

            this.client.on("ready", function (err) {
                if (err) {
                    console.log("ready Error " + err);
                } else {
                    console.log("redis ready");
                }
            })

            this.client.on("connect", function (error) {
                if (error) {
                    console.log("connect Error " + error);
                } else {
                    console.log("redis connect");
                }
            })

            this.client.on("reconnecting", function (error) {
                if (error) {
                    console.log("reconnecting Error " + error);
                } else {
                    console.log("redis reconnecting");
                }
            })

            this.client.on("end", function (error) {
                if (error) {

                    console.log("end Error " + error);
                    throw error
                } else {
                    console.log("redis end");
                }
            })

            this.client.on("warning", function (error) {
                if (error) {
                    console.log("warning Error " + error);
                } else {
                    console.log("redis warning");
                }
            })
            resolve()
        })

    }

    smembers = (key:string) =>{
        return new Promise(resolve =>{
            this.client.smembers(key,function(error,res){
                if(error){
                    console.log("redis 发生错误: " + error)
                }
                console.log("传入的key: " + key)
                console.log("从redis中获取的数据: " + res)
                resolve(res)
                // self.client.quit()
                return
            })
        }).then(r => {

            return r
        })
    }

    //判断集合中是否存在元素
    sismember = (key: string, value: string) => {
        const self = this
        return new Promise(resolve => {
            this.client.sismember(key, value, function (error, res) {
                if (error) {
                    console.log("redis 发生错误: " + error)
                }
                console.log("传入的key: " + key)
                console.log("从redis中获取的数据: " + res)
                resolve(res)
                // self.client.quit()
                return
            })
        }).then(r => {

            return r
        })
    }

    //TODO: 获取key
    skey = (table: string) => {
        const self = this
        return new Promise(resolve => {
            this.client.hkeys(table, function (error, value) {
                if (error) {
                    console.log("redis 发生错误: " + error)
                }
                resolve(value)
                // self.client.quit()
                return
            })
        }).then(r => {
            return r
        })

    }

    //TODO:获取value
    svalue = (table: string) => {
        const self = this
        return new Promise(resolve => {
            this.client.hvals(table, function (error, value) {
                if (error) {
                    console.log("redis 发生错误: " + error)
                }
                resolve(value)
                // self.client.quit()
                return
            })
        }).then(r => {
            return r
        })
    }

    //TODO: 保存键值
    set = (table: string, key: string, value: any) => {
        //this.client.on("ready", function () {
        let value1 = JSON.stringify(value)
        console.log(value1)
        this.client.hset(table, key, value1)
        console.log('缓存成功')
        // })

    }

    //TODO: 获取键值
    get = async (table, key: string) => {
        const self = this
        return new Promise(resolve => {
            this.client.hget(table, key, function (error, res) {
                if (error) {
                    console.log("redis 发生错误: " + error)
                }
                console.log("传入的key: " + key)
                console.log("从redis中获取的数据: " + res)
                let value = JSON.parse(res)
                resolve(value)
                // self.client.quit()
                return
            })

        }).then(r => {
            return r
        })
    }

    //TODO: 集合操作
    sadd = (key: string, value: any) => {
        this.client.on("ready", function () {
            this.client.sadd(key, value)
        })
    }

    //获取集合中得全部数据，返回值为数组
    sgetAll = async (key: string) => {
        const self = this
        return new Promise(resolve => {
            this.client.smembers(key, function (error, res) {
                if (error) {
                    console.log("redis 发生错误: " + error)
                }
                console.log("传入的key: " + key)
                console.log("从redis中获取的数据: " + res)
                resolve(res)
                // self.client.quit()
                return
            })
        }).then(r => {
            return r
        })
    }

}

export default new RedisHelper()