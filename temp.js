/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length==0){
        return nums
    }
    var left=0;
    var right=nums.length-1;
    if(left==right){
        if(nums[0]<target){
            return 1
        }else{
            return 0
        }
    }
    while(left<right){
        var mid=Math.floor((left+right)/2);
        if(nums[mid]==target){
            while(nums[mid]==target){
                mid--;
            }
            return mid+1;
        }else if(nums[mid]<target){
            if(right-left==1){
                if(nums[right]<target){
                    return right+1;
                }else{
                    return right;
                }
            }
            left=mid;
        }else if(nums[mid]>target){
            right=mid;
        }
    }
    return left;
};
var arr=[1,3,5,5];
console.log(searchInsert(arr,4));
