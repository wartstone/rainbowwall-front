const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`req = ${req.url}, res = ${res}`)

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  json = {
    name: "RainbowWall",
    description: "TESTcontent1s",
    cid: "xxxxxx"
  };
  content = JSON.stringify(json);
//   res.end("celloworld");
  res.end(content);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});