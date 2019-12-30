const mongoose = require('./mongoose.js');

const newsSchema = new mongoose.Schema({
  title: String,
  desc: String,
  add_time: { type: Date, default: Date.now },
  update_time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('news', newsSchema);
