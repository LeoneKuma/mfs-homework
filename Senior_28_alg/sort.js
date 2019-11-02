var data = require('./data.js')

/**插入排序
 * @param {number[]} arr
 * @param {String} [method="asc"] 默认升序，传入des为降序
 * @return {number[]}
 */
function insertSort(arr, method = "asc") {
    var len = arr.length;
    if (len <= 1) {
        return arr;
    }
    for (let i = 1; i < len; i++) { //从index=1开始遍历，将遍历到的元素插入前面的有序数组中
        var temp = arr[i]; //保存要插入的值，让出当前的位置，给前面的元素留出后退空间
        let j = i - 1;
        for (; j >= 0; j--) {
            if (method == "asc") {
                if (arr[j] > temp) {
                    //该元素后退一位
                    arr[j + 1] = arr[j]
                } else {
                    //找到了应该插入的位置
                    break;
                }
            } else if (method == "des") {
                if (arr[j] < temp) {
                    //该元素后退一位
                    arr[j + 1] = arr[j]
                } else {
                    //找到了应该插入的位置
                    break;
                }
            } else {
                throw new Error("Unknown sort method");
            }
        }
        arr[j + 1] = temp;
    }
    return arr
}

//console.log(insertSort(data.getRandomArray(10), "des"))

/**希尔排序
 * @param {number[]} arr
 * @param {number} step 步长
 * @param {String} [method="asc"] 默认升序，传入des为降序
 * @return {number[]}
 */

function shellSort(arr, step, method = "asc") {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    if (step >= len||step<=0) {
        throw new Error("Invalid step");
    }
    while (step != 0) {
        for (var i = 0; i < step; i++) {
            //每一轮，step个分组
            for (var j = i; j < len; j += step) {
                //插入排序
                var temp = arr[j];
                var m = j - step;
                for (; m >= 0; m -= step) {
                    if (method == "asc") {
                        if (arr[m] > temp) {
                            arr[m + step] = arr[m];
                        } else {
                            break;
                        }
                    } else if (method == "des") {
                        if (arr[m] < temp) {
                            arr[m + step] = arr[m];
                        } else {
                            break;
                        }
                    } else {
                        throw new Error("Unknown sort method")
                    }
                }
                arr[m+step]=temp;
            }
        }
        step = Math.floor(step /= 2)
    }
    return arr;
}
// var arr=data.getRandomArray(100000);
// //console.log(arr)
// console.log(shellSort(arr,10,"des"))

/**冒泡排序
 * @param {number[]} arr
 * @param {String} [method="asc"] 默认升序，传入des为降序
 * @return {number[]}
 */
