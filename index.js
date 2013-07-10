/*global require, console */
var
    /**
     * Node built-in HTTP server module.
     */
    http = require('http'),

    /**
     * node-staticp: a simple, rfc 2616 compliant file streaming module for node, plus postscript.
     * @see https://github.com/pwfisher/node-staticp
     */
    static = require('node-staticp'),
    staticOptions = {
        'postscript': 'inc/postscript.html'
    },
    staticServer = new(static.Server)('./public', staticOptions),
    apiParamsRegex = new RegExp('^/api/([^/]+)/([^/]+)/(.*)$'),

    /**
     * Request listener - execution begins here. Master controller logic.
     *
     * @param {http.IncomingMessage} request
     * @param {http.ServerResponse} response
     */
    requestListener = function(request, response)
    {
        request.addListener('end', function ()
        {
            // API request
            //
            var apiParams = apiParamsRegex.exec(request.url);
            if (apiParams) {
                /*
                    [
                        "/api/Page/load/path/home",
                        "Page",
                        "load",
                        "path/home"
                    ]
                */
                console.log('apiParams', apiParams);
                response.end(JSON.stringify(apiParams));
            }
            else
            {
                // Static File
                //
                staticServer.serve(request, response, function (err, res)
                {
                    if (err)
                    {
                        console.error('> Error serving ' + request.url + ' - ' + err.message);
                        response.writeHead(err.status, err.headers);
                        response.end();
                    }
                    else // success
                    {
                        console.log('> ' + request.url + ' - ' + res.message);
                    }
                });
            }
        });
    },

    /**
     * @var {http.Server}
     */
    httpServer = http.createServer(requestListener);

httpServer.listen(8082);
