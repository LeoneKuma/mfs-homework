const http = require("http");
const fs = require("fs");
const queryString=require("querystring");
const hostname = "localhost";
const port = "4444";

const server = http.createServer((req, res) => {
    if (req.url == "/uploadFile") {
        fs.mkdir("file",(err)=>{console.log(err)});
        var writerStream = fs.createWriteStream("./file/123.txt",{encoding:"base64"});
        req.on("data", (chunk) => {
            writerStream.write(chunk);
        })
        req.on("end", () => {
            console.log("读取完毕");

        });
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.end("Hello");
})

server.listen(port, hostname, () => {
    console.log(`run at ${hostname}:${port}......`);
})