const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = `<h2>Hello World!</h2><div><a href="/news">/news</a></div>`;
  }
}

module.exports = HomeController;
