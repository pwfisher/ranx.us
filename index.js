/*global require, console, __dirname */
var splice = require('./lib/splice/index.js'),

    spliceServer = new (splice.Server)({
        pages_dir: __dirname + '/pages',
        static_dir: __dirname + '/public',
        servlets_dir: __dirname + '/servlets',
        static_postscript: 'inc/postscript.html'
    });

spliceServer.listen(8082);
