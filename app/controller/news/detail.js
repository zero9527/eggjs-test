const Controller = require('egg').Controller;

class NewsDetail extends Controller {
  async index() {
    const { params, service } = this.ctx;
    const res = await service.news.detail.getDetailData(params.id);
    // console.log('res-detail: ', res);

    await this.ctx.render('news/detail.tpl', {
      newsDetail: res
    });
  }
}

module.exports = NewsDetail;
