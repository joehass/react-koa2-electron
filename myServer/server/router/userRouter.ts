import Router from 'koa-router'
import LoginController from '../controller/Login/LoginController'
import UserController from '../controller/User/UserController'
import ConversationController from '../controller/conversation/ConversationController'


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

//TODO: 登录相关路由
router.post('/register',LoginController.register)
router.post('/login',LoginController.login)
router.post('/getSalt',LoginController.getSalt)

//TODO: 好友相关路由
router.post('/addFriend',UserController.addFriend)//添加好友
router.post('/getAllFriends',UserController.getAllFriends)//获取全部好友
router.post('/getUnFriends',UserController.getUnFriends)//好友推荐

//TODO: 会话相关路由
router.post('/syncConver',ConversationController.syncConvers)//同步会话到数据库
router.post('/getAllConver',ConversationController.getAllConversation)//获取所有会话

export default router