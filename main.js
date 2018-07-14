var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
  var qs =url.parse(req.url, true).query;

  fs.readdir('./data', function(error2, files){
    console.log(files);
    var list = '<ol>';
    var i = 0;
    while(i < files.length){
      list = list + `<li><a href="/?id=${files[i]}">${files[i]}</a></li>`;
      i++;
    }
    list = list + '</ol>';
    fs.readFile(`./data/${qs.id}`, 'utf8', function(error, data){
      var title = qs.id;
      var desc = data;
      //만약에 title의 값이 undefined이면
      if(title === undefined) {
        //  title의 값을 Welcome으로 한다.
        title = 'Welcome';
      }
      if(desc === undefined){
        desc = 'Hello, WEB';
      }
      res.write(`
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        <h2>${title}</h2>
        ${desc}
      </body>
      </html>
      `); //write a response to the client
      res.end(); //end the response
  })
  });


}).listen(8080); //the server object listens on port 8080
