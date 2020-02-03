const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

const publishTime = new Date().toLocaleString();
router.get('/', async (ctx, next) => {
    ctx.body = publishTime;
    ctx.status = 200;
})





app.use(router.routes(), router.allowedMethods());
app.listen(4000, () => {
    console.log('listen in 4000 ...')
})