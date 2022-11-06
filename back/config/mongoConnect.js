const mongoose = require('mongoose');
const connectionString ="mongodb://localhost:27017/Feetwingsshop";

const dbconnect = mongoose
  .connect(connectionString,{useNewUrlParser: true})
  .then(() => {
    console.log('database Connected');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = dbconnect;