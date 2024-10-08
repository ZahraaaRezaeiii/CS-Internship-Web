var root = require('./todoget/root');
var download = require('./todoget/download');
var upload = require('./todopost/upload');
var signIn = require('./todopost/signIn-server');
var signUp = require('./todopost/signUp-server');
module.exports={
    root,
    download,
    upload,
    signIn,
    signUp
}