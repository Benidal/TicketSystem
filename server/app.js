const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); 
const app  =  require (' express ');
const router = require ('./routes/index ');

app.get('/',router);
