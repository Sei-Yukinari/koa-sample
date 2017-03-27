import Koa from 'koa';
import router from './routes';
import config from './config';

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 9000;
app.listen(port, console.log(`listening on port ${port}`));

module.exports = app; // for testing
