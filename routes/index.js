var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: '没人聊天工具'
  });
});

router.get('/chat', function *(next) {
  yield this.render('chat', {
    title: 'Hello World foo!'
  });
});

router.get('/login', function *(next) {
  yield this.render('login', {
    title: '登录'
  });
});

module.exports = router;
