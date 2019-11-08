const fs=require("fs");
const queryString=require("querystring");
var ws=fs.createWriteStream("2.png");
var rs=fs.createReadStream("1.png");

rs.on("data",(chunk)=>{
    console.log(chunk);
    ws.write(chunk);
})
// rs.on("data",(chunk)=>{
    
// })