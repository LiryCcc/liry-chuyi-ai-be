import Koa from 'koa';  // 导入Koa框架
import Router from '@koa/router';  // 导入koa-router用于路由管理
import cors from '@koa/cors';

const app = new Koa();  // 创建一个Koa应用实例
const router = new Router();  // 创建一个路由实例

// 定义一个简单的GET路由
router.get('/', async (ctx) => {
  ctx.body = 'Hello, Koa!';  // 返回响应内容
});

app.use(cors());
// 使用路由中间件
app.use(router.routes()).use(router.allowedMethods());

// 启动服务器，监听3000端口
const port = (process.env.SERVER_PORT as string) ?? 8121;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
