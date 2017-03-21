import Router from 'koa-router';

const router = Router();

router.get('/', (ctx) => {
  const result = ctx;
  result.body = { a: 1, b: 2, c: 3 };
});

export default router;
