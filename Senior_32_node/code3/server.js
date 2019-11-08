const http = require("http");
const queryString = require("querystring");
const hostname = "localhost";
const port = "4444";
var data="";

const server = http.createServer((req, res) => {
    req.on("data", (chunk) => {
        data+=chunk;
    })
    req.on("end", () => {
        console.log("读取完毕");
        console.log(data);
        data="";
    
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end("Hello");
});


server.listen(port, hostname, () => {
    console.log(`run at ${hostname}:${port}......`);
})