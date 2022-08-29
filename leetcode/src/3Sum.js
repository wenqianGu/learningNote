/**Given an integer array nums, return all the triplets
 * [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 **/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var tripleArray = [];
    nums = nums.sort((a, b) => a - b)
  for (let x =0; x< nums.length ; x++ ){
      for(let y=0; y< nums.length; y++){
          for(let z=0; z<nums.length ; z++){
              if(x!= y && y!= z && x !=z){
                  if(nums[x]+nums[y]+nums[z] === 0){
                      tripleArray.push([nums[x],nums[y],nums[z]]);
                  }
              }
          }
      }
  }
  return tripleArray;
};

var test = threeSum([-1,0,1,2,-1,-4]);
console.log(test);