const Koa = require('koa');
const KoaRouter = require('koa-router');

const publishTime = new Date().toLocaleString();

let app = new Koa();
const router = KoaRouter();
const port = process.env.PORT || 4000;
router.get('/', async (ctx, next) => {
    console.log(`hit ${port}`);
    ctx.body = {
        message: `hit ${port}`,
        publishTime,

    };
    ctx.status = 200;
})

app.use(router.routes(), router.allowedMethods());

app = app.listen(port, () => {
    console.log(`listen in ${port} ...`)

});
module.exports = app;