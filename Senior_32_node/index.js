var fs = require("fs");
var data = '';


// 创建可读流，读取test.png文件里的数据
var readerStream = fs.createReadStream('test.png');

// 设置编码为 Base64。
readerStream.setEncoding('base64');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
console.log("读取中")
data += chunk;
});

readerStream.on('end',function(){
console.log(data);
console.log("读取完成")
});

readerStream.on("finish",()=>{
    console.log("finish")
})

readerStream.on('error', function(err){
console.log(err.stack);
});

console.log("程序执行完毕");