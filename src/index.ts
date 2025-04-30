import Router from '@koa/router';
import axios from 'axios';
import Koa from 'koa';
import { getDeepSeekModels } from './apis/list-models';
import { DEEPSEEK_API_KEY } from './config';

const app = new Koa();
const router = new Router();
// const clients = new Set();

// interface Client {
//   write?: (data: string) => void;
// }

router.get('/', async (ctx) => {
  console.log('sse');
  ctx.type = 'application/event-stream';
  const responseContent = await axios.post(
    'https://api.deepseek.com/chat/completions',
    {
      messages: [],
      model: 'deepseek-chat',
      frequency_penalty: 0,
      max_tokens: 2048,
      presence_penalty: 0,
      response_format: {
        type: 'text'
      },
      stop: null,
      stream: true,
      stream_options: {
        include_usage: true
      },
      temperature: 1,
      top_p: 1,
      tools: null,
      tool_choice: null,
      logprobs: false,
      top_logprobs: null
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`
      }
    }
  );
  ctx.body = responseContent.data;
});

router.get('/models', async (ctx) => {
  console.log('get models');
  ctx.type = 'application/json';
  ctx.body = await getDeepSeekModels();
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
