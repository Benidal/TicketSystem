const mongoose =  require (' mongoose ');
mongoose.Promise = global.Promise;
const slug = require (' slugs ');

const UserSchema =  new mongoose.Schema ({
    name:{
        type: String ,
        trim: true
    },
    age: number,
    email: String,
    phone: [String],
    birthday: String,
    role:{
        permissions: String,
        rolename: String
    }
    
});
module.exports = mongoose.model('User',UserSchema);
