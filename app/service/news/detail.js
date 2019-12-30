const Service = require('egg').Service;
const NewsModel = require('../../db/NewsModel.js');

class NewsDetailService extends Service {
  async getDetailData(_id) {
    if (!_id) {
      return (this.ctx.body = {
        code: 0,
        data: null,
        msg: 'id 不能为空！'
      });
    }

    return await NewsModel.findOne({ _id });
  }
}

module.exports = NewsDetailService;
