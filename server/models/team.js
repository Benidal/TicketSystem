
const mongoose =  require (' mongoose ');
const User = require (' ./UserModel');
mongoose.Promise = global.Promise;
const slug = require (' slugs ');

const teamSchema =  new mongoose.Schema ({
   id: ObjectId,
   name:
});
module.exports = mongoose.model('User',UserSchema);
