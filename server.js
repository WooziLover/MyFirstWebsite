const http = require('http'),
      server = http.createServer();

server.on('request',(request,response)=>{
   console.log(request);	
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('HELLO!!! MY FIRST WEBSITE');
   response.end();
});

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});