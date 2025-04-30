import Router from '@koa/router';
import Koa from 'koa';

const app = new Koa();
const router = new Router();
const clients = new Set();

// interface Client {
//   write?: (data: string) => void;
// }

router.post('/sse', (ctx) => {
  ctx.type = 'text/event-stream';
  ctx.set('Cache-Control', 'no-cache');
  ctx.set('Connection', 'keep-alive');
  ctx.set('Authorization', 'Bearer sk-57c85c002c924891892e7923608638a5');
  // 解析请求体，获取可能的 POST 数据
  const postBody = ctx.request.body || {};
  console.log('Received POST data:', postBody);
  ctx.req.on('close', () => {
    clients.delete(ctx);
    console.log('Client disconnected');
  });
  clients.add(ctx.res);
  // 发送一个初始消息，告知客户端已连接
  ctx.res.write(`data: Connected to SSE\n\n`);
});

// async function fetchExternalData() {
//   try {
//     const response = await axios.get('https://api.deepseek.com/chat/completions');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data from external API:', error);
//     return null;
//   }
// }

// function sendMessage(message: { event: string; data: { num: number; time: string; data: unknown | null } }) {
//   clients.forEach((client: Client | unknown) => {
//     if (!client!.write!) return;
//     try {
//       client.write(`data: ${message}\n\n`);
//     } catch (error) {
//       console.error('Error sending message to client:', error);
//       clients.delete(client);
//     }
//   });
// }

// setInterval(async () => {
//   const externalData = await fetchExternalData();
//   if (externalData) {
//     const message = {
//       event: 'externalData',
//       data: {
//         num: 1,
//         time: new Date().toISOString(),
//         data: externalData
//       }
//     };
//     sendMessage(message);
//   }
// }, 1000);

app.use(router.routes()).use(router.allowedMethods());
const port = (process.env.SERVER_PORT as string) ?? 8121;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
