import Koa from 'koa'
import Database from './mongoose/database'
import DatabaseHelper from './util/databaseHelper'
import User from "./models/useEntity"
import {ApolloServer} from 'apollo-server-koa'

const app = new Koa();
const database = new Database()
database.startConnection();


app.use(async (ctx, next) => {
    ctx.body = 'PORT11'
    next()
})


app.listen(2222)

console.log('🚀 app started at port 2222')