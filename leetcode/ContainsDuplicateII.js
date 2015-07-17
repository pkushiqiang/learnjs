/**
 * Created by dlmu__000 on 7/17/2015.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var map = {};
    for(var i=0; i<k+1 && i<nums.length; i++) {
        if (  map[nums[i]] != null )
            return true;
        map[nums[i]] = i;
    }

    for( ; i<nums.length; i++) {
        delete map[nums[i-k-1]];
        if (  map[nums[i]] != null  )
            return true;
        map[nums[i]] = i;
    }
    return false;
};

var A = [1], k=1;
var res = containsNearbyDuplicate(A,k);
console.log(res);