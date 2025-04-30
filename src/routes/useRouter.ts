// 路由定义
import Router from '@koa/router';
import useController from '../controllers/useController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

//用户注册
const router = new Router();
//用户登录
router.post('/register', useController.register);
router.post('/login', useController.login);
//受保护的路由，需要JWT验证
router.get('/protected', authMiddleware.verifyToken, useController.protectedRoute);

module.exports = router;
