// 路由定义
import Router from '@koa/router';
import useController from '../controllers/user-controller';
import authMiddleware from '../middlewares/auth-middleware';

//用户注册
const userRouter = new Router();

const { register, login, protectedRoute } = await useController();
const { verifyToken } = await authMiddleware();
//用户登录
userRouter.post('/register', register);
userRouter.post('/login', login);
//受保护的路由，需要JWT验证
userRouter.get('/protected', verifyToken, protectedRoute);

export default userRouter;
