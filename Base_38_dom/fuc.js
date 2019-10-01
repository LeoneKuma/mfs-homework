var data=[]
var navData=[]
function createData() {
    for (var i = 0; i < 100; i++) {
        data.push(
            { no: i, title: "标题" + i, clickTimes: 10 * i, replyTimes: i }
        )
    }
    return data;
}
function getData(page){
    return data.slice(page*12,page*12+12);
}
function createNavData(){
    if (data.length%12==0){
        var pageNums=parseInt(data.length/12);
    }
    else{
        var pageNums=parseInt(data.length/12)+1;
    }
    for (var i=1;i<=pageNums;i++){
        navData.push(i);
    }
    return navData;
}
function getNavData(){
    return navData;
}