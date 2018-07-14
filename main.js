var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  var qs =url.parse(req.url, true).query;

  fs.readFile(`./data/${qs.id}`, 'utf8', function(error, data){
    res.write(`
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${qs.id}</h2>
      ${data}
    </body>
    </html>
    `); //write a response to the client
    res.end(); //end the response
  })


}).listen(8080); //the server object listens on port 8080
