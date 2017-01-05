var http=require('http');

var server=http.createServer();

server.on('request',function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world!');
});
server.listen(3001);
console.log("success");