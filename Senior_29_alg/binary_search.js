function binarySearch(arr,target,start=0,end=arr.length-1){
    var mid=Math.floor((start+end)/2)
    if(target==arr[mid]){
        return mid;
    }else if(start==end){
        return "不存在"
    }
    if(target<arr[mid]){
        return binarySearch(arr,target,start,mid-1);
    }else{
        return binarySearch(arr,target,mid+1,end)
    }
}

var arr=[0,1,2,3,5,5,6];
console.log(binarySearch(arr,2));
