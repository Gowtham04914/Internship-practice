
const fs = require("fs");
const path = require("path");
const http = require("http");

// 2) Prepare paths
const filePath = path.join(__dirname, "ag.txt");

// 3) Write file
fs.writeFile(filePath, "Hello", (err) => {
  if (err) return console.log(err);

  // 4) Read file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return console.log(err);

    // 5) Create server
    const server = http.createServer((req, res) => {
      res.writeHead(200, {"Content-Type": "text/plain"});
      res.end(data);
    server.listen(6000);
  });
});
