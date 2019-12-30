const Controller = require('egg').Controller;

class NewsController extends Controller {
  // page
  async index() {
    const { query, service } = this.ctx;
    const newsList = await service.news.index.getNewsList(query.page || 1);

    // console.log('newsList2: ', newsList);
    await this.ctx.render('news/list.tpl', { list: newsList });
  }

  // page
  async edit() {
    const { params, service } = this.ctx;
    if (!params.id) {
      return (this.ctx.body = {
        code: 0,
        data: null,
        msg: 'id 不能为空！'
      });
    }
    const res = await service.news.detail.getDetailData(params.id);

    await this.ctx.render('news/edit.tpl', { detail: res });
  }

  // api
  async newsAdd() {
    const { request, service } = this.ctx;
    const { title, desc } = request.body;

    if (!title) {
      return (this.ctx.body = {
        code: 0,
        data: null,
        msg: 'title 不能为空！'
      });
    }

    if (!desc) {
      return (this.ctx.body = {
        code: 0,
        data: null,
        msg: 'desc 不能为空！'
      });
    }

    await service.news.index.addNews(title, desc);
  }

  // api
  async newsUpdate() {
    const { request, service } = this.ctx;
    const { _id, title, desc } = request.body;

    if (!title) {
      return (this.ctx.body = {
        code: 0,
        data: null,
        msg: 'title 不能为空！'
      });
    }

    if (!desc) {
      return (this.ctx.body = {
        code: 0,
        data: null,
        msg: 'desc 不能为空！'
      });
    }

    await service.news.index.updateNews(_id, title, desc);
  }
}

module.exports = NewsController;
