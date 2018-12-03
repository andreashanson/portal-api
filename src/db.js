const mongoose = require('mongoose');
const config = require('./config');
const connectionString = config.mongo_uri;

mongoose.connect(connectionString, { useNewUrlParser: true }, function(err, db) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
    console.log(err);
  }
  else {
    console.log('Successfully connected to MongoDB!');
  }
});
