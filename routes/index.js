var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: '没人聊天工具'
  });
});

router.get('/chat', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
