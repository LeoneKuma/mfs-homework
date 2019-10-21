function ajaxGet(url) {
   return new Promise(
      function (resolve, reject) {
         var xhr = new XMLHttpRequest();
         xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
               //   callback(JSON.parse(xhr.responseText));
               resolve(xhr.response);
            }
            else {
               reject("Get failed");
            }
         }
         xhr.open("get", url, true);
         xhr.send(null);

      }
   )
}
var url = "http://127.0.0.1:5500/mfs-homework/Senior_13/region.js";
// var url="https://3g.163.com/touch/reconstruct/article/list/BA8D4A3Rwangning/0-20.html";
// ajaxGet(url).then(function(data){
//    console.log(data);
// }).catch(function(err){
//    console.log(err)
// });

for (var i = 0; i < 10; i++) {
   ajaxGet(url).then(function () {
      console.log(url);
   })
}


function a() {
   console.log("1");
   function b() {
      console.log("2");
      return;
   }
   b();
   console.log("3");
}
function foo(a, b, c, d) { }
function bar(foo) {
   return 

};

function fn(){
   console.log(arguments.length);
   console.log(arguments[0]);
   console.log(arguments[1]);
   console.log(arguments[2]);
   console.log(arguments[3]);

}

fn(1,2,3,4)



 