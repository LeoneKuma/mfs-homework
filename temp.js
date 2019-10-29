
var threeSum = function (nums) {

    //如果数组长度小于三，直接退出
    var len = nums.length;
    if (len < 3) {
        return [];
    }
    nums.sort((a, b) => a - b)
    let min = nums[0];

    let obj = {};
    let res = {};
    let resArray = [];
    let target = 0;

    for (x in nums) {
        obj[nums[x]] = x;
    }

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            let val = target - (nums[i] + nums[j]);
            if (val < min) break;
            //如果能匹配的数存在，且该数与当前两个数的下标不同，则向res对象里写入该三元组
            var index = obj[val];
            if (index && index != i && index != j) {
                let attr = "";
                if (index < i) {
                    attr = val + "," + nums[i] + "," + nums[j];
                    if (!res[attr]) {
                        res[attr] = true;
                        resArray.push([val, nums[i], nums[j]]);
                    }
                } else if (index > j) {
                    attr = nums[i] + "," + nums[j] + "," + val;
                    if (!res[attr]) {
                        res[attr] = true;
                        resArray.push([nums[i], nums[j], val]);
                    }
                } else {
                    attr = nums[i] + "," + val + "," + nums[j];
                    if (!res[attr]) {
                        res[attr] = true;
                        resArray.push([nums[i], val, nums[j]]);
                    }
                }

            }
        }
    }
    return resArray;

};
