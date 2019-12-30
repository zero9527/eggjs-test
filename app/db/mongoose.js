const mongoose = require('mongoose');

const DBURL = 'mongodb://localhost';
const options = {
  useFindAndModify: true,
  autoIndex: true, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect(DBURL, options).then(
  () => {
    console.log('mongoose open!');
  },
  err => {
    console.error('mongoose error! ', err);
  }
);

module.exports = mongoose;
