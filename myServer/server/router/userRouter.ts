import Router from 'koa-router'
import LoginController from '../controller/Login/LoginController'
import UserController from '../controller/User/UserController'


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
router.post('/login',LoginController.login)
router.post('/getSalt',LoginController.getSalt)
router.post('/addFriend',UserController.addFriend)//添加好友
router.post('/getAllFriends',UserController.getAllFriends)//获取全部好友
router.post('/getUnFriends',UserController.getUnFriends)//好友推荐

export default router