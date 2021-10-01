// Given an array of integers, return the indices(index of every value) of the two numbers that add up to a given target.

const findTwoNumber = function(nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
      let numberToFind = target - nums[p1];
      console.log(numberToFind , 'number to find')
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      console.log(nums[p2], 'this is nums[p2]');

        if(numberToFind==nums[p2]){
          console.log([p1,p2] , 'the values of p1 and p2');
          return [p1,p2];
        }
    }
  }
  return null;
}

const nums = [1, 3, 7, 9, 2];
const target = 11;

findTwoNumber(nums, target);



