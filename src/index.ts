import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === '/') {
    // 直接返回对话补全的接口
  }
});

const port = (process.env.SERVER_PORT as string) ?? 8121;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
