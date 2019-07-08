import Router from 'koa-router'
import LoginController from '../controller/Login/LoginController'


const router = new Router()

router.get('/login',(ctx)=>{
    debugger
    console.log("ctx"+ctx)
    const books = [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
        },
        {
          title: 'Jurassic Park',
          author: 'Michael Crichton',
        },
      ];
    ctx.body = books;
})

router.post('/register',LoginController.register)

export default router