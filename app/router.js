module.exports = app => {
  const { router, controller, service } = app;

  // page
  router.get('', controller.home.index);
  router.get('/news', controller.news.index.index);
  router.get('/news/edit/:id', controller.news.index.edit);
  router.get('/detail/:id', controller.news.detail.index);

  // api
  router.post('/news/add', controller.news.index.newsAdd);
  router.post('/news/update', controller.news.index.newsUpdate);
};
