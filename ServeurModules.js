//var http = require('http'); // Fait appel à http.js
var url = require('url'); // Fait appel à url.js

//var test = require('./ModulesTest'); // Fait appel à ModulesTest.js (même dossier)
var Modules = require('ModulesTest'); // Fait appel à test.js (sous-dossier node_modules)

//Modules.direBonjour();
//Modules.direByeBye();
//Modules.html();


var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(Modules.html());

	res.end();
});
server.listen(8080);
