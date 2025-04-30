// 路由定义
import Router from '@koa/router';
import useController from '../controllers/useController';
import authMiddleware from '../middlewares/authMiddleware';

const { login, register, protectedRoute } = await useController();
const { verifyToken } = await authMiddleware();

//用户注册
const router = new Router();

const { register, login, protectedRoute } = await useController();
const { verifyToken } = await authMiddleware();
//用户登录
router.post('/register', register);
router.post('/login', login);
//受保护的路由，需要JWT验证
router.get('/protected', verifyToken, protectedRoute);

export default router;
