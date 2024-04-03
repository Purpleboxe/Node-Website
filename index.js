const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  res.write("<h1>Hello World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
