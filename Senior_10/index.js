
// var p1=new Promise(function(resolve,reject){
//    reject("p1");
// });
// var p2=new Promise(function(resolve,reject){
//    reject("p2");
// });
// var p3=new Promise(function(resolve,reject){
//    resolve("p3");
// });

// Promise.all(new Set([1,2,3])).then(
//    function(data){
//       console.log("then:"+data);
//    }
// ).catch(
//    function(data){
//       console.log("catch:"+data);
//    }
// )

var p = new Promise(function (resolve, reject) {
    resolve("resolve done")
});

var obj=p.then(function (data) {
   console.log("1"+data);
});
var obj2=p.then(function (data) {
   console.log("2:"+data);
});

console.log(obj ==p);//false
console.log(obj==obj2)//false