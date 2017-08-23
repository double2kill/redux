const Koa = require('koa');
const app = new Koa();

const hostname = 'localhost';
const port = 3000;

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}aaaaaaaaaa`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(port);

console.log(`服务器运行在 http://${hostname}:${port}/`);