import Koa from 'koa'

const app = new Koa();

app.use(async (ctx,next)=>{
    ctx.body = 'PORT11'
    next()
})

app.listen(4444)