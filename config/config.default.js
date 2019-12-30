exports.keys = 'aac2333';

// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
};

exports.news = {
  pageSize: 5,
  serverUrl: 'http://localhost:7001'
};

exports.security = {
  csrf: {
    enable: false
  }
};