function bubbleSort(arr,method="asc"){
    var len=arr.length;
    if(len<2){
        return arr
    }
    for(var i=0;i<len;i++){
        //如果经历一遍遍历没有交换，则数据本身已是有序，无需下一遍遍历。
        var isSwap=false;
        for(var j=len-1;j>i;j--){
            if(method=="asc"){
                if(arr[j]<arr[j-1]){
                    [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
                    isSwap=true;
                }
            }
            else if(method=="des"){
                if(arr[j]>arr[j-1]){
                    [arr[j-1],arr[j]]=[arr[j],arr[j-1]];
                    isSwap=true;
                }
            }else{
                throw new Error("Unknown sort method")
            }
        }
        if(isSwap==false){
            return arr;
        }
    }
    return arr;
}

// var arr=data.getRandomArray(1000);
// console.log(arr)
// console.log(bubbleSort(arr))

/**快速排序，选最左边为基准值
 * @param {number[]} arr
 * @param {String} [method="asc"] 默认升序，传入des为降序
 * @param {number} [left=0]
 * @param {number} [right=arr.length-1]
 * @return {number[]}
 */
 function quickSort(arr,method="asc",left=0,right=arr.length-1){
     var low=left;
     var high=right;
     if(high-low<1){
         return;
     }
     var temp=arr[left];
     while(low<high){
        if(method=="asc"){
            //因为选最左边为基准值，所以要先从右边开始扫描
            while(low<high&&arr[high]>=temp){
                high--;
            }
            //此位置arr[high]不比temp大，所以停下来，将值传到左边，而该位置的值等待覆盖
            arr[low]=arr[high];
            //开始从左边遍历
            while(low<high&&arr[low]<temp){
                low++;
            }
            arr[high]=arr[low]
        }else if(method=="des"){
             //因为选最左边为基准值，所以要先从右边开始扫描
             while(low<high&&arr[high]<=temp){
                 high--;
             }
             //此位置arr[high]不比temp大，所以停下来，将值传到左边，而该位置的值等待覆盖
             arr[low]=arr[high];
             //开始从左边遍历
             while(low<high&&arr[low]>temp){
                 low++;
             }
             arr[high]=arr[low]
         }else{
             throw new Error("Unknown sort method! ")
         }
     }
     //此时low==high,该位置左边的值比temp小，右边的值比temp大，替换该位置的值，完成一次分割。
     arr[low]=temp;
     
     //递归方式将左右子序列用同样的方式完成一次分割，直到我们传入的子序列只包含一个值，或者零个值。
     quickSort(arr,method,left,low-1);
     quickSort(arr,method,high+1,right);
     return arr;
 }

// var arr=data.getRandomArray(10);
// console.log(arr);
// console.log(quickSort(arr));

/**归并排序
 * @param {number[]} arr
 * @param {String} [method="asc"] 默认升序，传入des为降序
 * @param {number} left
 * @param {number} right
 * @param {number} mid
 * @return {number[]}
 */
function mergeSort(arr, method = "asc", left = 0, right = arr.length - 1,mid =Math.floor((right + left) / 2)) {
    var res=[];
     if (right - left <= 0) {
         res.push(arr[left]);
         return res
     }
     var res1=mergeSort(arr, method, left, mid);
     var res2=mergeSort(arr, method, mid + 1, right);
     //合并两个子序列
     var i_left = 0;
     var i_right = res1.length-1;
     var j_left = 0;
     var j_right = res2.length-1;

     while (i_left <= i_right && j_left <= j_right) {
         if (method == "asc") {
             if (res1[i_left] < res2[j_left]) {
                 res.push(res1[i_left]);
                 i_left++;
             } else {
                 res.push(res2[j_left]);
                 j_left++;
             }
         } else if (method == "des") {
             if (res1[i_left] > res2[j_left]) {
                 res.push(res1[i_left]);
                 i_left++;
             } else {
                 res.push(res2[j_left]);
                 j_left++;
             }
         } else {
             throw new Error("Unknown sort method")
         }
     }
     //剩下部分拼接起来
     if(i_left > i_right){
         while(j_left<=j_right){
             res.push(res2[j_left]);
             j_left++
         }
     }else if(j_left>j_right){
         while(i_left<=i_right){
             res.push(res1[i_left]);
             i_left++
         }
     }

     return res;
 }
// var arr=data.getRandomArray(10000)
// console.log(arr);
// console.log(mergeSort(arr))



/**选择排序
 * @param {number[]} arr
 * @param {String} [method="asc"] 默认升序，传入des为降序
 * @return {number[]}
 */
function selectSort(arr,method="asc"){
    var len=arr.length;
    if(len<=1){
        return arr;
    }
    for(var i=len-1;i>0;i--){
        let index=0;
        for(var j=0;j<i;j++){
            if(method=="asc"){
                if(arr[index]<arr[j]){
                    index=j;
                }
            }else if(method =="des"){
                if(arr[index]>arr[j]){
                    index=j;
                }
            }else{
                throw new Error("Unknown sort method!")
            }
        }
        [arr[i],arr[index]]=[arr[index],arr[i]];
    }
    return arr;
}
var arr=data.getRandomArray(100);
console.log(arr);
console.log(selectSort(arr));