var fs = require('fs');
/*
function callback(error,data){
  console.log(data);
}
fs.readFile('./data/JavaScript','utf8',callback);
*/

fs.readFile('./data/JavaScript', 'utf8', function(error, data){
  console.log(data);
})
