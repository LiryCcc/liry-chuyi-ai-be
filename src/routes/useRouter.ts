// 路由定义
import Router from '@koa/router';
import useController from '../controllers/useController';
import authMiddleware from '../middlewares/authMiddleware';

const { login, register, protectedRoute } = await useController();
const { verifyToken } = await authMiddleware();

//用户注册
const router = new Router();
//用户登录
router.post('/register', login);
router.post('/login', register);
//受保护的路由，需要JWT验证
router.get('/protected', protectedRoute, verifyToken);

export default router;
