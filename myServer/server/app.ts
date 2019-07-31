import Koa from 'koa'
import Database from './mongoose/database'
import {UserRouter} from './router/index'
import cors from 'koa2-cors'
var bodyParser = require('koa-bodyparser');
import RedisHelper from './util/RedisHelper';
import midd from './middleware/midd'
;(async () => {
const app = new Koa();
const database = new Database()
await database.startConnection();
await RedisHelper.createClient()
await midd.getAllUser()

//设置跨域
app.use(cors({
    origin: function (ctx) {
       return '*' //允许所有域名访问
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

app.use(bodyParser())//解析post请求传过来的参数

//启动路由
app.use(UserRouter.routes())
    .use(UserRouter.allowedMethods())

app.listen(2222)

console.log('🚀 app started at port 2222')
})()