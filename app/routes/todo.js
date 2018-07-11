
const sleep = async(ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

// add
KY.onPost('/todo/add', (ctx) => {
  let item = {
    todo: ctx.request.body.todo,
    time: Date.now(),
    isExpire: false
  }
  console.log(item);
  ctx.body = {
    success: true,
    data: '添加成功'
  }
});

// del
KY.onPost('/todo/del', (ctx) => {
  let id = ctx.request.body.id;
  // todo
  console.log(id);
  ctx.body = {
    success: true,
    data: '删除成功'
  }
});

// list
KY.onGet('/todo/list', async (ctx) => {
  await sleep(1000)
  KY.logger({
    todo: 'xxx123',
    time: '1523242570104',
    isExpire: false
  });
  ctx.body = {
    list: [{
      todo: 'xxx123',
      time: '1523242570104',
      isExpire: false
    }]
  }
});
