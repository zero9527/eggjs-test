const { app, mock, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/news.test.js', () => {
  it('返回5条数据', () => {
    return app
      .httpRequest()
      .get('/news?page=1')
      .expect(200)
      .expect(1);
  });
});
