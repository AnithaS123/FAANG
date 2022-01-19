// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is 
// represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 
// 6 units of rain water (blue section) are being trapped.


const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const getTrappedRainWater = function (heights) {
  let totalWater = 0;
  let maxLeft = 0,
    maxRight = 0,
    left = 0,
    right = heights.length - 1;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }
  return totalWater;
};
console.log(getTrappedRainWater(elevationArray));
