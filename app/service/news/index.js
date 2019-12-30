const Service = require('egg').Service;
const NewsModel = require('../../db/NewsModel.js');

class NewsService extends Service {
  async getNewsList() {
    const newsList = await NewsModel.find().limit(10);
    return newsList;
  }

  async addNews(title, desc) {
    const news = new NewsModel({ title, desc });
    try {
      const res = await news.save();
      if (res.errors) {
        return (this.ctx.body = {
          code: 0,
          data: null,
          msg: '新增失败！'
        });
      }

      this.ctx.body = {
        code: 1,
        data: null,
        msg: '新增成功！'
      };
    } catch (err) {
      throw err;
    }
  }

  async updateNews(_id, title, desc) {
    try {
      const res = await NewsModel.findByIdAndUpdate(_id, {
        $set: { title, desc, update_time: Date.now() }
      });

      if (res.errors) {
        return (this.ctx.body = {
          code: 0,
          data: null,
          msg: '修改失败！'
        });
      }

      this.ctx.body = {
        code: 1,
        data: null,
        msg: '修改成功！'
      };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = NewsService;
