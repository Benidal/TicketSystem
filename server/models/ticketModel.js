
const mongoose =  require (' mongoose ');
const User = require (' ./UserModel');
mongoose.Promise = global.Promise;
const slug = require (' slugs ');

const TicketSchema =  new mongoose.Schema ({
    title:String,
    contenue: number,
    category: String,
    status: [String],
    urgence: String,
    impact: String,
    follow: {
        type: boolean,
        default:false
    },
    dateCreation: Date,
    type: String,
    oppenedBy: User
});
module.exports = mongoose.model('User',UserSchema);
