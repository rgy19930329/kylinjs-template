
KY.onGet('/', async (ctx, next) => {
  ctx.body = 'rgy';
});

KY.onGet('/t1/user', async (ctx, next) => {
  ctx.body = 'rgy t1 user';
});

KY.onGet('/t2/:id', async (ctx, next) => {
  ctx.body = 'rgy t2 - id: ' + ctx.params.id;
});

KY.onGet('/t3', async ctx => {
  ctx.redirect('/');
});

KY.onGet('/t4', async (ctx, next) => {
  ctx.body = 'rgy t4 - id: ' + ctx.request.query.id;
});

KY.onGet('/t5', async (ctx, next) => {
  ctx.send({
    name: 'rgy',
    mobile: '139*****245'
  });
});

KY.onGet('/index', async (ctx) => {
  var r = await KY.httpClient.mock();
  // KY.logger(JSON.stringify(r));
  ctx.render('views/index.html', {
    title: 'index',
    list: r.data.projects,
    // list: [],
  });
});

KY.onGet('/step', async (ctx) => {
  ctx.render('views/test/step.html', {
    title: 'yes'
  });
});

KY.onGet('/t6', async (ctx, next) => {
  var r = await KY.httpClient.mock();
  ctx.send(r);
});

KY.onGet('/t7', async (ctx, next) => {
  var params = ctx.request.query;
  var r = await KY.httpClient.query(params);
  ctx.send(r);
});

KY.onGet('/t8', async (ctx, next) => {
  var params = ctx.request.query;
  var r = await KY.httpClient.mockPost(params);
  ctx.send(r);
});

