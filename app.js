var static = require('node-static');
var http = require('http');
var httpProxy = require('http-proxy');  // https://github.com/http-party/node-http-proxy

var proxy = httpProxy.createProxyServer({});

// httpProxy.createProxyServer({
//     target:'http://localhost:5001'
// }).listen(9006);

var server = new(static.Server)(__dirname);

http.createServer(function (req, res) {
  console.log(`req = ${req.url}, res = ${res.statusCode}`)

  if(req.url.startsWith("/api")) {
      console.log("proxying")

      proxy.web(req, res, {
        target: 'http://127.0.0.1:5001'
        // selfHandleResponse: true
        // target: 'https://baidu.com'
        // http://127.0.0.1:3000/api/v0/add?stream-channels=true&progress=false
      }, function(err, req,res,target) {
          console.log(`err = ${err}, req = ${req}, res = ${res}, target = ${target}`)
          res.end("celloworld");
      });

        // res.statusCode = 200;
        // res.setHeader('Content-Type', 'text/plain');
        // json = {
        //     name: "RainbowWall",
        //     description: "TESTcontent1s",
        //     cid: "xxxxxx"
        // };
        // content = JSON.stringify(json);
        // //   res.end("celloworld");
        // res.end(content);
  } else {
    server.serve(req, res);
  }
}).listen(9006);