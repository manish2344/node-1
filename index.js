const http = require("http");
const fs = require("fs");
const express= require("express");
const app = express();
let date = Date();
fs.writeFileSync("dateTime/sample.txt", date);

http
  .createServer((req, res) => {
    fs.readFile("dateTime/sample.txt", (err, data) => {
      res.writeHeader(200, ["content-type", "text/html"]);
      res.write(data);
      res.end();
    });
  })
const PORT = 10000;
app.listen(PORT, () => {
    console.log("Listening to ", PORT);
});