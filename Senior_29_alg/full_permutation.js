var count=0;
function fullPermutation(arr,start=0,end=arr.length-1){
    if(start==end){
        var str="";
        for(var i=0;i<=end;i++){
            str+=arr[i];
            str+=" ";
        }
        count++;
        console.log(str);
    }

    for(var i=start;i<=end;i++){
        //固定一个元素，放到index==start位置上
        [arr[i],arr[start]]=[arr[start],arr[i]];
        //分解问题
        fullPermutation(arr,start+1,end);
        //还原对数组的改变。
        [arr[start],arr[i]]=[arr[i],arr[start]];
    }
}
var arr=["a",'b','c','d','e']
fullPermutation(arr)
console.log(count)