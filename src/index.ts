import axios from 'axios';
import Koa from 'koa';
import { logger } from './utils';

const app = new Koa();

app.use(async (ctx) => {
  if (ctx.path === '/') {
    logger.info('[GET] /', { stack: 1 });
    ctx.status = 200;
    ctx.type = 'application/json';
    ctx.body = {
      code: 200,
      message: 'success',
      data: {
        num: 1,
        'heart-beat': (await axios.get('https://api-orion-ufi.pt.xiaomi.com/api/v1/info/device')).data.data
      }
    };
    return;
  }
});

const port = (process.env.SERVER_PORT as string) ?? 8121;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
