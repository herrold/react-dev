var express = require("express");
var compress = require("compression");
var path = require("path");
// var ssr = require("../../../Downloads/reactjs-typescript-isomorphic-starterkit-master/dist/server/server.bundle.js");
var ssr = require("../server/main.js");

var server = express();
const port = process.env.PORT || 8080;

server.use(compress({ threshold: 0 }));
server.use(express.static(path.resolve(__dirname, "..", "build")));
server.use(function(req, res) {
  ssr.default(req, res);
});

server.listen(port, function() {
	var host = this.address().address;
	console.log("Server launched at http://%s:%s", host, port);
});
