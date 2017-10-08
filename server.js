const http = require("http");

const port = 3000;

const handleBody = req => {
  return new Promise((resolve, reject) => {
    const body = [];
    req.on("data", chunk => body.push(chunk));
    req.on("end", chunk => {
      const d = Buffer.concat(body).toString();
      resolve(d);
    });
    req.on("error", err => reject(err));
  });
};

const server = http.createServer((req, res) => {
  handleBody(req).then(body => console.log(JSON.parse(body)));

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "success!!" }));
});

server.listen(port);
