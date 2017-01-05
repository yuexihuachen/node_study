var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	fs.createReadStream('./data/image.jpg').pipe(res);
}).listen(3001);
console.log("success");
