mongoose.Promise = global.Promise;
var url = "mongodb://afaf:afaf@ds059195.mlab.com:59195/my_first_db";


mongoose.connect(url)
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));