var text=require("./text.txt");
var axios=require("axios")
require("./style.styl");
console.log(text);
axios.get("/").then((data)=>{
    console.log(data);
})