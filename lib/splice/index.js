/*global require, exports, console, __dirname */
var
    fs = require('fs'),
    handlebars = require('handlebars'),
    http = require('http'),
    path = require('path'),
    servlet = require('./servlet'),
    static = require('node-staticp'),
    util = require('./lib/util.js');

exports.version = [0, 0, 1];

// Create handlebars helper, "servlet".
handlebars.registerHelper('servlet', function(name, view)
{
	return 'Calling servlet: ' + name + (typeof view === "string" ? ', view: ' + view : '');
});

/**
 * Launched with servlet name and path.
 * Finds file with servlet namespace name,
 * - loads it
 * - publishes its routes
 * - wraps it and runs
 */
exports.Server = function (options)
{
	this.options = options || {};
	this.api_path = this.options.api_path || '/api';
    this.apiRegex = new RegExp('^' + this.api_path + '/([^/]+)/([^/]+)/(.*)$');
	this.http_port = this.options.http_port;
	this.pages_dir = this.options.pages_dir;
	this.static_dir = this.options.static_dir;
	this.servlets_dir = this.options.servlets_dir;
	this.static_postscript = this.options.static_postscript;

	this.pageRoutes = {};
    this.staticServer = new(static.Server)(this.static_dir, { postscript: this.options.static_postscript });

    this.addPageRoutes(this.pageRoutes, this.options.pages_dir);
};

exports.Server.prototype.addPageRoutes = function (pageRoutes, pages_dir)
{
	console.log('Adding page routes for pages dir: ' + pages_dir);
	var self = this;

	util.readDir(pages_dir, function(err, found)
	{
		if (err) { console.log(err); return; }
		var i;
		console.log(found);

		for (i = 0; i < found.files.length; i++)
		{
			(function (file)
			{
				var path = file.slice(pages_dir.length, -4);
				fs.readFile(file, 'utf-8', function (err, data)
				{
					if (err) { console.log(err); return; }
					var template = handlebars.compile(data);
					console.log('Mapping page: ' + path + ' to template: ' + file);
					self.pageRoutes[path] = function (req, res)
					{
						console.log('Rendering page: ' + path + ' with template: ' + file);
						return template({ request: req, response: res });
					};
				});
			})(found.files[i]);
		}
		// console.log('Pages directory routed.');
	});
};

exports.Server.prototype.listen = function (port)
{
	var self = this;
	this.httpServer = http.createServer(function(request, response)
    {
        request.addListener('end', function ()
        {
            // API request
            //
            var apiParams = self.apiRegex.exec(request.url);
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
                return;
            }

            // Routes
            //
            if (self.pageRoutes[request.url])
            {
                response.end(self.pageRoutes[request.url](request, response));
            	return;
            }

            // Static File
            //
            self.staticServer.serve(request, response, function (err, res)
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
        });
	}).listen(port);
};
