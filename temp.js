/**
 * @param {number[]} arr
 * @param {number[]} ans
 * @param {number[]} res
 * @param {number} target
 * @param {number} index
 * @return {number}
 */
var search=function(arr,ans,res,target,index){
    if(target==0){ //
        var [...temp]=ans
        res.push(temp);
        return 
    }
    if(target<0){
        return;
    }
    for(var i=index;target>=arr[i]&&i<arr.length;i++){
        ans.push(arr[i]);
        search(arr,ans,res,target-arr[i],i);
        ans.pop();
    }
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    var ans=[];
    var res=[];
    search(candidates,ans,res,target,0);
    return res;    
};
var arr=[2,5,2,1,2];
var target=5;
console.log(combinationSum(arr,target));